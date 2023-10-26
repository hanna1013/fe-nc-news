import {Link} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Vote from './Vote'

const ArticleCard = (props) => {
    const {title,article_img_url,topic,article_id, author,created_at,votes,comment_count} = props
    return (
        
        <article className="ArticleCard">
            <Link to={`/articles/${article_id}`}>
            <Card elevation = {2} sx={{maxWidth: 500}} direction="row">
            <CardHeader title={title} subheader={topic}/>
            <CardMedia component="img" height="350" image={article_img_url} alt={`picture of ${title}`}/>
            <b>Article id: {article_id}</b>
            <h5>Created at: {created_at}</h5>
            <p>By: {author}</p>
            <Vote
            votes = {votes}/>
            <p>Total Comments: {comment_count}</p>
          
            </Card>
            </Link>
        </article>
        
       
    )
}

export default ArticleCard