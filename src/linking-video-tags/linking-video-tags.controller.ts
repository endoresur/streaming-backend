import { Controller } from '@nestjs/common';
import { LinkingVideoTagsService } from './linking-video-tags.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('linking-video-tags')
@ApiTags('linking-video-tags')
export class LinkingVideoTagsController {
  constructor(
    private readonly linkingVideoTagsService: LinkingVideoTagsService,
  ) {}
}
