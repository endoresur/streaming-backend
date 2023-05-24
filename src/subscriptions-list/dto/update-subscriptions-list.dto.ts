import { PartialType } from '@nestjs/swagger';
import { CreateSubscriptionsListDto } from './create-subscriptions-list.dto';

export class UpdateSubscriptionsListDto extends PartialType(CreateSubscriptionsListDto) {}
