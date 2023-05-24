import { Injectable } from '@nestjs/common';
import { CreateLinkingVideoTagDto } from './dto/create-linking-video-tag.dto';
import { UpdateLinkingVideoTagDto } from './dto/update-linking-video-tag.dto';

@Injectable()
export class LinkingVideoTagsService {
  create(createLinkingVideoTagDto: CreateLinkingVideoTagDto) {
    return 'This action adds a new linkingVideoTag';
  }

  findAll() {
    return `This action returns all linkingVideoTags`;
  }

  findOne(id: number) {
    return `This action returns a #${id} linkingVideoTag`;
  }

  update(id: number, updateLinkingVideoTagDto: UpdateLinkingVideoTagDto) {
    return `This action updates a #${id} linkingVideoTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} linkingVideoTag`;
  }
}
