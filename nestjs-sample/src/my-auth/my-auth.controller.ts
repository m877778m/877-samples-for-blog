import {
    Controller,
    Header,
    HttpStatus,
    Post,
    Body,
    Res,
} from '@nestjs/common';
import {
    Response,
} from 'express'
import { MyAuthService, } from './my-auth.service';
import { LoginItemDTO, } from './dto/login-item.dto'

@Controller('my-auth')
export class MyAuthController {
    constructor(private readonly myAuthService: MyAuthService) {}

    @Post()
    @Header('Content-Type', 'application/json')
    index(@Body() loginItemDTO: LoginItemDTO, @Res() res: Response) {
        console.log(loginItemDTO)
        let result = this.myAuthService.login(loginItemDTO);
        return res.status(HttpStatus.OK).json(result)
    }
}
