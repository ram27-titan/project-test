import React, { useEffect, useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SplashScreen from '../SplashScreen/SplashScreen';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    // navigate('/login');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    const options = {
      method: 'POST',
      url: 'http://34.101.70.83:5200/mobile/user/v1/auth/signin',
      headers: { 'Content-Type': 'application/json', 'X-API-KEY': 'l!nt@h-B@!k' },
      data: { username: username, password: password },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem('token', response.data.data.token);
        console.log(response.data.data);
        navigate('/main');
      })
      .catch(function (error) {
        console.error(error);
        setAlert(error.message);
      });
  };

  console.log({ username, password });

  return isLoading ? (
    <SplashScreen isLoading={isLoading} />
  ) : (
    <div>
      <div className="zidTitle">
        <h1>ZidDesk</h1>
      </div>
      <div className="zidTitle2">
        <h3>Masuk ZidDesk</h3>
      </div>

      {alert && (
        <div className="alert">
          <p>Silakan masukkan Username dan Kata Sandi yang sudah terdaftar ini untuk masuk.</p>
          <p>Username yang Anda masukkan salah</p>
          <p>Password yang Anda masukkan salah</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="container__username">
          <h4>Username</h4>
          <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" placeholder="Username" name="username" required />
        </div>
        <div className="container__password">
          <h4>Password</h4>
          <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" name="password" required />
        </div>

        <div className="container__lupakatasandi">
          <a href="#">Lupa kata sandi?</a>
        </div>
        <button type="submit">MASUK</button>
      </form>
    </div>
  );
};

export default Login;
