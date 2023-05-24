"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistService = void 0;
const common_1 = require("@nestjs/common");
let PlaylistService = class PlaylistService {
    create(createPlaylistDto) {
        return 'This action adds a new playlist';
    }
    findAll() {
        return `This action returns all playlist`;
    }
    findOne(id) {
        return `This action returns a #${id} playlist`;
    }
    update(id, updatePlaylistDto) {
        return `This action updates a #${id} playlist`;
    }
    remove(id) {
        return `This action removes a #${id} playlist`;
    }
};
PlaylistService = __decorate([
    (0, common_1.Injectable)()
], PlaylistService);
exports.PlaylistService = PlaylistService;
//# sourceMappingURL=playlist.service.js.map