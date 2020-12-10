import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { AppController } from './app.controller';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [ScheduleModule.forRoot(),
    TasksModule, MongooseModule.forRoot('mongodb://mongo:27017/challenge'),
    ArticlesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { } 