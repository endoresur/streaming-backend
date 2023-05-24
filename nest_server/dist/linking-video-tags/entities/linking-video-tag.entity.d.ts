import { TagEntity } from 'src/tag/entities/tag.entity';
import { VideoEntity } from 'src/videos/entities/video.entity';
export declare class LinkingVideoTagEntity {
    id: number;
    tag: TagEntity;
    video: VideoEntity;
}
