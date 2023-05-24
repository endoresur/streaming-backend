import { Module } from '@nestjs/common';
import { SubscriptionsListService } from './subscriptions-list.service';
import { SubscriptionsListController } from './subscriptions-list.controller';

@Module({
  controllers: [SubscriptionsListController],
  providers: [SubscriptionsListService]
})
export class SubscriptionsListModule {}
