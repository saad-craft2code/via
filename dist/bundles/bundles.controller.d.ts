import { BundlesService } from './bundles.service';
import { CreateBundleDto } from './dto/create-bundle.dto';
import { UpdateBundleDto } from './dto/update-bundle.dto';
import type { User } from '@prisma/client';
export declare class BundlesController {
    private readonly bundles;
    constructor(bundles: BundlesService);
    list(user: User): Promise<import("@via/shared-types").ApiResponse<({
        days: ({
            items: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                type: string;
                metadata: import("@prisma/client/runtime/library").JsonValue | null;
                description: string | null;
                location: string | null;
                title: string;
                includedServices: string[];
                startTime: string | null;
                endTime: string | null;
                cost: import("@prisma/client/runtime/library").Decimal | null;
                bundleDayId: string;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            bundleId: string;
            description: string | null;
            title: string;
            dayNumber: number;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.BundleStatus;
        description: string;
        images: string[];
        creatorId: string;
        title: string;
        durationDays: number;
        destinations: string[];
        guideName: string | null;
        price: import("@prisma/client/runtime/library").Decimal;
        difficulty: string;
        groupSize: number | null;
        includedServices: string[];
    })[]>>;
    get(id: string, user: User): Promise<import("@via/shared-types").ApiResponse<{
        days: ({
            items: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                type: string;
                metadata: import("@prisma/client/runtime/library").JsonValue | null;
                description: string | null;
                location: string | null;
                title: string;
                includedServices: string[];
                startTime: string | null;
                endTime: string | null;
                cost: import("@prisma/client/runtime/library").Decimal | null;
                bundleDayId: string;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            bundleId: string;
            description: string | null;
            title: string;
            dayNumber: number;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.BundleStatus;
        description: string;
        images: string[];
        creatorId: string;
        title: string;
        durationDays: number;
        destinations: string[];
        guideName: string | null;
        price: import("@prisma/client/runtime/library").Decimal;
        difficulty: string;
        groupSize: number | null;
        includedServices: string[];
    }>>;
    create(user: User, dto: CreateBundleDto): Promise<import("@via/shared-types").ApiResponse<{
        days: ({
            items: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                type: string;
                metadata: import("@prisma/client/runtime/library").JsonValue | null;
                description: string | null;
                location: string | null;
                title: string;
                includedServices: string[];
                startTime: string | null;
                endTime: string | null;
                cost: import("@prisma/client/runtime/library").Decimal | null;
                bundleDayId: string;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            bundleId: string;
            description: string | null;
            title: string;
            dayNumber: number;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.BundleStatus;
        description: string;
        images: string[];
        creatorId: string;
        title: string;
        durationDays: number;
        destinations: string[];
        guideName: string | null;
        price: import("@prisma/client/runtime/library").Decimal;
        difficulty: string;
        groupSize: number | null;
        includedServices: string[];
    }>>;
    update(id: string, user: User, dto: UpdateBundleDto): Promise<import("@via/shared-types").ApiResponse<{
        days: ({
            items: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                type: string;
                metadata: import("@prisma/client/runtime/library").JsonValue | null;
                description: string | null;
                location: string | null;
                title: string;
                includedServices: string[];
                startTime: string | null;
                endTime: string | null;
                cost: import("@prisma/client/runtime/library").Decimal | null;
                bundleDayId: string;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            bundleId: string;
            description: string | null;
            title: string;
            dayNumber: number;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.BundleStatus;
        description: string;
        images: string[];
        creatorId: string;
        title: string;
        durationDays: number;
        destinations: string[];
        guideName: string | null;
        price: import("@prisma/client/runtime/library").Decimal;
        difficulty: string;
        groupSize: number | null;
        includedServices: string[];
    }>>;
    remove(id: string, user: User): Promise<import("@via/shared-types").ApiResponse<{
        id: string;
    }>>;
}
