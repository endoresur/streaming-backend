import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { VideoEntity } from './entities/video.entity';

@Injectable()
export class VideosService {
  constructor(
    @InjectRepository(VideoEntity)
    private repository: Repository<VideoEntity>,
  ) {}

  create(createVideoDto: CreateVideoDto) {
    return 'This action adds a new video';
  }

  findAll() {
    return this.repository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} video`;
  // }

  // update(id: number, updateVideoDto: UpdateVideoDto) {
  //   return `This action updates a #${id} video`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} video`;
  // }
}
