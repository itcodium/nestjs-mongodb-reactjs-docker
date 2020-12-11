import { Module, HttpModule } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ArticlesModule } from '../articles/articles.module';

@Module({
  imports: [HttpModule, ArticlesModule],
  providers: [TasksService]
})
export class TasksModule { }
