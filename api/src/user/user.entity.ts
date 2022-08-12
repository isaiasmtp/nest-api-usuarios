import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsUsernameUnique } from "./isUniqueUsername.validor";

export class User {
    id: number;
    
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsUsernameUnique({
        message: 'username alredy exist'
    })
    @IsNotEmpty({
        message: 'username is required'
    })
    @IsString({
        message: 'username must be string'
    })
    username: string;
    
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