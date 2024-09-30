import { Controller, Get, Query, Res } from '@nestjs/common';
import { Gr1Service } from './gr1.service';
import { Response } from 'express';

@Controller('gr1')
export class Gr1Controller {
  constructor(private readonly gr1Service: Gr1Service) {}

  @Get('aboutus')
  getAboutus() {
    return this.gr1Service.getAboutus();
  }

  @Get('today')
  getTodayDateTime() {
    return this.gr1Service.getToday();
  }

  @Get('gen-email')
  generateEmail(@Query('mssv') mssv: string, @Query('ten') ten: string) {
    return this.gr1Service.genEmail(mssv, ten);
  }

  @Get('tigia')
  async layTigia() {
    return await this.gr1Service.layTigia();
  }

  @Get('qrcode')
  async genQR(@Query('text') text: string, @Res() res: Response) {
    const qrCode = await this.gr1Service.genQR(text);
    res.setHeader('Content-Type', 'image/png');
    return res.send(qrCode);
  }
  // @Get('viet-qr')
  // vietQR() {
  //   return this.gr1Service.vietQR();
  // }
}
