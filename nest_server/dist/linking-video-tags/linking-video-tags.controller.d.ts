import { LinkingVideoTagsService } from './linking-video-tags.service';
import { CreateLinkingVideoTagDto } from './dto/create-linking-video-tag.dto';
import { UpdateLinkingVideoTagDto } from './dto/update-linking-video-tag.dto';
export declare class LinkingVideoTagsController {
    private readonly linkingVideoTagsService;
    constructor(linkingVideoTagsService: LinkingVideoTagsService);
    create(createLinkingVideoTagDto: CreateLinkingVideoTagDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLinkingVideoTagDto: UpdateLinkingVideoTagDto): string;
    remove(id: string): string;
}
