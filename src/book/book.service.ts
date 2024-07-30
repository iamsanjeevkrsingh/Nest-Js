import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './data/book.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
  public books: Book[] = [];

  addBook(book: Book) {
    book.id = uuidv4();
    this.books.push(book);
    return book;
  }

  delete(id: string): string {
    const book = this.books.find((key) => key.id === id);
    if (!book) {
      throw new NotFoundException('Book doesnot exist');
    }
    this.books = this.books.filter((key) => key.id !== id);
    return 'Successfully deleted the room';
  }

  updateBook(id: string, bookDetails: Book): string {
    const book = this.books.find((key) => key.id === id);
    if (!book) {
      throw new NotFoundException('Book doesnot exist');
    }
    this.books = this.books.map((key) => {
      if (key.id === id) {
        key = { ...key, ...bookDetails };
      }
      return key;
    });
    return 'Successfully updated book!';
  }

  findAllBook(): Book[] {
    return [...this.books];
  }

  findBook(id: string): Book {
    const book = this.books.find((key) => key.id === id);
    if (!book) {
      throw new NotFoundException('Book doesnot exist');
    }
    return book;
  }
}
