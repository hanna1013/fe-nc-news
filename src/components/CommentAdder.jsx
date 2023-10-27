import {useState} from 'react'
import CommentList from './CommentList';



const CommentAdder = ({addNewComment}) => {
const [newComment, setNewComment] = useState({
    username:"jessjelly",
    body: ''
});

const handleSubmit = (event) => {
    event.preventDefault();
    addNewComment((currList) => {
        return [newComment, ...currList];
    });
    setNewComment('');
};


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                value={newComment.username}
                placeholder="Logged in as jessjelly"
                onChange={(event) => setNewComment(event.target.value)}
                />
            </label>
            <label>
                Post comment:
                <input
                value={newComment.body}
                onChange={(event) => setNewComment(event.target.value)}
                />
            </label>
            <button type="submit">Add comment</button>
        </form>
    )
}

export default CommentAdder