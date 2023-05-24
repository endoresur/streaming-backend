import { CreateLinkingVideoTagDto } from './dto/create-linking-video-tag.dto';
import { UpdateLinkingVideoTagDto } from './dto/update-linking-video-tag.dto';
export declare class LinkingVideoTagsService {
    create(createLinkingVideoTagDto: CreateLinkingVideoTagDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLinkingVideoTagDto: UpdateLinkingVideoTagDto): string;
    remove(id: number): string;
}
