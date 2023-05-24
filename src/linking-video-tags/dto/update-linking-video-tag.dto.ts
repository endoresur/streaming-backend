import { PartialType } from '@nestjs/swagger';
import { CreateLinkingVideoTagDto } from './create-linking-video-tag.dto';

export class UpdateLinkingVideoTagDto extends PartialType(CreateLinkingVideoTagDto) {}
