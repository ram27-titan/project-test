import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowBack from '../assets/Arrow 6.png';
import './getKeluhan.css';
import axios from 'axios';

const GetKeluhan = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'http://34.101.70.83:5200/mobile/user/v1/ticket/',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': 'l!nt@h-B@!k',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.data);
        setDetails(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="detail__keluhan">
      <div className="container__title">
        <Link to={'/main'} className="imgBack">
          <img src={ArrowBack} />
        </Link>
        <div className="title__iconkeluhan">
          <h3>Keluhan Saya</h3>
        </div>
      </div>
      <div className="container__tipe">
        <div className="tipe">
          <a href="#">Semua</a>
          <a href="#">Menunggu</a>
          <a href="#">Dalam Konsultasi</a>
        </div>
      </div>
      {details.map((detail, index) => (
        <div key={detail._id}>
          <div className="container__detail">
            <Link to={`/detail/${detail._id}`} className="foto__detail">
              <img src="https://res.cloudinary.com/ram27/image/upload/v1648722613/assets/hp3_yrgcjs.jpg" />
            </Link>
            {/* <img src="https://res.cloudinary.com/ram27/image/upload/v1648722613/assets/hp3_yrgcjs.jpg"></img> */}
            <div className="status__detail">
              <p>{detail.status}</p>
              <p>{detail.category}</p>
              <p>13 Juli 2022</p>
            </div>
            <div className="title__detail">
              <h2>{detail.title}</h2>
            </div>
            <div className="description__detail">
              <p>{detail.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetKeluhan;
