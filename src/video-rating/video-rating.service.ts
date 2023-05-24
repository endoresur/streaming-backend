import { Injectable } from '@nestjs/common';
import { CreateVideoRatingDto } from './dto/create-video-rating.dto';
import { UpdateVideoRatingDto } from './dto/update-video-rating.dto';

@Injectable()
export class VideoRatingService {
  create(createVideoRatingDto: CreateVideoRatingDto) {
    return 'This action adds a new videoRating';
  }

  findAll() {
    return `This action returns all videoRating`;
  }

  findOne(id: number) {
    return `This action returns a #${id} videoRating`;
  }

  update(id: number, updateVideoRatingDto: UpdateVideoRatingDto) {
    return `This action updates a #${id} videoRating`;
  }

  remove(id: number) {
    return `This action removes a #${id} videoRating`;
  }
}
