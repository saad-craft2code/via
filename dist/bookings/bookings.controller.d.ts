import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingStatusDto } from './dto/update-booking-status.dto';
import type { User } from '@prisma/client';
export declare class BookingsController {
    private readonly bookings;
    constructor(bookings: BookingsService);
    list(user: User): Promise<import("@via/shared-types").ApiResponse<({
        user: {
            name: string;
            id: string;
            email: string;
            phone: string;
            avatarUrl: string;
        };
        bundle: {
            id: string;
            description: string;
            images: string[];
            title: string;
            destinations: string[];
        };
        hotel: {
            name: string;
            id: string;
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
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        type: import(".prisma/client").$Enums.BookingType;
        hotelId: string | null;
        roomId: string | null;
        bundleId: string | null;
        startDate: Date;
        endDate: Date | null;
        numGuests: number;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        commissionRate: import("@prisma/client/runtime/library").Decimal | null;
        commissionAmount: import("@prisma/client/runtime/library").Decimal | null;
        status: import(".prisma/client").$Enums.BookingStatus;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
    })[]>>;
    get(id: string, user: User): Promise<import("@via/shared-types").ApiResponse<{
        user: {
            name: string;
            id: string;
            email: string;
            phone: string;
            avatarUrl: string;
        };
        bundle: {
            id: string;
            description: string;
            images: string[];
            title: string;
            destinations: string[];
        };
        hotel: {
            name: string;
            id: string;
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
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        type: import(".prisma/client").$Enums.BookingType;
        hotelId: string | null;
        roomId: string | null;
        bundleId: string | null;
        startDate: Date;
        endDate: Date | null;
        numGuests: number;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        commissionRate: import("@prisma/client/runtime/library").Decimal | null;
        commissionAmount: import("@prisma/client/runtime/library").Decimal | null;
        status: import(".prisma/client").$Enums.BookingStatus;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
    }>>;
    create(user: User, dto: CreateBookingDto): Promise<import("@via/shared-types").ApiResponse<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        type: import(".prisma/client").$Enums.BookingType;
        hotelId: string | null;
        roomId: string | null;
        bundleId: string | null;
        startDate: Date;
        endDate: Date | null;
        numGuests: number;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        commissionRate: import("@prisma/client/runtime/library").Decimal | null;
        commissionAmount: import("@prisma/client/runtime/library").Decimal | null;
        status: import(".prisma/client").$Enums.BookingStatus;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
    }>>;
    updateStatus(id: string, user: User, dto: UpdateBookingStatusDto): Promise<import("@via/shared-types").ApiResponse<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        type: import(".prisma/client").$Enums.BookingType;
        hotelId: string | null;
        roomId: string | null;
        bundleId: string | null;
        startDate: Date;
        endDate: Date | null;
        numGuests: number;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        commissionRate: import("@prisma/client/runtime/library").Decimal | null;
        commissionAmount: import("@prisma/client/runtime/library").Decimal | null;
        status: import(".prisma/client").$Enums.BookingStatus;
        metadata: import("@prisma/client/runtime/library").JsonValue | null;
    }>>;
}
