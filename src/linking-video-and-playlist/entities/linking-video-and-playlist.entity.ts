import { PlaylistEntity } from 'src/playlist/entities/playlist.entity';
import { VideoEntity } from 'src/videos/entities/video.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('linking-video-playlist')
export class LinkingVideoAndPlaylistEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PlaylistEntity, (playlist) => playlist.linkedVnP)
  playlist: PlaylistEntity;

  @ManyToOne(() => VideoEntity, (video) => video.linkedVnP)
  video: VideoEntity;
}
