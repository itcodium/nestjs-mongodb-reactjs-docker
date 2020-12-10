import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { CreateArticleDto } from './dto/create-article.dto';
import { Article, ArticleDocument } from './schemas/article.schema';
import { ArticleHelper } from '../articles/helpers/articles'
import MOCKED_ARTICLES_TS from '../mocks/articles';
@Injectable()
export class ArticlesService {

    constructor(
        @InjectModel(Article.name) private readonly articleModel: Model<ArticleDocument>
    ) { }

    async create(createArticleDto: CreateArticleDto): Promise<Article> {
        const createdArticle = new this.articleModel(createArticleDto);
        return createdArticle.save();
    }
    async update(articleDto: CreateArticleDto): Promise<Article> {
        return this.articleModel.updateOne({ _id: articleDto["_id"] }, articleDto);
    }
    async findAll(all): Promise<Article[]> {
        const filter = (all === "true") ? {} : { deleted: false || undefined };
        return this.articleModel.find(filter).exec();
    }
    async findById(id): Promise<Article> {
        return this.articleModel.findById(id).exec();
    }

    async delete(id): Promise<Article> {
        return this.articleModel.deleteOne({ _id: id });
    }

    async saveMany(createArticleDto: CreateArticleDto[]): Promise<Article[]> {
        let defaultArticles: CreateArticleDto[];
        let articleHelper = new ArticleHelper();
        defaultArticles = articleHelper.mapArticles(MOCKED_ARTICLES_TS);
        return this.articleModel.insertMany(defaultArticles || createArticleDto);
    }

    async deleteAll(): Promise<Article[]> {
        return this.articleModel.remove({})
    }
}

