"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkingVideoTagsModule = void 0;
const common_1 = require("@nestjs/common");
const linking_video_tags_service_1 = require("./linking-video-tags.service");
const linking_video_tags_controller_1 = require("./linking-video-tags.controller");
let LinkingVideoTagsModule = class LinkingVideoTagsModule {
};
LinkingVideoTagsModule = __decorate([
    (0, common_1.Module)({
        controllers: [linking_video_tags_controller_1.LinkingVideoTagsController],
        providers: [linking_video_tags_service_1.LinkingVideoTagsService]
    })
], LinkingVideoTagsModule);
exports.LinkingVideoTagsModule = LinkingVideoTagsModule;
//# sourceMappingURL=linking-video-tags.module.js.map