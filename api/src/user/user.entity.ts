import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class User {
    id: number;
    
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty({
        message: 'Full name is required'
    })
    fullName: string;

    createdAt: Date;
}