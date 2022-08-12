import { Exclude, Expose } from "class-transformer";
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

    @Exclude({
        toPlainOnly: true
    })
    @IsNotEmpty()
    password: string;

    @IsNotEmpty({
        message: 'Full name is required'
    })
    fullName: string;

    @Expose({
        name: 'joinDate'
    })
    createdAt: Date;
}