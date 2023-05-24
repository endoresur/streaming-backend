import { CommentEntity } from 'src/comments/entities/comment.entity';
import { LinkingVideoAndPlaylistEntity } from 'src/linking-video-and-playlist/entities/linking-video-and-playlist.entity';
import { LinkingVideoTagEntity } from 'src/linking-video-tags/entities/linking-video-tag.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { VideoRatingEntity } from 'src/video-rating/entities/video-rating.entity';
export declare class VideoEntity {
    id: number;
    videoTitle: string;
    videoDescription: string;
    uploadDate: Date;
    videoLink: string;
    lickesCount: number;
    dislickesCount: number;
    user: UserEntity;
    comments: CommentEntity[];
    ratings: VideoRatingEntity[];
    linkedVnP: LinkingVideoAndPlaylistEntity[];
    linkedVnT: LinkingVideoTagEntity[];
}
