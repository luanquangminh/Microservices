export declare class Gr1Service {
    getAboutus(): {
        ten: string;
        mssv: string;
    };
    getToday(): {
        datetime: string;
    };
    genEmail(mssv: string, ten: string): {
        email: string;
    };
    layTigia(): Promise<any>;
    genQR(text: string): Promise<Buffer>;
    vietQR(): Promise<Buffer>;
    generateVietQR(accountNo: string, accountName: string, acqId: string, amount: number, addInfo: string, format: string, template: string): Promise<string>;
}
