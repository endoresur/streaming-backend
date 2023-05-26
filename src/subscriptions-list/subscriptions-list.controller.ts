import { Controller } from '@nestjs/common';
import { SubscriptionsListService } from './subscriptions-list.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('subscriptions-list')
@ApiTags('subscriptions-list')
export class SubscriptionsListController {
  constructor(
    private readonly subscriptionsListService: SubscriptionsListService,
  ) {}
}
