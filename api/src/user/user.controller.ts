import { Body, Controller, Post } from "@nestjs/common";

@Controller('users')
export class UserController {

    private user = [];

    @Post()
    public create (@Body() user) {
        this.user.push(user);
        return user;
    }

}