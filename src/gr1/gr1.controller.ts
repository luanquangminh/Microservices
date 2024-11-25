/* eslint-disable prettier/prettier */
import { Controller, Get, Query, Res, Post, Body  } from '@nestjs/common';
import { Gr1Service } from './gr1.service';
// import {  ApiQuery, ApiTags, ApiBody } from '@nestjs/swagger';
import { Response } from 'express';
import { ApiBody, ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('gr1')
export class Gr1Controller {
  constructor(private readonly gr1Service: Gr1Service) {}

  @Get('aboutus')  //Get method for aboutus service
  getAboutus() {
    return this.gr1Service.getAboutus();
  }

  @Get('today')  //Get method for today service
  getTodayDateTime() {
    return this.gr1Service.getToday();
  }

  @Get('gen-email') //Get method for gen-email
  generateEmail(@Query('mssv') mssv: string, @Query('ten') ten: string) { // define parameters 
    return this.gr1Service.genEmail(mssv, ten);
  }

  @Get('tigia') //Get method for tigia 
  async layTigia() {
    return await this.gr1Service.layTigia();
  }
  @Get('qrcode') //Get method for qrcode
  async genQR(@Query('text') text: string, @Res() res: Response) { // define parameters
    const qrCode = await this.gr1Service.genQR(text);
    res.setHeader('Content-Type', 'image/png'); // return type = img/png
    return res.send(qrCode);
  }
  
  @Post('generate-vietqr') //Post method for generate-vietqr 
  @ApiQuery({
    name: 'acqId',
    type: 'string',
    description: 'Choose the bank (Acquirer ID)',
    required: true,
    // enum: ['970415: Vietcombank', '970416: Techcombank', '970417: BIDV'], // test values
    /** Create a list of bank **/
    enum: ['970415: VietinBank', '970436: Vietcombank', '970418: BIDV', '970405: Agribank', '970448: OCB', '970422: MBBank', '970407: Techcombank', '970416: ACB', '970432: VPBank', '970423: TPBank', '970403: Sacombank', '970437: HDBank', '970454: VietCapitalBank', '970429: SCB', '970441: VIB', '970443: SHB', '970431: Eximbank', '970426: MSB', '546034: CAKE', '546035: Ubank', '963388: Timo', '971005: ViettelMoney', '971011: VNPTMoney', '970400: SaigonBank', '970409: BacABank', '970412: PVcomBank', '970414: Oceanbank', '970419: NCB', '970424: ShinhanBank', '970425: ABBANK', '970427: VietABank', '970428: NamABank', '970430: PGBank', '970433: VietBank', '970438: BaoVietBank', '970440: SeABank', '970446: COOPBANK', '970449: LPBank', '970452: KienLongBank', '668888: KBank', '970462: KookminHN', '970466: KEBHanaHCM', '970467: KEBHANAHN', '977777: MAFC', '533948: Citibank', '970463: KookminHCM', '999888: VBSP', '970457: Woori', '970421: VRB', '970458: UnitedOverseas', '970410: StandardChartered', '970439: PublicBank', '801011: Nonghyup', '970434: IndovinaBank', '970456: IBKHCM', '970455: IBKHN', '458761: HSBC', '970442: HongLeong', '970408: GPBank', '970406: DongABank', '796500: DBSBank', '422589: CIMB', '970444: CBBank'],
    example: '970415: Vietcombank', //example for auto fill in test data
  })
  /** Input data with autofill example **/
  @ApiQuery({ name: 'accountNo', type: 'string', description: 'Account number', required: true, example: '11336668888' }) //input 
  @ApiQuery({ name: 'accountName', type: 'string', description: 'Account name', required: true, example: 'QUỸ VẮC XIN PHÒNG CHỐNG COVID' })
  @ApiQuery({ name: 'amount', type: 'number', description: 'Amount to transfer', required: true, example: 79000 })
  @ApiQuery({ name: 'addInfo', type: 'string', description: 'Additional information', required: false, example: 'Ủng Hộ Quỹ Vắc Xin' })
  @ApiQuery({ name: 'format', type: 'string', description: 'QR code format', required: false, example: 'text' })
  @ApiQuery({ name: 'template', type: 'string', description: 'Template style', required: false, example: 'compact',})
  @ApiResponse({
    status: 201,
    description: 'Generated QR Code as PNG',
    content: { 'image/png': {} }, //type = image/png
  })
  async generateVietQR( // define parameters
    @Query('accountNo') accountNo: string,
    @Query('accountName') accountName: string,
    @Query('acqId') acqIdWithDescription: string, // Receive descriptive value 
    @Query('amount') amount: number,
    @Query('addInfo') addInfo: string,
    @Query('format') format = 'text',
    @Query('template') template = 'compact',
    @Res() res: Response
  ): Promise<void> {
    // Extract the real acqId value (before the ":")
    const acqId = acqIdWithDescription.split(':')[0].trim();

    try {
      // Call service to generate the QR code
      const qrDataURL = await this.gr1Service.generateVietQR(
        accountNo,
        accountName,
        acqId,
        amount,
        addInfo,
        format,
        template
      );

      // Convert base64 QR code from server to a buffer and return as an image
      const base64Data = qrDataURL.replace(/^data:image\/png;base64,/, ''); //process base64 string
      const imgBuffer = Buffer.from(base64Data, 'base64');

      res.setHeader('Content-Type', 'image/png'); // Set Content-Type
      res.send(imgBuffer);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Failed to generate QR Code', error: error.message }); // error message
    }
}
  

}
