import { LinkingVideoTagEntity } from 'src/linking-video-tags/entities/linking-video-tag.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('tags')
export class TagEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tagName: string;

  @OneToMany(() => LinkingVideoTagEntity, (linkedVnT) => linkedVnT.tag)
  linkedVnT: LinkingVideoTagEntity[];
}
