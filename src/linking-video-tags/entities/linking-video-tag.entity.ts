import { TagEntity } from 'src/tag/entities/tag.entity';
import { VideoEntity } from 'src/videos/entities/video.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('linking-video-tag')
export class LinkingVideoTagEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => TagEntity, (tag) => tag.linkedVnT)
  tag: TagEntity;

  @ManyToOne(() => VideoEntity, (video) => video.linkedVnT)
  video: VideoEntity;
}
