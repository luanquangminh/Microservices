import { Injectable } from '@nestjs/common';
import * as qrcode from 'qrcode';
import * as xml2js from 'xml2js';
import axios from 'axios';

@Injectable()
export class Gr1Service {
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

  genEmail(mssv: string, ten: string) {
    //parse name
    const nameParts = ten.trim().split(' ');
    const firstName = nameParts[nameParts.length - 1].toLowerCase();
    const lastNameInitial = nameParts[0].charAt(0).toLowerCase();
    const middleNameInitial =
      nameParts.length > 2 ? nameParts[1].charAt(0).toLowerCase() : '';
    const formattedMssv = mssv.slice(-6);
    // gen email
    const email = `${firstName}.${lastNameInitial}${middleNameInitial}${formattedMssv}@sis.hust.edu.vn`;

    return { email };
  }

  async layTigia() {
    const response = await axios.get(
      'https://portal.vietcombank.com.vn/Usercontrols/TVPortal.TyGia/pXML.aspx',
    );
    const xmlData = response.data;
    const parser = new xml2js.Parser({ explicitArray: false });
    const result = await parser.parseStringPromise(xmlData);
    // return result;

    // return response.data;
    return result;
  }

  async genQR(text: string): Promise<Buffer> {
    const qrCodeBuffer = await qrcode.toBuffer(text, { type: 'png' });
    return qrCodeBuffer;

    //   throw new Error('404');
  }
  // async vietQR() {
  //   const qr_VietQRcode = await this.genQR('https://api.vietqr.io/v2/banks');
  //   return qr_VietQRcode;
  // }
}
