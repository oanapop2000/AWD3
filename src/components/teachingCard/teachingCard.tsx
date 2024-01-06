import './teachingCard.css';
import { List, ListItem, Typography } from '@mui/material';
import { Link } from "react-router-dom";

interface Teacher {
  infoAboutTeacher: string;
  subjects: string[];
}

interface TeachingCardProps {
  teacher: Teacher;
}
const TeachingCard: React.FC<TeachingCardProps> = ({ teacher }) => {
  return (
    <div className="contact-card">
      <p className='content'>{teacher.infoAboutTeacher}</p>
      <Typography component="div">
        <List sx={{ ml: 6, listStyleType: 'disc' }}>
          <ListItem sx={{ display: 'list-item' }}><Link to='/oop' className='content'>{teacher.subjects.at(0)}</Link></ListItem>
          <ListItem sx={{ display: 'list-item' }}><Link to='/ai' className='content'>{teacher.subjects.at(1)}</Link></ListItem>
        </List>
      </Typography>
    </div>
  );
};

export default TeachingCard;