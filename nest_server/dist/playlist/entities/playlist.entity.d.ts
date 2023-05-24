import { LinkingVideoAndPlaylistEntity } from 'src/linking-video-and-playlist/entities/linking-video-and-playlist.entity';
import { UserEntity } from 'src/users/entities/user.entity';
export declare class PlaylistEntity {
    id: number;
    playlistTitle: string;
    user: UserEntity;
    linkedVnP: LinkingVideoAndPlaylistEntity[];
}
