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
}
