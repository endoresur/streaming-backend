import { LinkingVideoAndPlaylistEntity } from 'src/linking-video-and-playlist/entities/linking-video-and-playlist.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('playlists')
export class PlaylistEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  playlistTitle: string;

  @Column({ default: 'slug' })
  slug: string;

  @ManyToOne(() => UserEntity, (user) => user.playlists)
  user: UserEntity;

  @OneToMany(
    () => LinkingVideoAndPlaylistEntity,
    (linkedVnP) => linkedVnP.playlist,
  )
  linkedVnP: LinkingVideoAndPlaylistEntity[];
}
