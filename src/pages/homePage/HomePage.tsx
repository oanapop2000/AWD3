import React from 'react';
import HomeCard from '../../components/homeCard/HomeCard';
import Header from '../../components/header/Header';
import './HomePage.css';
import imageToAdd from "../homePage/profilePicture2.jpg";
import { Stack } from '@mui/material';

const Home: React.FC = () => {

  const teacherData = {
    infoAboutTeacher: 'Hello, everyone! My name is Oana Pop and I am a teacher at the Faculty of Mathematics and Computer Science. Here are some personal information that might interest you:',
    contact: "oana.pop@ubbcluj.ro"
  };

  return (
    <div>
      <Header/>
      <Stack className='stack' direction="row" spacing={2}>
        <img src={imageToAdd} alt="Image" className='image'/>
        <h1 className = "title">Welcome to my website!</h1>
      </Stack>
      <HomeCard teacher={teacherData} />
    </div>
  );
};

export default Home;