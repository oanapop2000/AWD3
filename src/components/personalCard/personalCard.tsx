import { Typography } from '@material-ui/core';
import './personalCard.css';

interface Teacher {
  infoAboutTeacher: string;
  contact: string;
}

interface PersonalCardProps {
  teacher: Teacher;
}
const PersonalCard: React.FC<PersonalCardProps> = ({ teacher }) => {
  return (
    <div className="home-card">
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
      <h1 className='subtitle'>Current teaching</h1>
      <Typography component="div">
        <ul>
          <li className='content'>Object oriented programming</li>
          <li className='content'>Artificial intelligence</li>
        </ul>
      </Typography>
      <h1 className='subtitle'>Contact</h1>
      <Typography component="div">
        <ul>
          <li className='content'>{teacher.contact}</li>
        </ul>
      </Typography>
    </div>
  );
};

export default PersonalCard;