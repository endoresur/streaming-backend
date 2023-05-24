import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VideoRatingService } from './video-rating.service';
import { CreateVideoRatingDto } from './dto/create-video-rating.dto';
import { UpdateVideoRatingDto } from './dto/update-video-rating.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('video-rating')
@ApiTags('video-rating')
export class VideoRatingController {
  constructor(private readonly videoRatingService: VideoRatingService) {}

  @Post()
  create(@Body() createVideoRatingDto: CreateVideoRatingDto) {
    return this.videoRatingService.create(createVideoRatingDto);
  }

  @Get()
  findAll() {
    return this.videoRatingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videoRatingService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVideoRatingDto: UpdateVideoRatingDto,
  ) {
    return this.videoRatingService.update(+id, updateVideoRatingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videoRatingService.remove(+id);
  }
}
