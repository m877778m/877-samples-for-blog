import { LoginResult } from './interface/login-result.interface';
import { LoginItemDTO } from './dto/login-item.dto';
export declare class MyAuthService {
    login(req: LoginItemDTO): LoginResult;
}
