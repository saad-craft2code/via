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
exports.PublicController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const response_util_1 = require("../common/response.util");
let PublicController = class PublicController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async listHotels() {
        const data = await this.prisma.hotel.findMany({
            include: { rooms: true },
            orderBy: { createdAt: 'desc' },
        });
        return (0, response_util_1.ok)(data);
    }
    async getHotel(id) {
        const data = await this.prisma.hotel.findUnique({ where: { id }, include: { rooms: true } });
        return (0, response_util_1.ok)(data);
    }
    async listBundles() {
        const data = await this.prisma.bundle.findMany({
            where: { status: 'Published' },
            include: { days: { include: { items: true }, orderBy: { dayNumber: 'asc' } } },
            orderBy: { createdAt: 'desc' },
        });
        return (0, response_util_1.ok)(data);
    }
    async getBundle(id) {
        const data = await this.prisma.bundle.findUnique({
            where: { id, },
            include: { days: { include: { items: true }, orderBy: { dayNumber: 'asc' } } },
        });
        if (!data || data.status !== 'Published')
            return (0, response_util_1.ok)(null);
        return (0, response_util_1.ok)(data);
    }
};
exports.PublicController = PublicController;
__decorate([
    (0, common_1.Get)('hotels'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PublicController.prototype, "listHotels", null);
__decorate([
    (0, common_1.Get)('hotels/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PublicController.prototype, "getHotel", null);
__decorate([
    (0, common_1.Get)('bundles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PublicController.prototype, "listBundles", null);
__decorate([
    (0, common_1.Get)('bundles/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PublicController.prototype, "getBundle", null);
exports.PublicController = PublicController = __decorate([
    (0, common_1.Controller)('public'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PublicController);
//# sourceMappingURL=public.controller.js.map