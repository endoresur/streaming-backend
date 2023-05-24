import { UserEntity } from 'src/users/entities/user.entity';
import { VideoEntity } from 'src/videos/entities/video.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('comments')
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => VideoEntity, (video) => video.comments)
  video: VideoEntity;

  @ManyToOne(() => UserEntity, (user) => user.comments)
  user: UserEntity;

  @Column()
  text: string;

  @Column()
  publicationDate: Date;
}
