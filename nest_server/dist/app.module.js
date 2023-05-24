"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const comments_module_1 = require("./comments/comments.module");
const video_rating_module_1 = require("./video-rating/video-rating.module");
const playlist_module_1 = require("./playlist/playlist.module");
const linking_video_and_playlist_module_1 = require("./linking-video-and-playlist/linking-video-and-playlist.module");
const subscriptions_list_module_1 = require("./subscriptions-list/subscriptions-list.module");
const tag_module_1 = require("./tag/tag.module");
const linking_video_tags_module_1 = require("./linking-video-tags/linking-video-tags.module");
const typeorm_1 = require("@nestjs/typeorm");
const video_entity_1 = require("./videos/entities/video.entity");
const video_rating_entity_1 = require("./video-rating/entities/video-rating.entity");
const user_entity_1 = require("./users/entities/user.entity");
const tag_entity_1 = require("./tag/entities/tag.entity");
const subscriptions_list_entity_1 = require("./subscriptions-list/entities/subscriptions-list.entity");
const playlist_entity_1 = require("./playlist/entities/playlist.entity");
const linking_video_and_playlist_entity_1 = require("./linking-video-and-playlist/entities/linking-video-and-playlist.entity");
const linking_video_tag_entity_1 = require("./linking-video-tags/entities/linking-video-tag.entity");
const comment_entity_1 = require("./comments/entities/comment.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'drona.db.elephantsql.com',
                port: 5432,
                username: 'shffvmzg',
                password: 'B8Y45DdZaPXT0kjR7nnCiTAa-xtH446i',
                database: 'shffvmzg',
                entities: [
                    video_entity_1.VideoEntity,
                    video_rating_entity_1.VideoRatingEntity,
                    user_entity_1.UserEntity,
                    tag_entity_1.TagEntity,
                    subscriptions_list_entity_1.SubscriptionsListEntity,
                    playlist_entity_1.PlaylistEntity,
                    linking_video_and_playlist_entity_1.LinkingVideoAndPlaylistEntity,
                    linking_video_tag_entity_1.LinkingVideoTagEntity,
                    comment_entity_1.CommentEntity,
                ],
                synchronize: true,
            }),
            users_module_1.UsersModule,
            comments_module_1.CommentsModule,
            video_rating_module_1.VideoRatingModule,
            playlist_module_1.PlaylistModule,
            linking_video_and_playlist_module_1.LinkingVideoAndPlaylistModule,
            subscriptions_list_module_1.SubscriptionsListModule,
            tag_module_1.TagModule,
            linking_video_tags_module_1.LinkingVideoTagsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map