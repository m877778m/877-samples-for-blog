import { IsNotEmpty, IsString } from 'class-validator';

export class LoginItemDTO {
    @IsNotEmpty()
    @IsString()
    userId: string;
    
    @IsNotEmpty()
    @IsString()
    password: string;
}