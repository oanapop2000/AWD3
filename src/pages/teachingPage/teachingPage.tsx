import React from 'react';
import Header from '../../components/header/header';
import TeachingCard from '../../components/teachingCard/teachingCard';

const Teaching: React.FC = () => {
  const teacherData = {
    infoAboutTeacher: 'Here are the subjects that I am teaching for the first semester of the 2023-2024 academic year:',
    subjects: ["Object oriented programming", "Artificial intelligence"]
  };

  return (
    <div>
      <Header />
      <TeachingCard teacher={teacherData} />
    </div>
  );
};

export default Teaching;