import { type User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import type { CreateBookingDto } from './dto/create-booking.dto';
import type { UpdateBookingStatusDto } from './dto/update-booking-status.dto';
export declare class BookingsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private parseBookingDates;
    private validateHotelRoomAvailability;
    private validateBundleAvailability;
    create(userId: string, dto: CreateBookingDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        hotelId: string | null;
        roomId: string | null;
        status: import(".prisma/client").$Enums.BookingStatus;
        bundleId: string | null;
        type: import(".prisma/client").$Enums.BookingType;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        userId: string;
        startDate: Date;
        endDate: Date | null;
        numGuests: number;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        commissionRate: import("@prisma/client/runtime/library").Decimal | null;
        commissionAmount: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    private readonly bookingInclude;
    list(user: User): Promise<({
        user: {
            id: string;
            email: string;
            name: string;
            phone: string;
            avatarUrl: string;
        };
        hotel: {
            id: string;
            name: string;
            location: string;
            city: string;
            images: string[];
        };
        room: {
            id: string;
            images: string[];
            roomType: string;
            bedType: string;
        };
        bundle: {
            id: string;
            description: string;
            images: string[];
            title: string;
            destinations: string[];
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        hotelId: string | null;
        roomId: string | null;
        status: import(".prisma/client").$Enums.BookingStatus;
        bundleId: string | null;
        type: import(".prisma/client").$Enums.BookingType;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        userId: string;
        startDate: Date;
        endDate: Date | null;
        numGuests: number;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        commissionRate: import("@prisma/client/runtime/library").Decimal | null;
        commissionAmount: import("@prisma/client/runtime/library").Decimal | null;
    })[]>;
    get(id: string, user: User): Promise<{
        user: {
            id: string;
            email: string;
            name: string;
            phone: string;
            avatarUrl: string;
        };
        hotel: {
            id: string;
            name: string;
            location: string;
            city: string;
            images: string[];
        };
        room: {
            id: string;
            images: string[];
            roomType: string;
            bedType: string;
        };
        bundle: {
            id: string;
            description: string;
            images: string[];
            title: string;
            destinations: string[];
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        hotelId: string | null;
        roomId: string | null;
        status: import(".prisma/client").$Enums.BookingStatus;
        bundleId: string | null;
        type: import(".prisma/client").$Enums.BookingType;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        userId: string;
        startDate: Date;
        endDate: Date | null;
        numGuests: number;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        commissionRate: import("@prisma/client/runtime/library").Decimal | null;
        commissionAmount: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    updateStatus(id: string, user: User, dto: UpdateBookingStatusDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        hotelId: string | null;
        roomId: string | null;
        status: import(".prisma/client").$Enums.BookingStatus;
        bundleId: string | null;
        type: import(".prisma/client").$Enums.BookingType;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
        userId: string;
        startDate: Date;
        endDate: Date | null;
        numGuests: number;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        commissionRate: import("@prisma/client/runtime/library").Decimal | null;
        commissionAmount: import("@prisma/client/runtime/library").Decimal | null;
    }>;
}
