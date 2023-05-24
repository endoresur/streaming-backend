import { LinkingVideoTagEntity } from 'src/linking-video-tags/entities/linking-video-tag.entity';
export declare class TagEntity {
    id: number;
    tagName: string;
    linkedVnT: LinkingVideoTagEntity[];
}
