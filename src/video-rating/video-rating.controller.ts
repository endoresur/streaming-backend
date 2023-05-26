import { Controller } from '@nestjs/common';
import { VideoRatingService } from './video-rating.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('video-rating')
@ApiTags('video-rating')
export class VideoRatingController {
  constructor(private readonly videoRatingService: VideoRatingService) {}
}
