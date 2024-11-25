/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { Gr1Controller } from './gr1.controller';
import { Gr1Service } from './gr1.service';
import { Response } from 'express';



describe('Gr1Controller', () => {
  let gr1Controller: Gr1Controller;
  let gr1Service: Gr1Service;
  let consoleErrorMock: jest.SpyInstance;

 

  const mockResponse = {
    setHeader: jest.fn(),
    send: jest.fn(),
    status: jest.fn().mockReturnThis(), 
  };
  


  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [Gr1Controller],
      providers: [Gr1Service],
    }).compile();

    gr1Service = moduleRef.get<Gr1Service>(Gr1Service);
    gr1Controller = moduleRef.get<Gr1Controller>(Gr1Controller);
    consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {}); //check erorr status return 
  });

  afterEach(() => {
    consoleErrorMock.mockRestore(); // Res after test
  });

  //Test units QR  
  describe('genQR', () => {
    it('should generate QR code and send it as a response', async () => {
      // Arrange
      const text = 'test-qr';//input test text
      const mockQrCode = Buffer.from('mock-qr-code');
      jest.spyOn(gr1Service, 'genQR').mockResolvedValue(mockQrCode); // Mock service call

      // Act
      await gr1Controller.genQR(text, mockResponse as any);

      // Assert
      expect(gr1Service.genQR).toHaveBeenCalledWith(text); // Check input
      expect(mockResponse.setHeader).toHaveBeenCalledWith('Content-Type', 'image/png'); // Check headers
      expect(mockResponse.send).toHaveBeenCalledWith(mockQrCode); // Check response 
    });
    //error check
    it('should handle errors when service fails', async () => {
      const text = 'test-qr';
      jest.spyOn(gr1Service, 'genQR').mockRejectedValue(new Error('Service error')); // Mock service error
      await expect(gr1Controller.genQR(text, mockResponse as any)).rejects.toThrow('Service error');
    });
  });                     
  
  //  test vietqr
  it('should handle errors when service fails', async () => {
    //query for test
    const query = {
      accountNo: '11336668888',
      accountName: 'QUỸ VẮC XIN PHÒNG CHỐNG COVID',
      acqId: '970415: Vietcombank',
      amount: 79000,
      addInfo: 'Ủng Hộ Quỹ Vắc Xin',
      format: 'text',
      template: 'compact',
    };
  
    jest.spyOn(gr1Service, 'generateVietQR').mockRejectedValue(new Error('Service error'));
  //turnback 
    await gr1Controller.generateVietQR(
      query.accountNo,
      query.accountName,
      query.acqId,
      query.amount,
      query.addInfo,
      query.format,
      query.template,
      mockResponse as any
    );
  
    expect(mockResponse.status).toHaveBeenCalledWith(500); // Check for status 500
    expect(mockResponse.send).toHaveBeenCalledWith({
      message: 'Failed to generate QR Code',
      error: 'Service error',
    }); // Check for the correct error response
  });
  

  //''''todo 




  
  //test unit for aboutus

  
  describe('getAboutus', () => {
    it('should return "About Us"', () => {
      const result = { ten: 'Luan Quang Minh', mssv: '20225985' }; //check matched result
      jest.spyOn(gr1Service, 'getAboutus').mockImplementation(() => result);
  
      expect(gr1Controller.getAboutus()).toBe(result);
    });
  });
  

  describe('getTodayDateTime', () => {
    it('should return the current date and time', () => {
      const result = { datetime: '2024-01-01T00:00:00Z' }; // Include the 'datetime' property to match the current time 
      jest.spyOn(gr1Service, 'getToday').mockImplementation(() => result);
  
      expect(gr1Controller.getTodayDateTime()).toBe(result);
    });
  });
  
  
  describe('generateEmail', () => {
    it('should generate an email', () => {
      const mssv = '20225985';
      const ten = 'Luan Quang Minh';
      const result = { email: 'minh.lq225985@sis.hust.edu.vn' }; // Mocked return type matches the expected type
  
      jest.spyOn(gr1Service, 'genEmail').mockImplementation((receivedMssv, receivedTen) => {
        expect(receivedMssv).toBe(mssv); //  inputs
        expect(receivedTen).toBe(ten);   //  inputs
        return result; // Return email property
      });
  
      expect(gr1Controller.generateEmail(mssv, ten)).toBe(result);
    });
  });
  
  

  describe('layTigia', () => { // exchange rates
    it('should return exchange rates', async () => {
      const result = { usd: 23.5, eur: 25.0 };
      jest.spyOn(gr1Service, 'layTigia').mockResolvedValue(result);

      expect(await gr1Controller.layTigia()).toBe(result);
    });

    it('should handle errors', async () => {
      jest.spyOn(gr1Service, 'layTigia').mockRejectedValue(new Error('Service error'));

      await expect(gr1Controller.layTigia()).rejects.toThrow('Service error');
    });
  });

});
