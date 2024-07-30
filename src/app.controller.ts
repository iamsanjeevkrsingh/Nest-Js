import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // //add book
  // @Post('book')
  // addBook(): any {
  //   return this.appService.addBook();
  // }

  // //delete book
  // @Delete('books/:id')
  // delete(): any {
  //   return this.appService.delete();
  // }

  // //update book
  // @Patch('books/:id')
  // updateBook(): any {
  //   return this.appService.updateBook();
  // }

  // //find all book
  // @Get('books')
  // findAllBook(): any {
  //   return this.appService.findAllBook();
  // }

  // //find single book
  // @Get('books/:id')
  // findBook(): any {
  //   return this.appService.findBook();
  // }
}
