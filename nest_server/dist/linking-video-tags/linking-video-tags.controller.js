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
exports.LinkingVideoTagsController = void 0;
const common_1 = require("@nestjs/common");
const linking_video_tags_service_1 = require("./linking-video-tags.service");
const create_linking_video_tag_dto_1 = require("./dto/create-linking-video-tag.dto");
const update_linking_video_tag_dto_1 = require("./dto/update-linking-video-tag.dto");
const swagger_1 = require("@nestjs/swagger");
let LinkingVideoTagsController = class LinkingVideoTagsController {
    constructor(linkingVideoTagsService) {
        this.linkingVideoTagsService = linkingVideoTagsService;
    }
    create(createLinkingVideoTagDto) {
        return this.linkingVideoTagsService.create(createLinkingVideoTagDto);
    }
    findAll() {
        return this.linkingVideoTagsService.findAll();
    }
    findOne(id) {
        return this.linkingVideoTagsService.findOne(+id);
    }
    update(id, updateLinkingVideoTagDto) {
        return this.linkingVideoTagsService.update(+id, updateLinkingVideoTagDto);
    }
    remove(id) {
        return this.linkingVideoTagsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_linking_video_tag_dto_1.CreateLinkingVideoTagDto]),
    __metadata("design:returntype", void 0)
], LinkingVideoTagsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LinkingVideoTagsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LinkingVideoTagsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_linking_video_tag_dto_1.UpdateLinkingVideoTagDto]),
    __metadata("design:returntype", void 0)
], LinkingVideoTagsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LinkingVideoTagsController.prototype, "remove", null);
LinkingVideoTagsController = __decorate([
    (0, common_1.Controller)('linking-video-tags'),
    (0, swagger_1.ApiTags)('linking-video-tags'),
    __metadata("design:paramtypes", [linking_video_tags_service_1.LinkingVideoTagsService])
], LinkingVideoTagsController);
exports.LinkingVideoTagsController = LinkingVideoTagsController;
//# sourceMappingURL=linking-video-tags.controller.js.map