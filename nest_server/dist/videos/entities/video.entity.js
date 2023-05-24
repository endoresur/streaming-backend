"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoEntity = void 0;
const comment_entity_1 = require("../../comments/entities/comment.entity");
const linking_video_and_playlist_entity_1 = require("../../linking-video-and-playlist/entities/linking-video-and-playlist.entity");
const linking_video_tag_entity_1 = require("../../linking-video-tags/entities/linking-video-tag.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const video_rating_entity_1 = require("../../video-rating/entities/video-rating.entity");
const typeorm_1 = require("typeorm");
let VideoEntity = class VideoEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], VideoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VideoEntity.prototype, "videoTitle", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VideoEntity.prototype, "videoDescription", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], VideoEntity.prototype, "uploadDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], VideoEntity.prototype, "videoLink", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], VideoEntity.prototype, "lickesCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], VideoEntity.prototype, "dislickesCount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.videos),
    __metadata("design:type", user_entity_1.UserEntity)
], VideoEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.CommentEntity, (comment) => comment.video),
    __metadata("design:type", Array)
], VideoEntity.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => video_rating_entity_1.VideoRatingEntity, (rating) => rating.video),
    __metadata("design:type", Array)
], VideoEntity.prototype, "ratings", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => linking_video_and_playlist_entity_1.LinkingVideoAndPlaylistEntity, (linkedVnP) => linkedVnP.video),
    __metadata("design:type", Array)
], VideoEntity.prototype, "linkedVnP", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => linking_video_tag_entity_1.LinkingVideoTagEntity, (linkedVnT) => linkedVnT.video),
    __metadata("design:type", Array)
], VideoEntity.prototype, "linkedVnT", void 0);
VideoEntity = __decorate([
    (0, typeorm_1.Entity)('videos')
], VideoEntity);
exports.VideoEntity = VideoEntity;
//# sourceMappingURL=video.entity.js.map