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
exports.UserEntity = void 0;
const comment_entity_1 = require("../../comments/entities/comment.entity");
const playlist_entity_1 = require("../../playlist/entities/playlist.entity");
const subscriptions_list_entity_1 = require("../../subscriptions-list/entities/subscriptions-list.entity");
const video_rating_entity_1 = require("../../video-rating/entities/video-rating.entity");
const video_entity_1 = require("../../videos/entities/video.entity");
const typeorm_1 = require("typeorm");
let UserEntity = class UserEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "login", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], UserEntity.prototype, "registrationDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserEntity.prototype, "subscribersCount", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => video_entity_1.VideoEntity, (video) => video.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "videos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.CommentEntity, (comment) => comment.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => video_rating_entity_1.VideoRatingEntity, (rating) => rating.user),
    __metadata("design:type", video_rating_entity_1.VideoRatingEntity)
], UserEntity.prototype, "ratings", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => playlist_entity_1.PlaylistEntity, (playlist) => playlist.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "playlists", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => subscriptions_list_entity_1.SubscriptionsListEntity, (subscriptionsList) => subscriptionsList.listOwner),
    __metadata("design:type", subscriptions_list_entity_1.SubscriptionsListEntity)
], UserEntity.prototype, "subscriptionsList", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => subscriptions_list_entity_1.SubscriptionsListEntity, (list) => list.subscriptions),
    __metadata("design:type", subscriptions_list_entity_1.SubscriptionsListEntity)
], UserEntity.prototype, "subscriptions", void 0);
UserEntity = __decorate([
    (0, typeorm_1.Entity)('users')
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map