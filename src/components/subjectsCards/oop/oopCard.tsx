import { Typography } from '@mui/material';
import './oopCard.css';

interface Teacher {
  teamsCode: string,
  schedule: string[],
  evaluation: string[],
}

interface TeachingCardProps {
  teacher: Teacher;
}
const OOPCard: React.FC<TeachingCardProps> = ({ teacher }) => {
  return (
    <div className='oop-container'>
      <div className="oop-card">
        <h1 className='title-oop-card'>Oriented Object Programming</h1>
        <h1 className='subtitle-oop-card'>Schedule</h1>
        <Typography component="div">
          <ul>
            {teacher.schedule.map((s, index) => {
              return (
                <li key={index} className='content-oop-card'>{s}</li>
              )
            })}
          </ul>
        </Typography>
        <h1 className='subtitle-oop-card'>Teams code</h1>
        <Typography component="div">
          <ul>
            <li className='content-oop-card'>{teacher.teamsCode}</li>
          </ul>
        </Typography>
        <h1 className='subtitle-oop-card'>Evaluation</h1>
        <Typography component="div">
          <ul>
            {teacher.evaluation.map((s, index) => {
              return (
                <li key={index} className='content-oop-card'>{s}</li>
              )
            })}
          </ul>
        </Typography>
      </div>
    </div>

  );
};

export default OOPCard;