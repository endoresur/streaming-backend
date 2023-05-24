import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SubscriptionsListService } from './subscriptions-list.service';
import { CreateSubscriptionsListDto } from './dto/create-subscriptions-list.dto';
import { UpdateSubscriptionsListDto } from './dto/update-subscriptions-list.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('subscriptions-list')
@ApiTags('subscriptions-list')
export class SubscriptionsListController {
  constructor(
    private readonly subscriptionsListService: SubscriptionsListService,
  ) {}

  @Post()
  create(@Body() createSubscriptionsListDto: CreateSubscriptionsListDto) {
    return this.subscriptionsListService.create(createSubscriptionsListDto);
  }

  @Get()
  findAll() {
    return this.subscriptionsListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subscriptionsListService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubscriptionsListDto: UpdateSubscriptionsListDto,
  ) {
    return this.subscriptionsListService.update(
      +id,
      updateSubscriptionsListDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscriptionsListService.remove(+id);
  }
}
