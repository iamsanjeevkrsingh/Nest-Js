import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BookMiddleWare } from './book.middlewares';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService],
  exports: [],
})
export class BookModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(BookMiddleWare).forRoutes('books');
  }
}
