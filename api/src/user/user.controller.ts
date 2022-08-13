import { Body, Controller, Get, HttpStatus, Param, Post } from "@nestjs/common";
import { NestResponse } from "src/core/http/nest-response";
import { NestResponseBuilder }  from "src/core/http/nest-response-build";

import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {

    constructor(private userService: UserService){}
    
    @Get()
    public getAll () : User[] {        
        return this.userService.gellAll();
    }

    @Get('name/:name')
    public findOneByName (@Param('name') name : string) : User {        
        return this.userService.findOneByName(name);
    }

    @Post()
    public create (@Body() user: User) : NestResponse {        
        const newUser = this.userService.create(user);

        //data model representative of the information (Location) and generic - builder
        return new NestResponseBuilder()
            .status(HttpStatus.CREATED)
            .headers({
                'Location': `/name/${user.username}`
            })
            .body(newUser)
            .build();
    }

}