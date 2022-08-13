import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ExceptionHttp } from './commom/filter/exceptionHttp.filter';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule
  ],
  controllers: [
    
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ExceptionHttp
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    }
  ],
})
export class AppModule {}
