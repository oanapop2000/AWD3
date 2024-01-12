import './personalCard.css';
import { Typography } from '@mui/material';

interface Teacher {
  infoAboutTeacher: string;
  contact: string;
}

interface PersonalCardProps {
  teacher: Teacher;
}
const PersonalCard: React.FC<PersonalCardProps> = ({ teacher }) => {
  return (
    <div className='personal-container'>
<div className="personal-card">
      <h1 className='subtitle-personal-card'>About me</h1>
      <p className='content-personal-card'>{teacher.infoAboutTeacher}</p>
      <Typography component="div">
        <ul>
          <li className='content-personal-card'>October, 2021: member of EEA project.</li>
          <li className='content-personal-card'>October, 2019: became lecturer at Computer Science Department at “Babeş-Bolyai” University, Cluj-Napoca, Romania.</li>
          <li className='content-personal-card'>October, 2018: graduated the Ph.D. research and became doctor at “Babeş-Bolyai” University, Cluj-Napoca, Romania.</li>
          <li className='content-personal-card'>July, 2014: graduated Computer Science at “Babeş-Bolyai” University, Cluj-Napoca, Romania.</li>
        </ul>
      </Typography>
    </div>
    </div>
    
  );
};

export default PersonalCard;