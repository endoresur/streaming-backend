import { VideoRatingService } from './video-rating.service';
import { CreateVideoRatingDto } from './dto/create-video-rating.dto';
import { UpdateVideoRatingDto } from './dto/update-video-rating.dto';
export declare class VideoRatingController {
    private readonly videoRatingService;
    constructor(videoRatingService: VideoRatingService);
    create(createVideoRatingDto: CreateVideoRatingDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateVideoRatingDto: UpdateVideoRatingDto): string;
    remove(id: string): string;
}
