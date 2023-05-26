import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Get,
  UseGuards,
  Body,
} from '@nestjs/common';
import { VideosService } from './videos.service';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { videoStorage } from './storage';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateVideoDto } from './dto/create-video.dto';
import { UserId } from 'src/decorators/user-id.decorator';

@Controller('videos')
@ApiTags('videos')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Get()
  findAll() {
    return this.videosService.findAll();
  }

  @Post('/create-video')
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
  create(@UploadedFile() file: Express.Multer.File, @UserId() userId: number) {
    return this.videosService.create(file, userId);
  }

  @Post('/rename-video')
  @ApiBody({ type: CreateVideoDto })
  async nameVideo(@Body() data: CreateVideoDto, @UserId() userId: number) {
    const { title, description } = data;
    return this.videosService.renameLastByUserId(userId, title, description);
  }
}
