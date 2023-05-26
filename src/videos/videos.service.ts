import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { generateSlug } from 'src/utils/generate';
import { Repository } from 'typeorm';
import { VideoEntity } from './entities/video.entity';

@Injectable()
export class VideosService {
  constructor(
    @InjectRepository(VideoEntity)
    private repository: Repository<VideoEntity>,
  ) {}

  create(file: Express.Multer.File, userId: number) {
    return this.repository.save({
      user: { id: userId },
      comments: undefined,
      videoTitle: 'title',
      videoDescription: 'description',
      preview: undefined,
      videoLink: file.path,
      slug: generateSlug(10),
    });
  }

  findAll() {
    return this.repository.find();
  }

  async renameLastByUserId(userId: number, title: string, description: string) {
    const qb = this.repository.createQueryBuilder('video');
    qb.where('video.userId = :userId', { userId });

    const lastVideoId = (await qb.getMany()).at(-1).id;

    return this.repository.update(lastVideoId, {
      videoTitle: title,
      videoDescription: description,
    });
  }
}
