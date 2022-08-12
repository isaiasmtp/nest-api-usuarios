import { Module } from "@nestjs/common";
import { IsUsernameUniqueConstraint } from "./isUniqueUsername.validor";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    controllers: [ UserController ],
    providers: [ UserService,
      IsUsernameUniqueConstraint
     ],
  })

export class UserModule{ }