import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';

function globalMiddleWareOne(req: Request, res: Response, next: NextFunction) {
  console.log('this is global middleware 1');
  next();
}

function globalMiddleWareTwo(req: Request, res: Response, next: NextFunction) {
  console.log('this is global middleware 2');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleWareOne);
  app.use(globalMiddleWareTwo);
  await app.listen(4000);
}
bootstrap();
