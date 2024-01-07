import './personalCard.css';
import { Stack, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import ScheduleIcon from '@mui/icons-material/Schedule';

interface Teacher {
  infoAboutTeacher: string;
  contact: string;
}

interface PersonalCardProps {
  teacher: Teacher;
}
const PersonalCard: React.FC<PersonalCardProps> = ({ teacher }) => {
  return (
    <div className="contact-card">
      <h1 className='subtitle'>About me</h1>
      <p className='content'>{teacher.infoAboutTeacher}</p>
      <Typography component="div">
        <ul>
          <li className='content'>October, 2021: member of EEA project.</li>
          <li className='content'>October, 2019: became lecturer at Computer Science Department at “Babeş-Bolyai” University, Cluj-Napoca, Romania.</li>
          <li className='content'>October, 2018: graduated the Ph.D. research and became doctor at “Babeş-Bolyai” University, Cluj-Napoca, Romania.</li>
          <li className='content'>July, 2014: graduated Computer Science at “Babeş-Bolyai” University, Cluj-Napoca, Romania.</li>
        </ul>
      </Typography>
    </div>
  );
};

export default PersonalCard;