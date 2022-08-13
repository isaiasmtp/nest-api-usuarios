import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common"
import { AbstractHttpAdapter, HttpAdapterHost } from "@nestjs/core";
import { map, Observable } from "rxjs";
import { NestResponse } from './nest-response'

@Injectable()
export class TransformResponseInterceptor implements NestInterceptor {
    private httpAdapter: AbstractHttpAdapter;
    constructor(adapterHost: HttpAdapterHost){
        this.httpAdapter = adapterHost.httpAdapter;
    }
    
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle()
        .pipe(
            map((resController: NestResponse) => {
                if (resController instanceof NestResponse){
                    const ctx = context.switchToHttp();
                    const res = ctx.getResponse();
                    const { headers, status, body } = resController;

                    const headerNames = Object.getOwnPropertyNames(headers)
                    headerNames.forEach(name => {
                        const value = headers[name];
                        this.httpAdapter.setHeader(res, name, value);
                    })

                    this.httpAdapter.status(res, status);
                    
                    return body;
                }   

                return resController;
            })
        )
    }

}