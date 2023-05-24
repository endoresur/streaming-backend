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
exports.SubscriptionsListController = void 0;
const common_1 = require("@nestjs/common");
const subscriptions_list_service_1 = require("./subscriptions-list.service");
const create_subscriptions_list_dto_1 = require("./dto/create-subscriptions-list.dto");
const update_subscriptions_list_dto_1 = require("./dto/update-subscriptions-list.dto");
const swagger_1 = require("@nestjs/swagger");
let SubscriptionsListController = class SubscriptionsListController {
    constructor(subscriptionsListService) {
        this.subscriptionsListService = subscriptionsListService;
    }
    create(createSubscriptionsListDto) {
        return this.subscriptionsListService.create(createSubscriptionsListDto);
    }
    findAll() {
        return this.subscriptionsListService.findAll();
    }
    findOne(id) {
        return this.subscriptionsListService.findOne(+id);
    }
    update(id, updateSubscriptionsListDto) {
        return this.subscriptionsListService.update(+id, updateSubscriptionsListDto);
    }
    remove(id) {
        return this.subscriptionsListService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_subscriptions_list_dto_1.CreateSubscriptionsListDto]),
    __metadata("design:returntype", void 0)
], SubscriptionsListController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SubscriptionsListController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubscriptionsListController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_subscriptions_list_dto_1.UpdateSubscriptionsListDto]),
    __metadata("design:returntype", void 0)
], SubscriptionsListController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubscriptionsListController.prototype, "remove", null);
SubscriptionsListController = __decorate([
    (0, common_1.Controller)('subscriptions-list'),
    (0, swagger_1.ApiTags)('subscriptions-list'),
    __metadata("design:paramtypes", [subscriptions_list_service_1.SubscriptionsListService])
], SubscriptionsListController);
exports.SubscriptionsListController = SubscriptionsListController;
//# sourceMappingURL=subscriptions-list.controller.js.map