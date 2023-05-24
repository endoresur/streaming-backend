import { PlaylistEntity } from 'src/playlist/entities/playlist.entity';
import { VideoEntity } from 'src/videos/entities/video.entity';
export declare class LinkingVideoAndPlaylistEntity {
    id: number;
    playlist: PlaylistEntity;
    video: VideoEntity;
}
