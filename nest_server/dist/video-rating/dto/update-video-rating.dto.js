"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVideoRatingDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_video_rating_dto_1 = require("./create-video-rating.dto");
class UpdateVideoRatingDto extends (0, swagger_1.PartialType)(create_video_rating_dto_1.CreateVideoRatingDto) {
}
exports.UpdateVideoRatingDto = UpdateVideoRatingDto;
//# sourceMappingURL=update-video-rating.dto.js.map