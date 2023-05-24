import { Module } from '@nestjs/common';
import { VideoRatingService } from './video-rating.service';
import { VideoRatingController } from './video-rating.controller';

@Module({
  controllers: [VideoRatingController],
  providers: [VideoRatingService]
})
export class VideoRatingModule {}
