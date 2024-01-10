import { Typography } from '@mui/material';
import './aiCard.css';

interface Teacher {
  teamsCode: string,
  schedule: string[],
  evaluation: string[],
}

interface TeachingCardProps {
  teacher: Teacher;
}
const AICard: React.FC<TeachingCardProps> = ({ teacher }) => {
  return (
    <div className="ai-card">
      <h1 className='title-ai-card'>Artificial intelligence</h1>
      <h1 className='subtitle-ai-card'>Schedule</h1>
      <Typography component="div">
        <ul>
          {teacher.schedule.map(s => {
            return (
              <li className='content-ai-card'>{s}</li>
            )
          })}
        </ul>
      </Typography>
      <h1 className='subtitle-ai-card'>Teams code</h1>
      <Typography component="div">
        <ul>
          <li className='content-ai-card'>{teacher.teamsCode}</li>
        </ul>
      </Typography>
      <h1 className='subtitle-ai-card'>Evaluation</h1>
      <Typography component="div">
        <ul>
          {teacher.evaluation.map(s => {
            return (
              <li className='content-ai-card'>{s}</li>
            )
          })}
        </ul>
      </Typography>
    </div>
  );
};

export default AICard;