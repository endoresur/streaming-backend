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

@Module({
  imports: [
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
