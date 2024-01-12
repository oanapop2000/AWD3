import React from 'react';
import Header from '../../components/header/header';
import './homePage.css';
import imageToAdd from "../homePage/profilePicture2.jpg";
import { Stack } from '@mui/material';
import HomeCard from '../../components/homeCard/homeCard';

const Home: React.FC = () => {

  const teacherData = {
    infoAboutTeacher: 'Hello, everyone! My name is Oana Pop and I am a teacher at the Faculty of Mathematics and Computer Science. Here are some personal information that might interest you:',
    contact: "oana.pop@ubbcluj.ro"
  };

  return (
    <div className='home-page'>
      <Header />
      <Stack className='stack-home-page' direction="row" spacing={2}>
        <img src={imageToAdd} alt="Image" className='image-home-page' />
        <h1 className="title-home-page">Welcome to my website!</h1>
      </Stack>
      <HomeCard teacher={teacherData} />
    </div>
  );
};

export default Home;