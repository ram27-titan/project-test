import React from 'react';
import SplashScreen from './components/SplashScreen/SplashScreen';
import Login from './components/Login/Login';
import MainScreen from './components/MainScreen/MainScreen';
import { Route, Routes } from 'react-router-dom';
import MainAdd from './components/MainScreen/MainAdd';
import SuksesRequest from './components/MainScreen/SuksesRequest';
import BadRequest from './components/MainScreen/BadRequest';
import GetKeluhan from './components/MainScreen/GetKeluhan';
import DetailKeluhan from './components/MainScreen/DetailKeluhan';

const App = () => {
  return (
    <Routes>
      <Route path="/splash" exact element={<SplashScreen />} />
      <Route path="/" exact element={<Login />} />
      <Route path="/main" exact element={<MainScreen />} />
      <Route path="/get" exact element={<GetKeluhan />} />
      <Route path="/detail/:id" exact element={<DetailKeluhan />} />
      <Route path="/add" exact element={<MainAdd />} />
      <Route path="/sukses" exact element={<SuksesRequest />} />
      <Route path="/bad" exact element={<BadRequest />} />
    </Routes>
  );
};

export default App;
