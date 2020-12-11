import { Injectable, Logger, HttpService } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';

import { ArticlesService } from '../articles/articles.service';
import { ArticleHelper } from '../articles/helpers/articles'

@Injectable()
export class TasksService {
  constructor(private articlesService: ArticlesService, private httpService: HttpService) { }
  @Interval(12 * 60 * 60 * 1000)
  handleInterval() {
    const logger = new Logger(TasksService.name);
    logger.debug('Called every 1 hour');
  }

  pullDataFromApi() {
    const articleHelper = new ArticleHelper();
    this.articlesService.deleteAll();
    const res = this.httpService.get('http://hn.algolia.com/api/v1/search_by_date?query=nodejs');
    res.subscribe((response) => {
      this.articlesService.saveMany(articleHelper.mapArticles(response.data["hits"]), null)
    });
  }

}

