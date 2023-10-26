import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CommentCard = (props) => {
  const {body, authorComment, voteComment, comment_created_at} = props
        return (
          <div className="CommentCard">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Comment</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {body}
                  <p> By: {authorComment}</p>
                  <h6>Created at: {comment_created_at}</h6>
                  <h6>Votes: {voteComment}</h6>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      }


export default CommentCard