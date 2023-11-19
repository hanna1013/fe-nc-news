import { useState, useEffect} from 'react'
import { getTopics } from '../utils/api'
import {useSearchParams} from 'react-router-dom'


const TopicsList = () => {
    const [topics, setTopics] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, isSetError] = useState(false);

 
    const topicFilter = (topic) => {
        setSearchParams((newParam) => {
            newParam.set("topics", topic);
            return newParam;
        });
    }
    useEffect(() => {
        getTopics().then((topicsFromApi) => {
            setTopics(topicsFromApi)
            setIsLoading(false)
            isSetError(false)
        }).catch(() => {
            isSetError(true);
        })
    }, []);
    if(isLoading) return <p>Loading...</p>
    else if(isError) return <h2>Warning: Error!</h2>
    return (
        <div className="filter">
<select name="filter"  onChange={(event) => {
    topicFilter(event.target.value)
}}>
     <option value=''>Default</option>
{topics.map((topic) => {
                return(
                    
             <option key={topic.slug}>
                {topic.slug}
                </option>
                        
            )
            })}
            </select>
        </div>
           
        
    )
}

export default TopicsList;