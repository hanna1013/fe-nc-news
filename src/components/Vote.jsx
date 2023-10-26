import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { patchVote } from '../utils/api'


const Vote = ({votes}) => {
    const [newVotes, setNewVotes] = useState(0);
    const { article_id } = useParams();

    const updateVote = (value) => {
        setNewVotes((currentVotes) => {
            return currentVotes + value;
        })
        patchVote(article_id, value).catch(() => {
            setNewVotes(0)
        });
    }


    return (
        <div>
            <button
            disabled={newVotes === 1}
            onClick={() => {
                updateVote(1);
            }}>
                +1
            </button>
            <button
            disabled={newVotes === -1}
            onClick={() => {
                updateVote(-1)
            }}>
                -1
            </button>
        </div>
    )
} 

export default Vote;