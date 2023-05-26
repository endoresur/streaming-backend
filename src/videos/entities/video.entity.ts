import { CommentEntity } from 'src/comments/entities/comment.entity';
import { ImageEntity } from 'src/images/entities/image.entity';
import { LinkingVideoAndPlaylistEntity } from 'src/linking-video-and-playlist/entities/linking-video-and-playlist.entity';
import { LinkingVideoTagEntity } from 'src/linking-video-tags/entities/linking-video-tag.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { VideoRatingEntity } from 'src/video-rating/entities/video-rating.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity('videos')
export class VideoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  videoTitle: string;

  @Column()
  videoDescription: string;

  @Column({ default: 'slug' })
  slug: string;

  @Column()
  videoLink: string;

  @Column({ default: 0 })
  lickesCount: number;

  @Column({ default: 0 })
  dislickesCount: number;

  @ManyToOne(() => UserEntity, (user) => user.videos)
  user: UserEntity;

  @OneToOne(() => ImageEntity, (image) => image.videoPreview)
  preview?: ImageEntity;

  @OneToMany(() => CommentEntity, (comment) => comment.video)
  comments?: CommentEntity[];

  @OneToMany(() => VideoRatingEntity, (rating) => rating.video)
  ratings?: VideoRatingEntity[];

  @OneToMany(
    () => LinkingVideoAndPlaylistEntity,
    (linkedVnP) => linkedVnP.video,
  )
  linkedVnP?: LinkingVideoAndPlaylistEntity[];

  @OneToMany(() => LinkingVideoTagEntity, (linkedVnT) => linkedVnT.video)
  linkedVnT?: LinkingVideoTagEntity[];
}
