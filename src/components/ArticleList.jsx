
import { useState, useEffect} from 'react'
import { getArticles } from '../utils/api'
import {Link, useSearchParams} from 'react-router-dom'
import ArticleCard from './ArticleCard'
import {useParams} from 'react-router-dom';

const ArticleList = () => {
   const [articles, setArticles] = useState([]);
   const [searchParams, setSearchParams] = useSearchParams();
   const [isLoading, setIsLoading] = useState(true);
   const[isError, setIsError]=useState(false)
   const sortArray = ["created_at", "comment_count", "votes"]


   const sortFilter = (sortby) => {
   setSearchParams((newParams) => {
       newParams.set("sortby", sortby);
       return newParams;
   });
   }

   const orderFilter = (order) => {
    setSearchParams((newParams) => {
        newParams.set("order", order);
        return newParams;
    })
   }

   useEffect(() => {
    const topicParam = searchParams.get("topics")
    const sortParam = searchParams.get("sortby")
    const orderParam = searchParams.get("order")
        getArticles(topicParam, sortParam, orderParam).then((articlesFromApi) => {
            setArticles(articlesFromApi)
            setIsLoading(false);
            setIsError(false)
        }).catch(() => {
            setIsError(true);
})
    }, [searchParams]);

    if(isLoading) return <p>Loading...</p>
    else if(isError) return <h2>Warning: Error!</h2>

    return (
        <div>
        <section>
            <select
            name="sort"
            className="sorting"
            onChange={(event) => sortFilter(event.target.value)}>
                {sortArray.map((sort) => {
                    return <option key={sort}>{sort}</option>
                })}

            </select>
        </section>
        <section>
            <button
            onClick={() =>  orderFilter("DESC")}
            className='ordered'
            >
            DESC
            </button>

            <button
            onClick={() =>  orderFilter("ASC")}
            className='ordered'
            >
                ASC
            </button>
        </section>
        <ul>
            {articles.map((article) => {
                return(
                    <div key={article.article_id} className="ArticleList">
                        <ArticleCard 
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
             </div>
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