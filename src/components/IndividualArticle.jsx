import {useState, useEffect} from 'react'
import { getSingleArticle } from '../utils/api'
import { useParams } from 'react-router-dom';
import ArticleCard from './ArticleCard';


const IndividualArticle = ({user}) => {
    const [singleArticle, setSingleArticle] = useState({});
    const { article_id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const[isError, setIsError] = useState(false);

   

    useEffect(() => {
      getSingleArticle(article_id).then((articleFromApi) => { 
             setSingleArticle(articleFromApi);
             setIsLoading(false)
             setIsError(false)
        }).catch(() => {
            setIsError(true);
        })
    }, [article_id]);
    
    if(isLoading) return <p>Loading...</p>
    else if(isError) return <h2> Warning: Error! </h2>

    return (
        <section>
            <ArticleCard key={singleArticle.article_id}
                        title={singleArticle.title}
                        article_img_url={singleArticle.article_img_url}
                        topic={singleArticle.topic}
                        article_id={singleArticle.article_id}
                        author={singleArticle.author}
                        created_at={singleArticle.created_at}
                        votes={singleArticle.votes}
                        comment_count={singleArticle.comment_count}
                        />
        </section>
    )
}

export default IndividualArticle; 
