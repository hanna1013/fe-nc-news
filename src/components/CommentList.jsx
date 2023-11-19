import {useState, useEffect, useContext} from 'react'
import { getCommentsForSingleArticle, deleteComments} from '../utils/api'
import {useParams} from 'react-router-dom';
import CommentCard from './CommentCard';
import {UserContext} from './User'


const CommentList = () => {
const {user} = useContext(UserContext)
const [comments, setComments] = useState([]);
const {article_id} = useParams();
const [isLoading, setIsLoading] = useState(true);
const [isError, setIsError] = useState(false)
const [isDeleting, setIsDeleting] = useState(false);
const [deletingComment, setDeletingComment] = useState(null);

const handleClick = (comment_id) => {
    alert('Comment deleted')
    if(user) {
        setIsDeleting(true);
        setComments((currComments) => {
            return currComments.filter((comment) => comment.comment_id !== comment_id) 
        });
        deleteComments(comment_id)
        .then(() => {
            setIsDeleting(false)
            setDeletingComment(null)
            
        })
        .catch((error) => {
            setComments((currComments) => [...currComments])
            setIsDeleting(false)
            setDeletingComment(null)
        })
    }
}


useEffect(() => {
    getCommentsForSingleArticle(article_id).then((commentsFromApi) => {
        setComments(commentsFromApi);
        setIsLoading(false);
        setIsError(false)
    }).catch(() => {
        setIsError(true)
        setComments([]);
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
                <li >{comment.body}</li><button className="deleteComment"
                      disabled={isDeleting}
                      onClick={() => handleClick(comment.comment_id)}>Delete</button>
               
                    </div>
                    
                )
            })}
        </ul>

        
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

