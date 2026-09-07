"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SubscriptionsService = class SubscriptionsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async listPlans() {
        return this.prisma.subscriptionPlan.findMany({
            where: { isActive: true },
            orderBy: { createdAt: 'desc' },
        });
    }
    async getUserSubscription(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            include: {
                subscriptions: {
                    include: { plan: true },
                    orderBy: { createdAt: 'desc' },
                },
            },
        });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const activeSubscription = user.subscriptions.find((sub) => ['Pending', 'Active'].includes(sub.status)) ?? user.subscriptions[0] ?? null;
        return {
            user: {
                id: user.id,
                email: user.email,
                role: user.role,
                subscriptionStatus: user.subscriptionStatus,
                currentPlanName: user.currentPlanName,
                currentPlanType: user.currentPlanType,
                nextBillingAt: user.nextBillingAt,
            },
            currentSubscription: activeSubscription,
            plan: activeSubscription?.plan ?? null,
        };
    }
    async createPlan(dto) {
        return this.prisma.subscriptionPlan.create({
            data: {
                name: dto.name,
                slug: dto.slug,
                type: dto.type,
                description: dto.description ?? null,
                priceMonthly: dto.priceMonthly !== undefined ? dto.priceMonthly : null,
                commissionRate: dto.commissionRate !== undefined ? dto.commissionRate : null,
                isActive: dto.isActive ?? true,
            },
        });
    }
    async updatePlan(id, dto) {
        const plan = await this.prisma.subscriptionPlan.findUnique({ where: { id } });
        if (!plan)
            throw new common_1.NotFoundException('Subscription plan not found');
        return this.prisma.subscriptionPlan.update({
            where: { id },
            data: {
                ...(dto.name !== undefined && { name: dto.name }),
                ...(dto.slug !== undefined && { slug: dto.slug }),
                ...(dto.type !== undefined && { type: dto.type }),
                ...(dto.description !== undefined && { description: dto.description }),
                ...(dto.priceMonthly !== undefined && { priceMonthly: dto.priceMonthly }),
                ...(dto.commissionRate !== undefined && { commissionRate: dto.commissionRate }),
                ...(dto.isActive !== undefined && { isActive: dto.isActive }),
            },
        });
    }
    async subscribe(userId, dto) {
        const plan = await this.prisma.subscriptionPlan.findUnique({
            where: { id: dto.planId },
        });
        if (!plan)
            throw new common_1.NotFoundException('Subscription plan not found');
        if (!plan.isActive)
            throw new common_1.BadRequestException('This subscription plan is inactive');
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const startsAt = new Date();
        const nextBillingAt = plan.type === 'Monthly' ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) : null;
        const status = plan.type === 'Monthly' ? 'Active' : 'Pending';
        return this.prisma.$transaction(async (tx) => {
            const subscription = await tx.userSubscription.create({
                data: {
                    userId,
                    planId: plan.id,
                    status,
                    autoRenew: dto.autoRenew ?? true,
                    startsAt,
                    endsAt: null,
                    nextBillingAt,
                },
                include: { plan: true },
            });
            await tx.user.update({
                where: { id: userId },
                data: {
                    subscriptionStatus: status,
                    currentPlanName: plan.name,
                    currentPlanType: plan.type,
                    nextBillingAt,
                },
            });
            return {
                subscription,
                message: plan.type === 'Monthly' ? 'Monthly plan activated' : 'Commission plan submitted for admin approval',
            };
        });
    }
    async listAdminSubscriptions() {
        return this.prisma.userSubscription.findMany({
            where: {
                status: { in: ['Pending', 'Active', 'Expired', 'Cancelled', 'Suspended'] },
            },
            include: { user: true, plan: true },
            orderBy: { createdAt: 'desc' },
        });
    }
    async updateAdminSubscriptionStatus(id, dto) {
        const subscription = await this.prisma.userSubscription.findUnique({
            where: { id },
            include: { user: true, plan: true },
        });
        if (!subscription)
            throw new common_1.NotFoundException('Subscription not found');
        const nextBillingAt = dto.status === 'Active' && subscription.plan.type === 'Monthly'
            ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
            : null;
        return this.prisma.$transaction(async (tx) => {
            const updated = await tx.userSubscription.update({
                where: { id },
                data: {
                    status: dto.status,
                    adminNotes: dto.adminNotes ?? subscription.adminNotes ?? null,
                    nextBillingAt,
                },
            });
            await tx.user.update({
                where: { id: subscription.userId },
                data: {
                    subscriptionStatus: dto.status,
                    currentPlanName: subscription.plan.name,
                    currentPlanType: subscription.plan.type,
                    nextBillingAt,
                },
            });
            return updated;
        });
    }
    async getCommissionRateForUser(user) {
        const latest = await this.prisma.userSubscription.findFirst({
            where: {
                userId: user.id,
                status: 'Active',
            },
            include: { plan: true },
            orderBy: { createdAt: 'desc' },
        });
        if (!latest || !latest.plan.commissionRate)
            return 1;
        return Number(latest.plan.commissionRate);
    }
};
exports.SubscriptionsService = SubscriptionsService;
exports.SubscriptionsService = SubscriptionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SubscriptionsService);
//# sourceMappingURL=subscriptions.service.js.map