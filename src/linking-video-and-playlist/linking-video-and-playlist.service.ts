import { Injectable } from '@nestjs/common';
import { CreateLinkingVideoAndPlaylistDto } from './dto/create-linking-video-and-playlist.dto';
import { UpdateLinkingVideoAndPlaylistDto } from './dto/update-linking-video-and-playlist.dto';

@Injectable()
export class LinkingVideoAndPlaylistService {
  create(createLinkingVideoAndPlaylistDto: CreateLinkingVideoAndPlaylistDto) {
    return 'This action adds a new linkingVideoAndPlaylist';
  }

  findAll() {
    return `This action returns all linkingVideoAndPlaylist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} linkingVideoAndPlaylist`;
  }

  update(id: number, updateLinkingVideoAndPlaylistDto: UpdateLinkingVideoAndPlaylistDto) {
    return `This action updates a #${id} linkingVideoAndPlaylist`;
  }

  remove(id: number) {
    return `This action removes a #${id} linkingVideoAndPlaylist`;
  }
}
