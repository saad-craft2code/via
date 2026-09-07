export declare class UpdateSubscriptionStatusDto {
    status: 'Pending' | 'Active' | 'Expired' | 'Cancelled' | 'Suspended';
    adminNotes?: string;
}
