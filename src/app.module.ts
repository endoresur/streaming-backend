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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'drona.db.elephantsql.com',
      port: 5432,
      username: 'shffvmzg',
      password: 'B8Y45DdZaPXT0kjR7nnCiTAa-xtH446i',
      database: 'shffvmzg',
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
