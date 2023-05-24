import { CreateSubscriptionsListDto } from './dto/create-subscriptions-list.dto';
import { UpdateSubscriptionsListDto } from './dto/update-subscriptions-list.dto';
export declare class SubscriptionsListService {
    create(createSubscriptionsListDto: CreateSubscriptionsListDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSubscriptionsListDto: UpdateSubscriptionsListDto): string;
    remove(id: number): string;
}
