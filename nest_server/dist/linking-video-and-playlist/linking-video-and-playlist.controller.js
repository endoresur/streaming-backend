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
exports.LinkingVideoAndPlaylistController = void 0;
const common_1 = require("@nestjs/common");
const linking_video_and_playlist_service_1 = require("./linking-video-and-playlist.service");
const create_linking_video_and_playlist_dto_1 = require("./dto/create-linking-video-and-playlist.dto");
const update_linking_video_and_playlist_dto_1 = require("./dto/update-linking-video-and-playlist.dto");
const swagger_1 = require("@nestjs/swagger");
let LinkingVideoAndPlaylistController = class LinkingVideoAndPlaylistController {
    constructor(linkingVideoAndPlaylistService) {
        this.linkingVideoAndPlaylistService = linkingVideoAndPlaylistService;
    }
    create(createLinkingVideoAndPlaylistDto) {
        return this.linkingVideoAndPlaylistService.create(createLinkingVideoAndPlaylistDto);
    }
    findAll() {
        return this.linkingVideoAndPlaylistService.findAll();
    }
    findOne(id) {
        return this.linkingVideoAndPlaylistService.findOne(+id);
    }
    update(id, updateLinkingVideoAndPlaylistDto) {
        return this.linkingVideoAndPlaylistService.update(+id, updateLinkingVideoAndPlaylistDto);
    }
    remove(id) {
        return this.linkingVideoAndPlaylistService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_linking_video_and_playlist_dto_1.CreateLinkingVideoAndPlaylistDto]),
    __metadata("design:returntype", void 0)
], LinkingVideoAndPlaylistController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LinkingVideoAndPlaylistController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LinkingVideoAndPlaylistController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_linking_video_and_playlist_dto_1.UpdateLinkingVideoAndPlaylistDto]),
    __metadata("design:returntype", void 0)
], LinkingVideoAndPlaylistController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LinkingVideoAndPlaylistController.prototype, "remove", null);
LinkingVideoAndPlaylistController = __decorate([
    (0, common_1.Controller)('linking-video-and-playlist'),
    (0, swagger_1.ApiTags)('linking-video-and-playlist'),
    __metadata("design:paramtypes", [linking_video_and_playlist_service_1.LinkingVideoAndPlaylistService])
], LinkingVideoAndPlaylistController);
exports.LinkingVideoAndPlaylistController = LinkingVideoAndPlaylistController;
//# sourceMappingURL=linking-video-and-playlist.controller.js.map