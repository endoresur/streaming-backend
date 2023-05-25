import { CommentEntity } from 'src/comments/entities/comment.entity';
import { ImageEntity } from 'src/images/entities/image.entity';
import { PlaylistEntity } from 'src/playlist/entities/playlist.entity';
import { SubscriptionsListEntity } from 'src/subscriptions-list/entities/subscriptions-list.entity';
import { VideoRatingEntity } from 'src/video-rating/entities/video-rating.entity';
import { VideoEntity } from 'src/videos/entities/video.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  email: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column({ default: 0 })
  subscribersCount: number;

  @OneToOne(() => ImageEntity, (image) => image.user)
  avatar: ImageEntity;

  @OneToOne(() => ImageEntity, (image) => image.channelBanner)
  banner: ImageEntity;

  @OneToMany(() => VideoEntity, (video) => video.user)
  videos: VideoEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.user)
  comments: CommentEntity[];

  @OneToMany(() => VideoRatingEntity, (rating) => rating.user)
  ratings: VideoRatingEntity;

  @OneToMany(() => PlaylistEntity, (playlist) => playlist.user)
  playlists: PlaylistEntity[];

  @OneToOne(
    () => SubscriptionsListEntity,
    (subscriptionsList) => subscriptionsList.listOwner,
  )
  subscriptionsList: SubscriptionsListEntity;

  @OneToMany(() => SubscriptionsListEntity, (list) => list.subscriptions)
  subscriptions: SubscriptionsListEntity;
}
