import { UserEntity } from 'src/users/entities/user.entity';
import { VideoEntity } from 'src/videos/entities/video.entity';
export declare class CommentEntity {
    id: number;
    video: VideoEntity;
    user: UserEntity;
    text: string;
    publicationDate: Date;
}
