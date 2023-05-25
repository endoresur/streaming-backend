import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { VideosService } from './videos.service';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { videoStorage } from './storage';

@Controller('videos')
@ApiTags('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: videoStorage,
    }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  create(@UploadedFile() file: Express.Multer.File) {
    return file;
  }
}
