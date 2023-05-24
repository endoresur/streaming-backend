import { CommentEntity } from 'src/comments/entities/comment.entity';
import { PlaylistEntity } from 'src/playlist/entities/playlist.entity';
import { SubscriptionsListEntity } from 'src/subscriptions-list/entities/subscriptions-list.entity';
import { VideoRatingEntity } from 'src/video-rating/entities/video-rating.entity';
import { VideoEntity } from 'src/videos/entities/video.entity';
export declare class UserEntity {
    id: number;
    userName: string;
    email: string;
    login: string;
    password: string;
    registrationDate: Date;
    subscribersCount: number;
    videos: VideoEntity[];
    comments: CommentEntity[];
    ratings: VideoRatingEntity;
    playlists: PlaylistEntity[];
    subscriptionsList: SubscriptionsListEntity;
    subscriptions: SubscriptionsListEntity;
}
