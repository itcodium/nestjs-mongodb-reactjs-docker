export class ArticleHelper {
    mapArticles(articles) {
        return articles.map((article) => {
            return {
                hit: article
            }
        })
    }
}