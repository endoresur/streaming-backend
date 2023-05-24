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
exports.LinkingVideoAndPlaylistEntity = void 0;
const playlist_entity_1 = require("../../playlist/entities/playlist.entity");
const video_entity_1 = require("../../videos/entities/video.entity");
const typeorm_1 = require("typeorm");
let LinkingVideoAndPlaylistEntity = class LinkingVideoAndPlaylistEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], LinkingVideoAndPlaylistEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => playlist_entity_1.PlaylistEntity, (playlist) => playlist.linkedVnP),
    __metadata("design:type", playlist_entity_1.PlaylistEntity)
], LinkingVideoAndPlaylistEntity.prototype, "playlist", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => video_entity_1.VideoEntity, (video) => video.linkedVnP),
    __metadata("design:type", video_entity_1.VideoEntity)
], LinkingVideoAndPlaylistEntity.prototype, "video", void 0);
LinkingVideoAndPlaylistEntity = __decorate([
    (0, typeorm_1.Entity)('linking-video-playlist')
], LinkingVideoAndPlaylistEntity);
exports.LinkingVideoAndPlaylistEntity = LinkingVideoAndPlaylistEntity;
//# sourceMappingURL=linking-video-and-playlist.entity.js.map