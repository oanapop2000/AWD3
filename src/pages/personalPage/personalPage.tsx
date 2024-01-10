import React from 'react';
import Header from '../../components/header/header';
import PersonalCard from '../../components/personalCard/personalCard';
import './personalPage.css';

const Personal: React.FC = () => {
  const teacherData = {
    infoAboutTeacher: 'Hello, everyone! My name is Oana Pop and I am a teacher at the Faculty of Mathematics and Computer Science. Here are some personal information that might interest you:',
    contact: "oana.pop@ubbcluj.ro"
  };
  return (
    <div className='personal-page'>
      <Header />
      <PersonalCard teacher={teacherData} />
    </div>
  );
};

export default Personal;