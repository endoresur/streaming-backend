import { Module } from '@nestjs/common';
import { LinkingVideoTagsService } from './linking-video-tags.service';
import { LinkingVideoTagsController } from './linking-video-tags.controller';

@Module({
  controllers: [LinkingVideoTagsController],
  providers: [LinkingVideoTagsService]
})
export class LinkingVideoTagsModule {}
