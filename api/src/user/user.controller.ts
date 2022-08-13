import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Res } from "@nestjs/common";
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
    public create (@Body() user: User, @Res() res) : void {        
        const newUser = this.userService.create(user);

        //data model representative of the information
        res.status(HttpStatus.CREATED)
            .location(`/name/${user.username}`)
            .json(newUser)
    }

}