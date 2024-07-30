import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  addBook(): any {
    return 'This will add book';
  }

  delete(): any {
    return 'This will delete book';
  }

  updateBook(): any {
    return 'This will update book';
  }

  findAllBook(): any {
    return 'This will find all book';
  }

  findBook(): any {
    return 'This will find book';
  }
}
