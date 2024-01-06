import React from 'react';
import Header from '../../../components/header/header';
import AICard from '../../../components/teachingCard/subjectsCards/ai/aiCard';


const AI: React.FC = () => {
  const teacherData = {
    teamsCode: 'f3X75jdv4i',
    schedule: ['Lecture: 2h/week', 'Seminar: 1h/week'],
    evaluation : ['60% - Laboratories mark', '30% - Final exam (20% Written + 10% Practical exam)', '10% - Bonus points']
  };
  return (
    <div>
      <Header />
      <AICard teacher={teacherData} />
    </div>
  );
};

export default AI;