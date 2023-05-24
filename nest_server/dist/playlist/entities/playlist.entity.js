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
exports.PlaylistEntity = void 0;
const linking_video_and_playlist_entity_1 = require("../../linking-video-and-playlist/entities/linking-video-and-playlist.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let PlaylistEntity = class PlaylistEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PlaylistEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PlaylistEntity.prototype, "playlistTitle", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.playlists),
    __metadata("design:type", user_entity_1.UserEntity)
], PlaylistEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => linking_video_and_playlist_entity_1.LinkingVideoAndPlaylistEntity, (linkedVnP) => linkedVnP.playlist),
    __metadata("design:type", Array)
], PlaylistEntity.prototype, "linkedVnP", void 0);
PlaylistEntity = __decorate([
    (0, typeorm_1.Entity)('playlists')
], PlaylistEntity);
exports.PlaylistEntity = PlaylistEntity;
//# sourceMappingURL=playlist.entity.js.map