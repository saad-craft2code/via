export declare class CreatePlanDto {
    name: string;
    slug: string;
    type: 'Monthly' | 'Commission';
    description?: string;
    priceMonthly?: number;
    commissionRate?: number;
    isActive?: boolean;
}
