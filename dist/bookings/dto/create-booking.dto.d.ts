export declare class CreateBookingDto {
    type: 'HotelRoom' | 'Bundle';
    hotelId?: string;
    roomId?: string;
    bundleId?: string;
    startDate: string;
    endDate?: string;
    numGuests?: number;
    totalAmount: number;
    metadata?: any;
}
