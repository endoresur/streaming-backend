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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoRatingController = void 0;
const common_1 = require("@nestjs/common");
const video_rating_service_1 = require("./video-rating.service");
const create_video_rating_dto_1 = require("./dto/create-video-rating.dto");
const update_video_rating_dto_1 = require("./dto/update-video-rating.dto");
const swagger_1 = require("@nestjs/swagger");
let VideoRatingController = class VideoRatingController {
    constructor(videoRatingService) {
        this.videoRatingService = videoRatingService;
    }
    create(createVideoRatingDto) {
        return this.videoRatingService.create(createVideoRatingDto);
    }
    findAll() {
        return this.videoRatingService.findAll();
    }
    findOne(id) {
        return this.videoRatingService.findOne(+id);
    }
    update(id, updateVideoRatingDto) {
        return this.videoRatingService.update(+id, updateVideoRatingDto);
    }
    remove(id) {
        return this.videoRatingService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_video_rating_dto_1.CreateVideoRatingDto]),
    __metadata("design:returntype", void 0)
], VideoRatingController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VideoRatingController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VideoRatingController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_video_rating_dto_1.UpdateVideoRatingDto]),
    __metadata("design:returntype", void 0)
], VideoRatingController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VideoRatingController.prototype, "remove", null);
VideoRatingController = __decorate([
    (0, common_1.Controller)('video-rating'),
    (0, swagger_1.ApiTags)('video-rating'),
    __metadata("design:paramtypes", [video_rating_service_1.VideoRatingService])
], VideoRatingController);
exports.VideoRatingController = VideoRatingController;
//# sourceMappingURL=video-rating.controller.js.map