"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gr1Service = void 0;
const common_1 = require("@nestjs/common");
const qrcode = require("qrcode");
const xml2js = require("xml2js");
const axios_1 = require("axios");
let Gr1Service = class Gr1Service {
    getAboutus() {
        return {
            ten: 'Luan Quang Minh',
            mssv: '20225985',
        };
    }
    getToday() {
        const today = new Date();
        return {
            datetime: today.toISOString(),
        };
    }
    genEmail(mssv, ten) {
        const nameParts = ten.trim().split(' ');
        const firstName = nameParts[nameParts.length - 1].toLowerCase();
        const lastNameInitial = nameParts[0].charAt(0).toLowerCase();
        const middleNameInitial = nameParts.length > 2 ? nameParts[1].charAt(0).toLowerCase() : '';
        const formattedMssv = mssv.slice(-6);
        const email = `${firstName}.${lastNameInitial}${middleNameInitial}${formattedMssv}@sis.hust.edu.vn`;
        return { email };
    }
    async layTigia() {
        const response = await axios_1.default.get('https://portal.vietcombank.com.vn/Usercontrols/TVPortal.TyGia/pXML.aspx');
        const xmlData = response.data;
        const parser = new xml2js.Parser({ explicitArray: false });
        const result = await parser.parseStringPromise(xmlData);
        return result;
    }
    async genQR(text) {
        const qrCodeBuffer = await qrcode.toBuffer(text, { type: 'png' });
        return qrCodeBuffer;
    }
    async vietQR() {
        const qr_VietQRcode = await this.genQR('https://api.vietqr.io/v2/banks');
        return qr_VietQRcode;
    }
    async generateVietQR(accountNo, accountName, acqId, amount, addInfo, format, template) {
        try {
            const response = await axios_1.default.post('https://api.vietqr.io/v2/generate', {
                accountNo,
                accountName,
                acqId,
                amount,
                addInfo,
                format,
                template
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': '0d9923fd-3f54-4094-aaa9-d02b99570b49',
                    'x-client-id': 'fde3ba5e-f574-4460-af80-1cdf2d978fa5'
                }
            });
            const qrDataURL = response.data.data.qrDataURL;
            return qrDataURL;
        }
        catch (error) {
            throw new Error(`Failed to generate VietQR: ${error.response ? error.response.data : error.message}`);
        }
    }
};
exports.Gr1Service = Gr1Service;
exports.Gr1Service = Gr1Service = __decorate([
    (0, common_1.Injectable)()
], Gr1Service);
//# sourceMappingURL=gr1.service.js.map