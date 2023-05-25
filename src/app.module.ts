import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { VideoRatingModule } from './video-rating/video-rating.module';
import { PlaylistModule } from './playlist/playlist.module';
import { LinkingVideoAndPlaylistModule } from './linking-video-and-playlist/linking-video-and-playlist.module';
import { SubscriptionsListModule } from './subscriptions-list/subscriptions-list.module';
import { TagModule } from './tag/tag.module';
import { LinkingVideoTagsModule } from './linking-video-tags/linking-video-tags.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoEntity } from './videos/entities/video.entity';
import { VideoRatingEntity } from './video-rating/entities/video-rating.entity';
import { UserEntity } from './users/entities/user.entity';
import { TagEntity } from './tag/entities/tag.entity';
import { SubscriptionsListEntity } from './subscriptions-list/entities/subscriptions-list.entity';
import { PlaylistEntity } from './playlist/entities/playlist.entity';
import { LinkingVideoAndPlaylistEntity } from './linking-video-and-playlist/entities/linking-video-and-playlist.entity';
import { LinkingVideoTagEntity } from './linking-video-tags/entities/linking-video-tag.entity';
import { CommentEntity } from './comments/entities/comment.entity';
import { ConfigModule } from '@nestjs/config';
import { ImagesModule } from './images/images.module';
import { ImageEntity } from './images/entities/image.entity';
import { VideosModule } from './videos/videos.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        VideoEntity,
        VideoRatingEntity,
        UserEntity,
        TagEntity,
        SubscriptionsListEntity,
        PlaylistEntity,
        LinkingVideoAndPlaylistEntity,
        LinkingVideoTagEntity,
        CommentEntity,
        ImageEntity,
      ],
      synchronize: true,
    }),
    UsersModule,
    CommentsModule,
    VideoRatingModule,
    PlaylistModule,
    LinkingVideoAndPlaylistModule,
    SubscriptionsListModule,
    TagModule,
    LinkingVideoTagsModule,
    ImagesModule,
    VideosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
