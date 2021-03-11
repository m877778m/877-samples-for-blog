import { Response } from 'express';
import { MyAuthService } from './my-auth.service';
import { LoginItemDTO } from './dto/login-item.dto';
export declare class MyAuthController {
    private readonly myAuthService;
    constructor(myAuthService: MyAuthService);
    index(loginItemDTO: LoginItemDTO, res: Response): Response<any, Record<string, any>>;
}
