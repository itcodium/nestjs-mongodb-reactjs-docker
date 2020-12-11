export class ArticleHelper {
    mapArticles(articles) {
        return articles.map((article) => {
            return {
                externalId: article.objectID,
                deleted: false,
                hit: article
            }
        })
    }
}