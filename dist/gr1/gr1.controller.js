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
exports.Gr1Controller = void 0;
const common_1 = require("@nestjs/common");
const gr1_service_1 = require("./gr1.service");
let Gr1Controller = class Gr1Controller {
    constructor(gr1Service) {
        this.gr1Service = gr1Service;
    }
    getAboutus() {
        return this.gr1Service.getAboutus();
    }
    getTodayDateTime() {
        return this.gr1Service.getToday();
    }
    generateEmail(mssv, ten) {
        return this.gr1Service.genEmail(mssv, ten);
    }
    async layTigia() {
        return await this.gr1Service.layTigia();
    }
    async genQR(text, res) {
        const qrCode = await this.gr1Service.genQR(text);
        res.setHeader('Content-Type', 'image/png');
        return res.send(qrCode);
    }
};
exports.Gr1Controller = Gr1Controller;
__decorate([
    (0, common_1.Get)('aboutus'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Gr1Controller.prototype, "getAboutus", null);
__decorate([
    (0, common_1.Get)('today'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Gr1Controller.prototype, "getTodayDateTime", null);
__decorate([
    (0, common_1.Get)('gen-email'),
    __param(0, (0, common_1.Query)('mssv')),
    __param(1, (0, common_1.Query)('ten')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], Gr1Controller.prototype, "generateEmail", null);
__decorate([
    (0, common_1.Get)('tigia'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Gr1Controller.prototype, "layTigia", null);
__decorate([
    (0, common_1.Get)('qrcode'),
    __param(0, (0, common_1.Query)('text')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], Gr1Controller.prototype, "genQR", null);
exports.Gr1Controller = Gr1Controller = __decorate([
    (0, common_1.Controller)('gr1'),
    __metadata("design:paramtypes", [gr1_service_1.Gr1Service])
], Gr1Controller);
//# sourceMappingURL=gr1.controller.js.map