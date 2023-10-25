import {useState, useEffect} from 'react'
import { getSingleArticle } from '../utils/api'


const IndividualArticle = ({article_id}) => {
    const [singleArticle, setSingleArticle] = useState({});
    
    const [isLoading, setIsLoading] = useState(true);
    const[isError, setIsError] = useState(false);

    useEffect(() => {
      
        getSingleArticle(article_id).then((articleFromApi) => { 
            console.log(articleFromApi)
             setSingleArticle(articleFromApi);
        })
    }, [article_id]);
    if(isLoading) return <p>Loading...</p>
    else if(isError) return <h2> Warning: Error! </h2>

    return (
        <section>
          <h2>{singleArticle.title}</h2>
        </section>
    )
}

export default IndividualArticle;