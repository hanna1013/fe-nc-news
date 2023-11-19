import { deleteComments} from "../utils/api";
import {useState, useEffect, useContext} from 'react'
import {UserContext} from './User'

const DeleteComment = () => {
    const {user} = useContext(UserContext)
    const [deletedComment, setDeletedComment] = useState(null)
   
    
}

export default DeleteComment