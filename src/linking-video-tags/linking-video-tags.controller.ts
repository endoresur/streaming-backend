import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LinkingVideoTagsService } from './linking-video-tags.service';
import { CreateLinkingVideoTagDto } from './dto/create-linking-video-tag.dto';
import { UpdateLinkingVideoTagDto } from './dto/update-linking-video-tag.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('linking-video-tags')
@ApiTags('linking-video-tags')
export class LinkingVideoTagsController {
  constructor(
    private readonly linkingVideoTagsService: LinkingVideoTagsService,
  ) {}

  @Post()
  create(@Body() createLinkingVideoTagDto: CreateLinkingVideoTagDto) {
    return this.linkingVideoTagsService.create(createLinkingVideoTagDto);
  }

  @Get()
  findAll() {
    return this.linkingVideoTagsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.linkingVideoTagsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLinkingVideoTagDto: UpdateLinkingVideoTagDto,
  ) {
    return this.linkingVideoTagsService.update(+id, updateLinkingVideoTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.linkingVideoTagsService.remove(+id);
  }
}
