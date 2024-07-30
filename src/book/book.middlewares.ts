import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class BookMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const protocol = req.protocol;
    const host = req.get('host');
    const url = req.originalUrl;
    const method = req.method;
    const date = new Date().toDateString();
    const ip = req.ip;
    console.log(`${protocol}://${host}${url} ${method} ${date} ${ip}`);
    next();
  }
}
