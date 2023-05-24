import { SubscriptionsListService } from './subscriptions-list.service';
import { CreateSubscriptionsListDto } from './dto/create-subscriptions-list.dto';
import { UpdateSubscriptionsListDto } from './dto/update-subscriptions-list.dto';
export declare class SubscriptionsListController {
    private readonly subscriptionsListService;
    constructor(subscriptionsListService: SubscriptionsListService);
    create(createSubscriptionsListDto: CreateSubscriptionsListDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSubscriptionsListDto: UpdateSubscriptionsListDto): string;
    remove(id: string): string;
}
