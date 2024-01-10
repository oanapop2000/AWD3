import React from 'react';
import Header from '../../../components/header/header';
import OOPCard from '../../../components/subjectsCards/oop/oopCard';
import './oopPage.css';

const OOP: React.FC = () => {
  const teacherData = {
    teamsCode: 'a7jdx41Rf',
    schedule: ['Lecture: 2h/week', 'Seminar: 1h/week'],
    evaluation : ['60% - Laboratories mark', '30% - Final exam (20% Written + 10% Practical exam)', '10% - Bonus points']
  };
  return (
    <div className='oop-page'>
      <Header />
      <OOPCard teacher={teacherData} />

    </div>
  );
};

export default OOP;