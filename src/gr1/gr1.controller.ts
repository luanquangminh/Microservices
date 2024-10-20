/* eslint-disable prettier/prettier */
import { Controller, Get, Query, Res, Post, Body  } from '@nestjs/common';
import { Gr1Service } from './gr1.service';
// import {  ApiQuery, ApiTags, ApiBody } from '@nestjs/swagger';
import { Response } from 'express';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

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
   
  // @Post('generate-vietqr')
  // @ApiBody({
  //   schema: {
  //     type: 'object',
  //     properties: {
  //       accountNo: { type: 'string', example: '11336668888' },
  //       accountName: { type: 'string', example: 'QUỸ VẮC XIN PHÒNG CHỐNG COVID' },
  //       acqId: { type: 'string', example: '970415' },
  //       amount: { type: 'number', example: 79000 },
  //       addInfo: { type: 'string', example: 'Ủng Hộ Quỹ Vắc Xin' },
  //       format: { type: 'string', example: 'text' },
  //       template: { type: 'string', example: 'compact' }
  //     }
  //   }
  // })   
  // async generateVietQR(@Body() body: any) {
  //   const { accountNo, accountName, acqId, amount, addInfo, format, template } = body;
  //   return await this.gr1Service.generateVietQR(accountNo, accountName, acqId, amount, addInfo, format, template);
  // }


  // @Post('generate-vietqr')
  // @ApiBody({
  //   schema: {
  //     type: 'object',
  //     properties: {
  //       accountNo: { type: 'string', example: '11336668888' },
  //       accountName: { type: 'string', example: 'QUỸ VẮC XIN PHÒNG CHỐNG COVID' },
  //       acqId: { type: 'string', example: '970415' },
  //       amount: { type: 'number', example: 79000 },
  //       addInfo: { type: 'string', example: 'Ủng Hộ Quỹ Vắc Xin' },
  //       format: { type: 'string', example: 'text' },
  //       template: { type: 'string', example: 'compact' }
  //     }
  //   }
  // })
  // @ApiResponse({
  //   status: 201,
  //   description: 'Generated QR Code',
  //   content: {
  //     'text/html': {
  //       example: `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA..."/>`
  //     }
  //   }
  // })
  // async generateVietQR(@Body() body: any): Promise<any> {
  //   const { accountNo, accountName, acqId, amount, addInfo, format, template } = body;
  //   const qrDataURL = await this.gr1Service.generateVietQR(accountNo, accountName, acqId, amount, addInfo, format, template);

  //   return {
  //     success: true,
  //     link: qrDataURL, 
  //     html: `<img src="${qrDataURL}" alt="VietQR Code" />`
  //   };
  // }



  @Post('generate-vietqr')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        accountNo: { type: 'string', example: '11336668888' },
        accountName: { type: 'string', example: 'QUỸ VẮC XIN PHÒNG CHỐNG COVID' },
        acqId: { type: 'string', example: '970415' },
        amount: { type: 'number', example: 79000 },
        addInfo: { type: 'string', example: 'Ủng Hộ Quỹ Vắc Xin' },
        format: { type: 'string', example: 'text' },
        template: { type: 'string', example: 'compact' }
      }
    }
  })
  @ApiResponse({
    status: 201,
    description: 'Generated QR Code as PNG',
    content: {
      'image/png': {}
    }
  })
  async generateVietQR(@Body() body: any, @Res() res: Response): Promise<void> {
    const { accountNo, accountName, acqId, amount, addInfo, format, template } = body;
    const qrDataURL = await this.gr1Service.generateVietQR(accountNo, accountName, acqId, amount, addInfo, format, template);

    const base64Data = qrDataURL.replace(/^data:image\/png;base64,/, '');
    const imgBuffer = Buffer.from(base64Data, 'base64');

    res.setHeader('Content-Type', 'image/png');
    res.send(imgBuffer);
  }
  


}
  

