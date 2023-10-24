
import { useState, useEffect} from 'react'
import { getArticles } from '../utils/api'
import {Link} from 'react-router-dom'
import ArticleCard from './ArticleCard'
import Grid from '@mui/material/Grid'

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
   
        <ul>
            {articles.map((article) => {
                return(
                    <div className="ArticleList">
                        <ArticleCard key={article.article_id}
                        title={article.title}
                        article_img_url={article.article_img_url}
                        topic={article.topic}
                        article_id={article.article_id}
                        author={article.author}
                        created_at={article.created_at}
                        votes={article.votes}
                        comment_count={article.comment_count}

                        />
               
                </div>
                )
                })}
             </ul>
    
    ) 

}

export default ArticleList;

/* <li key="article.title" className="title">{article.title}</li>
                <li key="article.article_img_url"><img className="photo" src={article.article_img_url} alt={`picture of ${article.title}`}/></li>
                <li key="article.topic">{article.topic}</li>
                <li key="article.article_id">Article id: <Link to={`/articles/${article.article_id}`}>{article.article_id}</Link></li>
                <li key="article.author">{article.author}</li>
                <li key="article.created_at">{article.created_at}</li>
                <li key="article.votes">{article.votes}</li>
                <li key="comment_count">{article.comment_count}</li>*/ 