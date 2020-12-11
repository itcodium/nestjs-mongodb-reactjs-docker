import { Module, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { Article, ArticleSchema } from './schemas/article.schema';
import { ArticlePull, ArticlePullSchema } from './schemas/article.pull.schema';

@Module({
    imports: [HttpModule, MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }, { name: ArticlePull.name, schema: ArticlePullSchema }])],
    controllers: [ArticlesController],
    providers: [ArticlesService],
    exports: [ArticlesService]
})
export class ArticlesModule { }