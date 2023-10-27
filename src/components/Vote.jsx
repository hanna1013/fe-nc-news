import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { patchVote } from '../utils/api';



const Vote = ({votes}) => {
    const [newVotes, setNewVotes] = useState(0);
    const[error, setError] = useState(false)
    const {article_id} = useParams();

    const voteUpdate = (value) => {
        setNewVotes((currentVotes) => {
            return currentVotes + value;
            setError(false)
        })
       
        patchVote(article_id, value).catch(() => {
             setNewVotes(votes);
             setError(true)
        });
        
        
    }

    return (
        <div> 
            
            {error ? <p>Error, please try again!</p> : false}
            <button className="voteButton"
            disabled={newVotes === 1}
            aria-label='like'
            onClick={() => {
                voteUpdate(1);
            }}>
                Like
            </button> <p className="voteNum">{newVotes + votes}</p>
            
        </div>
    )
} 

export default Vote;