import { SubscriptionsService } from './subscriptions.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { SubscribeDto } from './dto/subscribe.dto';
import { UpdateSubscriptionStatusDto } from './dto/update-subscription-status.dto';
import type { User } from '@prisma/client';
export declare class SubscriptionsController {
    private readonly subscriptions;
    constructor(subscriptions: SubscriptionsService);
    listPlans(): Promise<import("@via/shared-types").ApiResponse<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.SubscriptionPlanType;
        commissionRate: import("@prisma/client/runtime/library").Decimal | null;
        description: string | null;
        slug: string;
        priceMonthly: import("@prisma/client/runtime/library").Decimal | null;
        isActive: boolean;
    }[]>>;
    mySubscription(user: User): Promise<import("@via/shared-types").ApiResponse<{
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
                name: string;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                type: import(".prisma/client").$Enums.SubscriptionPlanType;
                commissionRate: import("@prisma/client/runtime/library").Decimal | null;
                description: string | null;
                slug: string;
                priceMonthly: import("@prisma/client/runtime/library").Decimal | null;
                isActive: boolean;
            };
        } & {
            id: string;
            nextBillingAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            status: import(".prisma/client").$Enums.SubscriptionStatus;
            adminNotes: string | null;
            planId: string;
            autoRenew: boolean;
            startsAt: Date;
            endsAt: Date | null;
        };
        plan: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            type: import(".prisma/client").$Enums.SubscriptionPlanType;
            commissionRate: import("@prisma/client/runtime/library").Decimal | null;
            description: string | null;
            slug: string;
            priceMonthly: import("@prisma/client/runtime/library").Decimal | null;
            isActive: boolean;
        };
    }>>;
    subscribe(user: User, dto: SubscribeDto): Promise<import("@via/shared-types").ApiResponse<{
        subscription: {
            plan: {
                name: string;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                type: import(".prisma/client").$Enums.SubscriptionPlanType;
                commissionRate: import("@prisma/client/runtime/library").Decimal | null;
                description: string | null;
                slug: string;
                priceMonthly: import("@prisma/client/runtime/library").Decimal | null;
                isActive: boolean;
            };
        } & {
            id: string;
            nextBillingAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            status: import(".prisma/client").$Enums.SubscriptionStatus;
            adminNotes: string | null;
            planId: string;
            autoRenew: boolean;
            startsAt: Date;
            endsAt: Date | null;
        };
        message: string;
    }>>;
}
export declare class AdminSubscriptionsController {
    private readonly subscriptions;
    constructor(subscriptions: SubscriptionsService);
    list(): Promise<import("@via/shared-types").ApiResponse<({
        user: {
            name: string;
            id: string;
            email: string;
            passwordHash: string | null;
            role: import(".prisma/client").$Enums.UserRole;
            phone: string | null;
            companyName: string | null;
            businessLicense: string | null;
            tourGuideLicense: string | null;
            yearsExperience: number | null;
            languagesSpoken: string[];
            avatarUrl: string | null;
            firebaseUid: string | null;
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
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            type: import(".prisma/client").$Enums.SubscriptionPlanType;
            commissionRate: import("@prisma/client/runtime/library").Decimal | null;
            description: string | null;
            slug: string;
            priceMonthly: import("@prisma/client/runtime/library").Decimal | null;
            isActive: boolean;
        };
    } & {
        id: string;
        nextBillingAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: import(".prisma/client").$Enums.SubscriptionStatus;
        adminNotes: string | null;
        planId: string;
        autoRenew: boolean;
        startsAt: Date;
        endsAt: Date | null;
    })[]>>;
    createPlan(dto: CreatePlanDto): Promise<import("@via/shared-types").ApiResponse<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.SubscriptionPlanType;
        commissionRate: import("@prisma/client/runtime/library").Decimal | null;
        description: string | null;
        slug: string;
        priceMonthly: import("@prisma/client/runtime/library").Decimal | null;
        isActive: boolean;
    }>>;
    updatePlan(id: string, dto: Partial<CreatePlanDto>): Promise<import("@via/shared-types").ApiResponse<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.SubscriptionPlanType;
        commissionRate: import("@prisma/client/runtime/library").Decimal | null;
        description: string | null;
        slug: string;
        priceMonthly: import("@prisma/client/runtime/library").Decimal | null;
        isActive: boolean;
    }>>;
    updateStatus(id: string, dto: UpdateSubscriptionStatusDto): Promise<import("@via/shared-types").ApiResponse<{
        id: string;
        nextBillingAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: import(".prisma/client").$Enums.SubscriptionStatus;
        adminNotes: string | null;
        planId: string;
        autoRenew: boolean;
        startsAt: Date;
        endsAt: Date | null;
    }>>;
}
