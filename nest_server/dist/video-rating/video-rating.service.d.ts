import { CreateVideoRatingDto } from './dto/create-video-rating.dto';
import { UpdateVideoRatingDto } from './dto/update-video-rating.dto';
export declare class VideoRatingService {
    create(createVideoRatingDto: CreateVideoRatingDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateVideoRatingDto: UpdateVideoRatingDto): string;
    remove(id: number): string;
}
