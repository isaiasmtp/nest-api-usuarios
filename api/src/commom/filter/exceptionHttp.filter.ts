import { ArgumentsHost, Body, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { AbstractHttpAdapter, HttpAdapterHost } from "@nestjs/core";

@Catch()
export class ExceptionHttp implements  ExceptionFilter {

    private httpAdapter: AbstractHttpAdapter
    constructor(adapterHost: HttpAdapterHost){
        this.httpAdapter = adapterHost.httpAdapter;
    }

    catch(exception: any, host: ArgumentsHost) {                
        const context = host.switchToHttp();
        const req = context.getRequest();
        const res = context.getResponse();
        
        // treatment to work with fastify and express
        const { status, body } = exception instanceof HttpException
            ? {
                status: exception.getStatus(),
                body: exception.getResponse(),

            } :
            {
                status: HttpStatus.INTERNAL_SERVER_ERROR, 
                body: {
                    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                    timestamp: new Date().toISOString(),
                    message: exception.message,
                    path: req.path
                }
            }
        this.httpAdapter.reply(res, body, status)
    }
}