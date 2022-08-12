import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    private user : User[] = [];

    public gellAll (): User[] {
        return this.user;
    }

    public findOneByName (name: string): User {
        return this.user.find(user => user.name == name);
    }

    public findOneByUsername (name: string): User {
        return this.user.find(user => user.username == name);
    }


    public create (user: User): User {
        this.user.push(user);
        return user;
    }

    


}