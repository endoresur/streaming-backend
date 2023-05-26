import { Controller } from '@nestjs/common';
import { LinkingVideoAndPlaylistService } from './linking-video-and-playlist.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('linking-video-and-playlist')
@ApiTags('linking-video-and-playlist')
export class LinkingVideoAndPlaylistController {
  constructor(
    private readonly linkingVideoAndPlaylistService: LinkingVideoAndPlaylistService,
  ) {}
}
