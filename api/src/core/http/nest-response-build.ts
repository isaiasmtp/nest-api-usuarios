import { NestResponse } from './nest-response'

export class NestResponseBuilder {
    private res : NestResponse = {
        status: 200,
        headers: {},
        body: {}
    };

    public status(status: number){
        this.res.status = status;
        return this;
    }

    public headers(headers: Object){
        this.res.headers = headers;
        return this;
    }

    public body(body: Object){
        this.res.body = body;
        return this;
    }

    public build(){
        return new NestResponse(this.res)
    }

}