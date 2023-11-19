import {Link} from 'react-router-dom'
import TopicsList from './TopicsList'

const Nav = () => {
    return (
        <nav>
            <Link to="/">Home</Link> | <Link to="/articles">Articles</Link> | {" "}
            <Link to="/login">Login</Link>  <TopicsList/>
        </nav>
    )
}

export default Nav