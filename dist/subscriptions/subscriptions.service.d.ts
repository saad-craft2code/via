import { PrismaService } from '../prisma/prisma.service';
import type { CreatePlanDto } from './dto/create-plan.dto';
import type { SubscribeDto } from './dto/subscribe.dto';
import type { UpdateSubscriptionStatusDto } from './dto/update-subscription-status.dto';
import type { User } from '@prisma/client';
export declare class SubscriptionsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    listPlans(): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        type: import(".prisma/client").$Enums.SubscriptionPlanType;
        commissionRate: import("@prisma/client/runtime/library").Decimal | null;
        slug: string;
        priceMonthly: import("@prisma/client/runtime/library").Decimal | null;
        isActive: boolean;
    }[]>;
    getUserSubscription(userId: string): Promise<{
        user: {
            id: string;
            email: string;
            role: import(".prisma/client").$Enums.UserRole;
            subscriptionStatus: import(".prisma/client").$Enums.SubscriptionStatus;
            currentPlanName: string;
            currentPlanType: import(".prisma/client").$Enums.SubscriptionPlanType;
            nextBillingAt: Date;
        };
        currentSubscription: {
            plan: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                description: string | null;
                type: import(".prisma/client").$Enums.SubscriptionPlanType;
                commissionRate: import("@prisma/client/runtime/library").Decimal | null;
                slug: string;
                priceMonthly: import("@prisma/client/runtime/library").Decimal | null;
                isActive: boolean;
            };
        } & {
            id: string;
            nextBillingAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            status: import(".prisma/client").$Enums.SubscriptionStatus;
            userId: string;
            adminNotes: string | null;
            planId: string;
            autoRenew: boolean;
            startsAt: Date;
            endsAt: Date | null;
        };
        plan: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            type: import(".prisma/client").$Enums.SubscriptionPlanType;
            commissionRate: import("@prisma/client/runtime/library").Decimal | null;
            slug: string;
            priceMonthly: import("@prisma/client/runtime/library").Decimal | null;
            isActive: boolean;
        };
    }>;
    createPlan(dto: CreatePlanDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        type: import(".prisma/client").$Enums.SubscriptionPlanType;
        commissionRate: import("@prisma/client/runtime/library").Decimal | null;
        slug: string;
        priceMonthly: import("@prisma/client/runtime/library").Decimal | null;
        isActive: boolean;
    }>;
    updatePlan(id: string, dto: Partial<CreatePlanDto>): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        type: import(".prisma/client").$Enums.SubscriptionPlanType;
        commissionRate: import("@prisma/client/runtime/library").Decimal | null;
        slug: string;
        priceMonthly: import("@prisma/client/runtime/library").Decimal | null;
        isActive: boolean;
    }>;
    subscribe(userId: string, dto: SubscribeDto): Promise<{
        subscription: {
            plan: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                description: string | null;
                type: import(".prisma/client").$Enums.SubscriptionPlanType;
                commissionRate: import("@prisma/client/runtime/library").Decimal | null;
                slug: string;
                priceMonthly: import("@prisma/client/runtime/library").Decimal | null;
                isActive: boolean;
            };
        } & {
            id: string;
            nextBillingAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            status: import(".prisma/client").$Enums.SubscriptionStatus;
            userId: string;
            adminNotes: string | null;
            planId: string;
            autoRenew: boolean;
            startsAt: Date;
            endsAt: Date | null;
        };
        message: string;
    }>;
    listAdminSubscriptions(): Promise<({
        user: {
            id: string;
            email: string;
            firebaseUid: string | null;
            passwordHash: string | null;
            name: string;
            role: import(".prisma/client").$Enums.UserRole;
            phone: string | null;
            companyName: string | null;
            businessLicense: string | null;
            tourGuideLicense: string | null;
            yearsExperience: number | null;
            languagesSpoken: string[];
            avatarUrl: string | null;
            kycStatus: import(".prisma/client").$Enums.KycStatus;
            kycSubmittedAt: Date | null;
            kycReviewedAt: Date | null;
            kycRejectionReason: string | null;
            subscriptionStatus: import(".prisma/client").$Enums.SubscriptionStatus;
            currentPlanName: string | null;
            currentPlanType: import(".prisma/client").$Enums.SubscriptionPlanType | null;
            nextBillingAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
        plan: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            type: import(".prisma/client").$Enums.SubscriptionPlanType;
            commissionRate: import("@prisma/client/runtime/library").Decimal | null;
            slug: string;
            priceMonthly: import("@prisma/client/runtime/library").Decimal | null;
            isActive: boolean;
        };
    } & {
        id: string;
        nextBillingAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.SubscriptionStatus;
        userId: string;
        adminNotes: string | null;
        planId: string;
        autoRenew: boolean;
        startsAt: Date;
        endsAt: Date | null;
    })[]>;
    updateAdminSubscriptionStatus(id: string, dto: UpdateSubscriptionStatusDto): Promise<{
        id: string;
        nextBillingAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.SubscriptionStatus;
        userId: string;
        adminNotes: string | null;
        planId: string;
        autoRenew: boolean;
        startsAt: Date;
        endsAt: Date | null;
    }>;
    getCommissionRateForUser(user: User): Promise<number>;
}
