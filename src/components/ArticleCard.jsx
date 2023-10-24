import {Link} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const ArticleCard = (props) => {
    const {title,article_img_url,topic,article_id, author,created_at,votes,comment_count} = props
    return (
        
        <article className="ArticleCard">
           
            <Card elevation = {2} sx={{maxWidth: 500}} direction="row">
            <CardHeader title={title} subheader={topic}/>
            <CardMedia component="img" height="350" image={article_img_url} alt={`picture of ${title}`}/>
            <b>Article id: <Link to={`/articles/${article_id}`}>{article_id}</Link></b>
            <h5>Created at: {created_at}</h5>
            <p>By: {author}</p>
            <p>Total Votes: {votes}</p>
            <p>Total Comments: {comment_count}</p>
          
            </Card>
            
        </article>
        
       
    )
}

export default ArticleCard