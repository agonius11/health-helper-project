import {IsEmail, IsString,IsDate } from 'class-validator'

export class CreateUserDto {
    @IsEmail()
    email: string;
    @IsString()
    firstName: string;
    @IsString()
    lastName: string;
    // @IsDate()
    // created_at: Date;
    // @IsDate()
    // updated_at: Date;

    
}