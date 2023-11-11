import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
  imports: [PrismaModule],
})
export class TodoModule {}
