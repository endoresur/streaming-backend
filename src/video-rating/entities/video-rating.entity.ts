import { UserEntity } from 'src/users/entities/user.entity';
import { VideoEntity } from 'src/videos/entities/video.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('video-ratings')
export class VideoRatingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  isRated: boolean;

  @Column({ default: undefined })
  isLicked?: boolean;

  @ManyToOne(() => UserEntity, (user) => user.ratings)
  user: UserEntity;

  @ManyToOne(() => VideoEntity, (video) => video.ratings)
  video: VideoEntity;
}
