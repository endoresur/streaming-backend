import { PartialType } from '@nestjs/swagger';
import { CreateVideoRatingDto } from './create-video-rating.dto';

export class UpdateVideoRatingDto extends PartialType(CreateVideoRatingDto) {}
