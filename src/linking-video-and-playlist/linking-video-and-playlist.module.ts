import { Module } from '@nestjs/common';
import { LinkingVideoAndPlaylistService } from './linking-video-and-playlist.service';
import { LinkingVideoAndPlaylistController } from './linking-video-and-playlist.controller';

@Module({
  controllers: [LinkingVideoAndPlaylistController],
  providers: [LinkingVideoAndPlaylistService]
})
export class LinkingVideoAndPlaylistModule {}
