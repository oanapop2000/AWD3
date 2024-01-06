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
    <div className="contact-card">
      <h1 className='ai-title'>Artificial intelligence</h1>
      <h1 className='subtitle'>Schedule</h1>
      <Typography component="div">
        <ul>
          {teacher.schedule.map(s => {
            return (
              <li className='content'>{s}</li>
            )
          })}
        </ul>
      </Typography>
      <h1 className='subtitle'>Teams code</h1>
      <Typography component="div">
        <ul>
          <li className='content'>{teacher.teamsCode}</li>
        </ul>
      </Typography>
      <h1 className='subtitle'>Evaluation</h1>
      <Typography component="div">
        <ul>
          {teacher.evaluation.map(s => {
            return (
              <li className='content'>{s}</li>
            )
          })}
        </ul>
      </Typography>
    </div>
  );
};

export default AICard;