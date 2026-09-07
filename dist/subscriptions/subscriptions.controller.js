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
exports.AdminSubscriptionsController = exports.SubscriptionsController = void 0;
const common_1 = require("@nestjs/common");
const firebase_auth_guard_1 = require("../auth/firebase-auth.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const roles_guard_1 = require("../common/roles.guard");
const response_util_1 = require("../common/response.util");
const subscriptions_service_1 = require("./subscriptions.service");
const create_plan_dto_1 = require("./dto/create-plan.dto");
const subscribe_dto_1 = require("./dto/subscribe.dto");
const update_subscription_status_dto_1 = require("./dto/update-subscription-status.dto");
let SubscriptionsController = class SubscriptionsController {
    subscriptions;
    constructor(subscriptions) {
        this.subscriptions = subscriptions;
    }
    async listPlans() {
        const data = await this.subscriptions.listPlans();
        return (0, response_util_1.ok)(data);
    }
    async mySubscription(user) {
        const data = await this.subscriptions.getUserSubscription(user.id);
        return (0, response_util_1.ok)(data);
    }
    async subscribe(user, dto) {
        const data = await this.subscriptions.subscribe(user.id, dto);
        return (0, response_util_1.ok)(data, 'Subscription saved');
    }
};
exports.SubscriptionsController = SubscriptionsController;
__decorate([
    (0, common_1.Get)('plans'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SubscriptionsController.prototype, "listPlans", null);
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SubscriptionsController.prototype, "mySubscription", null);
__decorate([
    (0, common_1.Post)('subscribe'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, subscribe_dto_1.SubscribeDto]),
    __metadata("design:returntype", Promise)
], SubscriptionsController.prototype, "subscribe", null);
exports.SubscriptionsController = SubscriptionsController = __decorate([
    (0, common_1.Controller)('subscriptions'),
    (0, common_1.UseGuards)(firebase_auth_guard_1.FirebaseAuthGuard),
    __metadata("design:paramtypes", [subscriptions_service_1.SubscriptionsService])
], SubscriptionsController);
let AdminSubscriptionsController = class AdminSubscriptionsController {
    subscriptions;
    constructor(subscriptions) {
        this.subscriptions = subscriptions;
    }
    async list() {
        const data = await this.subscriptions.listAdminSubscriptions();
        return (0, response_util_1.ok)(data);
    }
    async createPlan(dto) {
        const data = await this.subscriptions.createPlan(dto);
        return (0, response_util_1.ok)(data, 'Subscription plan created');
    }
    async updatePlan(id, dto) {
        const data = await this.subscriptions.updatePlan(id, dto);
        return (0, response_util_1.ok)(data, 'Subscription plan updated');
    }
    async updateStatus(id, dto) {
        const data = await this.subscriptions.updateAdminSubscriptionStatus(id, dto);
        return (0, response_util_1.ok)(data, 'Subscription status updated');
    }
};
exports.AdminSubscriptionsController = AdminSubscriptionsController;
__decorate([
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminSubscriptionsController.prototype, "list", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Post)('plans'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_plan_dto_1.CreatePlanDto]),
    __metadata("design:returntype", Promise)
], AdminSubscriptionsController.prototype, "createPlan", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Patch)('plans/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AdminSubscriptionsController.prototype, "updatePlan", null);
__decorate([
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.Patch)(':id/status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_subscription_status_dto_1.UpdateSubscriptionStatusDto]),
    __metadata("design:returntype", Promise)
], AdminSubscriptionsController.prototype, "updateStatus", null);
exports.AdminSubscriptionsController = AdminSubscriptionsController = __decorate([
    (0, common_1.Controller)('admin/subscriptions'),
    (0, common_1.UseGuards)(firebase_auth_guard_1.FirebaseAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [subscriptions_service_1.SubscriptionsService])
], AdminSubscriptionsController);
//# sourceMappingURL=subscriptions.controller.js.map