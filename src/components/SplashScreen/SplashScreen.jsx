import React, { useEffect, useState } from 'react';
import SlImage from '../assets/Group 1088.png';
import './splashScreen.css';
import { useNavigate } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
import { ClockLoader } from 'react-spinners';

const SplashScreen = () => {
  // Loading state
  // const [isLoading, setIsLoading] = useState(true);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   // Wait for 3 seconds
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  //   // navigate('/login');
  // }, []);

  //   // Custom css for loader
  //   const override = `
  //   display: block;
  //   margin: 0 auto;
  //   border-color: red;
  // `;

  // return isLoading ? (
  //   // If page is still loading then splash screen
  //   <PacmanLoader color={'#36D7B7'} isLoading={isLoading} css={override} size={150} />
  // ) : (
  //   <h1 className="App">
  //     This is Main Page
  //     {<ClockLoader color={'#36D7B7'} isLoading={isLoading} css={override} size={150} />}
  //   </h1>
  // );

  return (
    <div className="container">
      <div className="slpashImage">
        <img src={SlImage} />
      </div>
      <div className="version">
        <h3>Version 0.0.1</h3>
      </div>
    </div>
  );
};

export default SplashScreen;
