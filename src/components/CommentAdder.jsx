import { useState, useContext } from 'react'
import { postComment } from '../utils/api';
import { UserContext } from './User'



export const CommentAdder = ({article_id, setComments}) => {
const [newComment, setNewComment] = useState("");   
const [posted, setPosted] = useState(null)
const { user } = useContext(UserContext)
const [isError, setError] = useState(false)


const handleSubmit = (event) => {
    event.preventDefault();
    const comment = {
        username: user,
        body: newComment,
    };
    setPosted(true);
    postComment(article_id, comment, user)
    .then((response) => {
        console.log(response)
        setComments((currComments) => {
            return [response, ...currComments];
        });
        setPosted(null);
        setNewComment("");
    })
    .catch((isError) => {
        console.log(isError)
        setPosted(null);
        setError(true);
        setNewComment("")
    });
};
    return (
       
        <form onSubmit={handleSubmit}>
            <label>
                Comment:
                <input
                className="inputComment"
                value={newComment}
                onChange={(event) => setNewComment(event.target.value)}
                required
                />
            </label>
            <button className="commentButton" disabled={posted} type="submit">
                Add comment
            </button>
        </form>
    )
}

