import { CreateLinkingVideoAndPlaylistDto } from './dto/create-linking-video-and-playlist.dto';
import { UpdateLinkingVideoAndPlaylistDto } from './dto/update-linking-video-and-playlist.dto';
export declare class LinkingVideoAndPlaylistService {
    create(createLinkingVideoAndPlaylistDto: CreateLinkingVideoAndPlaylistDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateLinkingVideoAndPlaylistDto: UpdateLinkingVideoAndPlaylistDto): string;
    remove(id: number): string;
}
