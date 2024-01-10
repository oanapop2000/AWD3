import { Typography } from '@material-ui/core';
import './homeCard.css';

interface Teacher {
  infoAboutTeacher: string;
  contact: string;
}

interface HomeCardProps {
  teacher: Teacher;
}
const HomeCard: React.FC<HomeCardProps> = ({ teacher }) => {
  return (
    <div className="home-card">
      <h1 className='subtitle-home-card'>Current teaching</h1>
      <Typography component="div">
        <ul>
          <li className='content-home-card'>Object oriented programming</li>
          <li className='content-home-card'>Artificial intelligence</li>
        </ul>
      </Typography>
      <h1 className='subtitle-home-card'>Contact</h1>
      <Typography component="div">
        <ul>
          <li className='content-home-card'>{teacher.contact}</li>
        </ul>
      </Typography>
      <h1 className='subtitle-home-card'>Research</h1>
      <Typography component="div">
        <ul>
          <li className='content-home-card'>My main focus in research is on concepts of artificial intelligence, including fields like recommender systems and AI in healthcare.</li>
        </ul>
      </Typography>
    </div>
  );
};

export default HomeCard;