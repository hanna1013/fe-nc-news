import {useState, useEffect} from 'react'
import { getCommentsForSingleArticle } from '../utils/api'
import {useParams} from 'react-router-dom';
import CommentCard from './CommentCard';
import CommentAdder from './CommentAdder'
import { postComment } from '../utils/api';


const CommentList = () => {
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

const addNewComment = (username, body) => {
postComment(article_id, username, body).then((newCommentFromApi) => {
    setComments((currentComments) => [newCommentFromApi, ...currentComments])
})
}



if(isLoading) return <p>Loading...</p>
else if(isError) return <h2> Warning: Error! </h2>
return (
    <div>
    <ul>
       {comments.map((comment) => { 
        if(comment.length === 0){
        return <p>No comments on this article</p>
       } 
          return(
              <div className="CommentList">
                <li key="comment.body">{comment.body}</li>
                    </div>
                )
            })}
        </ul>
        <CommentAdder setComments={setComments}/>
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

