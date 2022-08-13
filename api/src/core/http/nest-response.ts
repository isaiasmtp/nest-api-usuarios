export class NestResponse {
    status: number;
    headers: Object;
    body: Object;

    constructor(res: NestResponse){
        Object.assign(this, res);
    }
}