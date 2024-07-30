import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './data/book.dto';

@Controller()
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post('book')
  addBook(@Body() book: Book): Book {
    return this.bookService.addBook(book);
  }

  @Delete('books/:id')
  delete(@Param('id') id: string): string {
    return this.bookService.delete(id);
  }

  @Patch('books/:id')
  updateBook(@Param('id') id: string, @Body() book: Book): any {
    return this.bookService.updateBook(id, book);
  }

  @Get('books')
  findAllBook(): Book[] {
    return this.bookService.findAllBook();
  }

  @Get('books/:id')
  findBook(@Param() param: any): Book {
    return this.bookService.findBook(param.id);
  }
}
