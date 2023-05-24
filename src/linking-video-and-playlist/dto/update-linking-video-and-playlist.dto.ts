import { PartialType } from '@nestjs/swagger';
import { CreateLinkingVideoAndPlaylistDto } from './create-linking-video-and-playlist.dto';

export class UpdateLinkingVideoAndPlaylistDto extends PartialType(CreateLinkingVideoAndPlaylistDto) {}
