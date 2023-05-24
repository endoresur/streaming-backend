import { Injectable } from '@nestjs/common';
import { CreateSubscriptionsListDto } from './dto/create-subscriptions-list.dto';
import { UpdateSubscriptionsListDto } from './dto/update-subscriptions-list.dto';

@Injectable()
export class SubscriptionsListService {
  create(createSubscriptionsListDto: CreateSubscriptionsListDto) {
    return 'This action adds a new subscriptionsList';
  }

  findAll() {
    return `This action returns all subscriptionsList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subscriptionsList`;
  }

  update(id: number, updateSubscriptionsListDto: UpdateSubscriptionsListDto) {
    return `This action updates a #${id} subscriptionsList`;
  }

  remove(id: number) {
    return `This action removes a #${id} subscriptionsList`;
  }
}
