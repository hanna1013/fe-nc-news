import {Link} from 'react-router-dom'
import {useState} from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CommentList from './CommentList';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const ArticleCard = (props) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    }
    const {title,article_img_url,topic,article_id, author,created_at,votes,comment_count, comments} = props
    return (
        
        <article className="ArticleCard">
            <Link to={`/articles/${article_id}`}>
            <Card elevation = {2} sx={{maxWidth: 500}} direction="row">
            <CardHeader title={title} subheader={topic}/>
            <CardMedia component="img" height="350" image={article_img_url} alt={`picture of ${title}`}/>
            <b>Article id:{article_id}</b>
            <h5>Created at: {created_at}</h5>
            <p>By: {author}</p>
            <p>Total Votes: {votes}</p>
            <p>Comments:{comment_count}</p>
            <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Comments:</Typography>
          <Typography paragraph> 
          <CommentList comments = {comments}/>
          </Typography>
          </CardContent>
      </Collapse>
            </Card>
            </Link>
            
        </article>
        
       
    )
}

export default ArticleCard