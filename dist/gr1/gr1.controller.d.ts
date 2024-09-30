import { Gr1Service } from './gr1.service';
import { Response } from 'express';
export declare class Gr1Controller {
    private readonly gr1Service;
    constructor(gr1Service: Gr1Service);
    getAboutus(): {
        ten: string;
        mssv: string;
    };
    getTodayDateTime(): {
        datetime: string;
    };
    generateEmail(mssv: string, ten: string): {
        email: string;
    };
    layTigia(): Promise<any>;
    genQR(text: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
