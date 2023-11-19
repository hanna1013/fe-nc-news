import{useState, useEffect} from 'react'
import { getUsers } from '../utils/api';
import {Link} from 'react-router-dom'

const Login = () => {
 const [users, setUsers] = useState([]);

 useEffect(() => {
    getUsers().then((usersFromApi) => {
        setUsers(usersFromApi)
    })
 }, [])

 return (
    <div>
        <ul>
            {users.map((user) => {
                return(
                    <div key={user.username} className="usersList">
                        <li>Log in as <Link to={'/articles'}>{user.username}</Link></li>
                        <li><img src={user.avatar_url} alt={user.username}/></li>
                    </div>
                )
            })}
        </ul>
    </div>
 )

}

export default Login