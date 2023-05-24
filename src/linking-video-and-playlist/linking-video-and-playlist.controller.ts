import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LinkingVideoAndPlaylistService } from './linking-video-and-playlist.service';
import { CreateLinkingVideoAndPlaylistDto } from './dto/create-linking-video-and-playlist.dto';
import { UpdateLinkingVideoAndPlaylistDto } from './dto/update-linking-video-and-playlist.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('linking-video-and-playlist')
@ApiTags('linking-video-and-playlist')
export class LinkingVideoAndPlaylistController {
  constructor(
    private readonly linkingVideoAndPlaylistService: LinkingVideoAndPlaylistService,
  ) {}

  @Post()
  create(
    @Body() createLinkingVideoAndPlaylistDto: CreateLinkingVideoAndPlaylistDto,
  ) {
    return this.linkingVideoAndPlaylistService.create(
      createLinkingVideoAndPlaylistDto,
    );
  }

  @Get()
  findAll() {
    return this.linkingVideoAndPlaylistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.linkingVideoAndPlaylistService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLinkingVideoAndPlaylistDto: UpdateLinkingVideoAndPlaylistDto,
  ) {
    return this.linkingVideoAndPlaylistService.update(
      +id,
      updateLinkingVideoAndPlaylistDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.linkingVideoAndPlaylistService.remove(+id);
  }
}
