import './contactCard.css';
import EmailIcon from '@mui/icons-material/Email';
import { Stack } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import ScheduleIcon from '@mui/icons-material/Schedule';

interface Teacher {
  infoAboutTeacher: string;
  contact: string;
}

interface ContactCardProps {
  teacher: Teacher;
}
const ContactCard: React.FC<ContactCardProps> = ({ teacher }) => {
  return (
    <div className="contact-card">
      <h1 className='subtitle-contact-card'>Email</h1>
      <Stack className='content-contact-card' direction="row" spacing={1}>
        <EmailIcon />
        <span>oana.pop@ubbcluj.ro</span>
      </Stack>
      <h1 className='subtitle-contact-card'>Current office</h1>
      <Stack className='content-contact-card' direction="row" spacing={1}>
        <BusinessIcon />
        <span>Office No. 925, Teodor Mihali Street (former Nicolae Pascaly Street), No.58-60, 400591, Cluj Napoca, Romania</span>
      </Stack>
      <h1 className='subtitle-contact-card'>Schedule for Q&As</h1>
      <Stack className='content-contact-card' direction="row" spacing={1}>
        <ScheduleIcon />
        <span>Monday, 17:00-19:00</span>
      </Stack>
    </div>
  );
};

export default ContactCard;