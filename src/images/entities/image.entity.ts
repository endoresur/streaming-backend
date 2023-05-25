import { UserEntity } from 'src/users/entities/user.entity';
import { VideoEntity } from 'src/videos/entities/video.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity('image')
export class ImageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  alt: string;

  @Column()
  link: string;

  @OneToOne(() => UserEntity, (user) => user.avatar)
  user: UserEntity;

  @OneToOne(() => UserEntity, (user) => user.banner)
  channelBanner: UserEntity;

  @OneToOne(() => VideoEntity, (video) => video.preview)
  videoPreview: VideoEntity;
}
