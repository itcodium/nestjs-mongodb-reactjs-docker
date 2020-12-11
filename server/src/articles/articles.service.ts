import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { CreateArticleDto } from './dto/create-article.dto';
import { Article, ArticleDocument } from './schemas/article.schema';
import { ArticlePull, ArticlePullDocument } from './schemas/article.pull.schema';
import { ArticleHelper } from '../articles/helpers/articles'
import MOCKED_ARTICLES_Step1 from '../mocks/articles_step1';
import MOCKED_ARTICLES_Step2 from '../mocks/articles_step2_add';
import MOCKED_ARTICLES_Step3 from '../mocks/articles_step3_update';
import MOCKED_ARTICLES_Step4 from '../mocks/articles_step4';
@Injectable()
export class ArticlesService {

    constructor(
        @InjectModel(Article.name) private readonly articleModel: Model<ArticleDocument>
        , @InjectModel(ArticlePull.name) private readonly articlePull: Model<ArticlePullDocument>
    ) { }

    async create(createArticleDto: CreateArticleDto): Promise<Article> {
        const createdArticle = new this.articleModel(createArticleDto);
        return createdArticle.save();
    }
    async update(articleDto: CreateArticleDto): Promise<Article> {
        return this.articleModel.updateOne({ _id: articleDto["_id"] }, articleDto);
    }
    async findAll(all): Promise<Article[]> {
        const filter = (all === "true") ? {} : { deleted: false };
        return await this.articleModel.find(filter).exec();
    }
    async findById(id): Promise<Article> {
        return this.articleModel.findById(id).exec();
    }

    async delete(id): Promise<Article> {
        return this.articleModel.deleteOne({ _id: id });
    }

    loadData(step) {
        console.log('step: ', step);
        return [];
    }
    async saveManyTest(createArticleDto: CreateArticleDto[], step): Promise<Article[]> {
        let defaultArticles: CreateArticleDto[];
        let articleHelper = new ArticleHelper();

        if (step == 1) {
            defaultArticles = articleHelper.mapArticles(MOCKED_ARTICLES_Step1);
        }
        if (step == 2) {
            defaultArticles = articleHelper.mapArticles(MOCKED_ARTICLES_Step2);
        }
        if (step == 3) {
            defaultArticles = articleHelper.mapArticles(MOCKED_ARTICLES_Step3);
        }
        if (step == 4) {
            defaultArticles = articleHelper.mapArticles(MOCKED_ARTICLES_Step3);
        }
        await this.articlePull.deleteMany({});
        await this.articlePull.insertMany(defaultArticles || createArticleDto)

        const deletedArticles = await this.articleModel.find({ deleted: true }).exec();
        await this.articlePull.deleteMany({
            externalId: {
                $in: deletedArticles.map((item => item.externalId))
            }
        });
        await this.articleModel.deleteMany(
            {
                deleted: false,
                externalId: {
                    $in: defaultArticles.map((item => item.externalId))
                }
            }
        );
        const updatedArticles = await this.articlePull.find().exec();
        return this.articleModel.insertMany(updatedArticles);
    }

    async saveMany(createArticleDto: CreateArticleDto[]): Promise<Article[]> {
        await this.articlePull.deleteMany({});
        await this.articlePull.insertMany(createArticleDto)

        const deletedArticles = await this.articleModel.find({ deleted: true }).exec();
        await this.articlePull.deleteMany({
            externalId: {
                $in: deletedArticles.map((item => item.externalId))
            }
        });
        await this.articleModel.deleteMany(
            {
                deleted: false,
                externalId: {
                    $in: createArticleDto.map((item => item.externalId))
                }
            }
        );
        const updatedArticles = await this.articlePull.find().exec();
        return this.articleModel.insertMany(updatedArticles);
    }

    async deleteAll(): Promise<Article[]> {
        await this.articlePull.deleteMany({})
        return this.articleModel.deleteMany({})
    }
}

