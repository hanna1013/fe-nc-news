import {useState, useEffect, useContext} from 'react'
import { getCommentsForSingleArticle } from '../utils/api'
import {useParams} from 'react-router-dom';
import CommentCard from './CommentCard';
import {UserContext} from './User'
import {CommentAdder} from './CommentAdder'



const CommentList = () => {
const {user} = useContext(UserContext)
const [comments, setComments] = useState([]);
const {article_id} = useParams();
const [isLoading, setIsLoading] = useState(true);
const [isError, setIsError] = useState(false)
useEffect(() => {
    getCommentsForSingleArticle(article_id).then((commentsFromApi) => {
        setComments(commentsFromApi);
        setIsLoading(false);
        setIsError(false)
    }).catch(() => {
        setIsError(true)
    })
}, [article_id]);


return isLoading ? <p>Loading...</p>
: 
(
    <div>
    <ul>
       {comments.map((comment) => { 
          return(
              <div key={comment.comment_id} className="CommentList">
                <li >{comment.body}</li>
                    </div>
                )
            })}
        </ul>
        <CommentAdder article_id={article_id} setComments={setComments} />
        </div>   
)
}
/*<CommentCard key={comment.comment_id}
                        body={comment.body}
                        authorComment={comment.author}
                        comment_id={comment.comment_id}
                        voteComment={comment.votes}
                        comment_article_id={comment.article_id}
                        comment_created_at={comment.created_at}
                        />*/
export default CommentList;

