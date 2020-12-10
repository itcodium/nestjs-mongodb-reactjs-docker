import { Body, Controller, Get, Post, Put, Delete, Param, Res, Req, HttpStatus } from '@nestjs/common';
import { Response, Request } from 'express';

import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { Article } from './schemas/article.schema';


@Controller('api/articles')
export class ArticlesController {
    constructor(private readonly articlesService: ArticlesService) { }
    @Get()
    async findAll(@Req() req: Request): Promise<Article[]> {
        return this.articlesService.findAll(req.query.all);
    }
    @Get(':id')
    async findById(@Param('id') id: number, @Res() res: Response) {
        const result = await this.articlesService.findById(id);
        res.status(HttpStatus.OK).json(result || {});
    }

    @Post('/many')
    async saveMany(@Body() createArticleDto: CreateArticleDto[], @Res() res: Response) {
        const result = await this.articlesService.saveMany(createArticleDto);
        res.status(HttpStatus.CREATED).json(result);
    }

    @Post()
    async create(@Body() createArticleDto: CreateArticleDto, @Res() res: Response) {
        const result = await this.articlesService.create(createArticleDto);
        res.status(HttpStatus.CREATED).json(result);
    }

    @Put()
    async update(@Body() createArticleDto: CreateArticleDto, @Res() res: Response): Promise<void> {
        const result = await this.articlesService.update(createArticleDto);
        res.status(HttpStatus.OK).json(result);
    }

    @Delete('/all')
    async deleteAll() {
        this.articlesService.deleteAll();
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        this.articlesService.delete(id);
    }


}
