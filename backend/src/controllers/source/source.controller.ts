import { NextFunction, Request, Response } from "express";




export class sourceController {


    static all = async (request: Request, response: Response, next: NextFunction) => {        
        response.send({
            port: 'localhost',                        
            url: '8090',
            git: 'https://github.com/h4liss0n/softplan-dev'
        });
    }

    

}   