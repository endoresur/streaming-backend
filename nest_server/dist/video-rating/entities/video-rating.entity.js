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
exports.VideoRatingEntity = void 0;
const user_entity_1 = require("../../users/entities/user.entity");
const video_entity_1 = require("../../videos/entities/video.entity");
const typeorm_1 = require("typeorm");
let VideoRatingEntity = class VideoRatingEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], VideoRatingEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], VideoRatingEntity.prototype, "isRated", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: undefined }),
    __metadata("design:type", Boolean)
], VideoRatingEntity.prototype, "isLicked", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.ratings),
    __metadata("design:type", user_entity_1.UserEntity)
], VideoRatingEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => video_entity_1.VideoEntity, (video) => video.ratings),
    __metadata("design:type", video_entity_1.VideoEntity)
], VideoRatingEntity.prototype, "video", void 0);
VideoRatingEntity = __decorate([
    (0, typeorm_1.Entity)('video-ratings')
], VideoRatingEntity);
exports.VideoRatingEntity = VideoRatingEntity;
//# sourceMappingURL=video-rating.entity.js.map