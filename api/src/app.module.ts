import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule
  ],
  controllers: [
    
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    }
  ],
})
export class AppModule {}
