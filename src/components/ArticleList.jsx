
import { useState, useEffect} from 'react'
import { getArticles } from '../utils/api'


const ArticleList = () => {
   const [articles, setArticles] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
    
   useEffect(() => {
        getArticles().then((articlesFromApi) => {
            setArticles(articlesFromApi)
            setIsLoading(false);
        })
    }, []);

    if(isLoading) return <p>Loading...</p>

    return (
    <div className ="list">
        <ul>
            {articles.map((article) => {
                return(
                    <div className="articleCard">
                <li key="article.title" className="title">{article.title}</li>
                <li key="article.article_img_url"><img className="photo" src={article.article_img_url} alt={`picture of ${article.title}`}/></li>
                <li key="article.topic">{article.topic}</li>
                <li key="article.article_id">{article.article_id}</li>
                <li key="article.author">{article.author}</li>
                <li key="article.created_at">{article.created_at}</li>
                <li key="article.votes">{article.votes}</li>
                <li key="comment_count">{article.comment_count}</li>
                </div>
                )
                })}
        </ul>

    </div>
    ) 

}

export default ArticleList;