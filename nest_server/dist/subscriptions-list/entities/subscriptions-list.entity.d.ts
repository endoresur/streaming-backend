import { UserEntity } from 'src/users/entities/user.entity';
export declare class SubscriptionsListEntity {
    id: number;
    listOwner: UserEntity;
    subscriptions: UserEntity[];
}
