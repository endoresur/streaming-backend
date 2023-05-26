import { Controller } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('playlist')
@ApiTags('playlist')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}
}
