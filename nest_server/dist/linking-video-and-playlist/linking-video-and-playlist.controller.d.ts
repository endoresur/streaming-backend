import { LinkingVideoAndPlaylistService } from './linking-video-and-playlist.service';
import { CreateLinkingVideoAndPlaylistDto } from './dto/create-linking-video-and-playlist.dto';
import { UpdateLinkingVideoAndPlaylistDto } from './dto/update-linking-video-and-playlist.dto';
export declare class LinkingVideoAndPlaylistController {
    private readonly linkingVideoAndPlaylistService;
    constructor(linkingVideoAndPlaylistService: LinkingVideoAndPlaylistService);
    create(createLinkingVideoAndPlaylistDto: CreateLinkingVideoAndPlaylistDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLinkingVideoAndPlaylistDto: UpdateLinkingVideoAndPlaylistDto): string;
    remove(id: string): string;
}
