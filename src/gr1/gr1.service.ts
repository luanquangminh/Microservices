/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as qrcode from 'qrcode';
import * as xml2js from 'xml2js';
import axios from 'axios';
// import { VietQR } from 'vietqr';

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
  async vietQR() {
    const qr_VietQRcode = await this.genQR('https://api.vietqr.io/v2/banks');
    return qr_VietQRcode;
  }

async generateVietQR(
  accountNo: string,
  accountName: string,
  acqId: string,
  amount: number,
  addInfo: string,
  format: string,
  template: string
): Promise<string> {
  try {
    const response = await axios.post(
      'https://api.vietqr.io/v2/generate',
      {
        accountNo,
        accountName,
        acqId,
        amount,
        addInfo,
        format,
        template
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': '0d9923fd-3f54-4094-aaa9-d02b99570b49',
          'x-client-id': 'fde3ba5e-f574-4460-af80-1cdf2d978fa5'
        }
      }
    );

    const qrDataURL = response.data.data.qrDataURL;

    // base64
    return qrDataURL;
  } catch (error) {
    throw new Error(`Failed to generate VietQR: ${error.response ? error.response.data : error.message}`);
  }
}

   
}
