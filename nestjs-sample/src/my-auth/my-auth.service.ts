import { Injectable } from '@nestjs/common';
import { LoginResult } from './interface/login-result.interface'
import { LoginItemDTO } from './dto/login-item.dto'


@Injectable()
export class MyAuthService {
    login(req: LoginItemDTO): LoginResult {
        var resCode: number = -1;
        var message: string = "Invalid user name or password.";
        if (req.userId == "hoge" && req.password == "hogehoge-123") {
            resCode = 0;
            message = ""; 
        }
        let result: LoginResult = {
            resultCode: resCode,
            message: message,
        } 
        return result;
    }
}
