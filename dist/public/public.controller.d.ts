import { PrismaService } from '../prisma/prisma.service';
export declare class PublicController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    listHotels(): Promise<import("@via/shared-types").ApiResponse<({
        rooms: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            hotelId: string;
            amenities: string[];
            images: string[];
            roomType: string;
            bedType: string;
            maxGuests: number;
            pricePerNight: import("@prisma/client/runtime/library").Decimal;
            size: number | null;
            totalUnits: number;
            availableUnits: number;
        }[];
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        ownerId: string;
        description: string;
        starRating: number;
        location: string;
        city: string | null;
        latitude: number | null;
        longitude: number | null;
        amenities: string[];
        images: string[];
        policies: import("@prisma/client/runtime/library").JsonValue | null;
    })[]>>;
    getHotel(id: string): Promise<import("@via/shared-types").ApiResponse<{
        rooms: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            hotelId: string;
            amenities: string[];
            images: string[];
            roomType: string;
            bedType: string;
            maxGuests: number;
            pricePerNight: import("@prisma/client/runtime/library").Decimal;
            size: number | null;
            totalUnits: number;
            availableUnits: number;
        }[];
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        ownerId: string;
        description: string;
        starRating: number;
        location: string;
        city: string | null;
        latitude: number | null;
        longitude: number | null;
        amenities: string[];
        images: string[];
        policies: import("@prisma/client/runtime/library").JsonValue | null;
    }>>;
    listBundles(): Promise<import("@via/shared-types").ApiResponse<({
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
    getBundle(id: string): Promise<import("@via/shared-types").ApiResponse<any>>;
}
