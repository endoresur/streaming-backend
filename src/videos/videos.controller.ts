import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Get,
  UseGuards,
} from '@nestjs/common';
import { VideosService } from './videos.service';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { videoStorage } from './storage';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('videos')
@ApiTags('videos')
@UseGuards(JwtAuthGuard)
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Get()
  findAll() {
    return this.videosService.findAll();
  }

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
