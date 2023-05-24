import { UserEntity } from 'src/users/entities/user.entity';
import { VideoEntity } from 'src/videos/entities/video.entity';
export declare class VideoRatingEntity {
    id: number;
    isRated: boolean;
    isLicked?: boolean;
    user: UserEntity;
    video: VideoEntity;
}
