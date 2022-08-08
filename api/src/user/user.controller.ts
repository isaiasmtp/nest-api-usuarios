import { Body, Controller, Get, Param, Post } from "@nestjs/common";
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
    public create (@Body() user: User) : User {        
        return this.userService.create(user);
    }

}