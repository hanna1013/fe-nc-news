import {useState} from 'react'


const CommentAdder = ({setComments}) => {
const [newComment, setNewComment] = useState({
    username:"jessjelly",
    body: ''
});

const handleSubmit = (event) => {
    event.preventDefault();
    setComments((currComments) => {
        return [newComment, ...currComments];
    });
    setNewComment('');
};


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Post a new comment:
                <input
                value={newComment}
                placeholder="Logged in as jessjelly"
                onChange={(event) => setNewComment(event.target.value)}
                />
            </label>
            <button type="submit">Add comment</button>
        </form>
    )
}

export default CommentAdder