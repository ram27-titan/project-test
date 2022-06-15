import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ArrowBack from '../assets/Arrow 6.png';
import './detailKeluhan.css';
import Telpon from '../assets/telpon.png';
import WA from '../assets/wa.png';

const DetailKeluhan = () => {
  const { id } = useParams();
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'http://34.101.70.83:5200/mobile/user/v1/ticket/',
      params: { _id: id },
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
        setImage(response.data.data.image_url);
        setTitle(response.data.data.title);
        setDescription(response.data.data.description);
        setCategory(response.data.data.category);
        setStatus(response.data.data.status);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="container__title">
        <Link to={'/get'} className="imgBack">
          <img src={ArrowBack} />
        </Link>
        <div className="title__iconkeluhan">
          <h3>Keluhan Saya</h3>
        </div>
      </div>

      <div className="container__boxDetail">
        <div className="image__boxDetail">
          <img src="https://res.cloudinary.com/ram27/image/upload/v1648722613/assets/hp3_yrgcjs.jpg" />
        </div>
        <div className="title__boxDetail">
          <h3>Keluhan</h3>
          <p>{title}</p>
          <div className="line__boxDetail"></div>
        </div>
        <div className="description__boxDetail">
          <h3>Deskripsi</h3>
          <p>{description}</p>
          <div className="line__boxDetail"></div>
        </div>
        <div className="category__boxDetail">
          <h3>Kategori</h3>
          <p>{category}</p>
          <div className="line__boxDetail"></div>
        </div>
        <div className="status__boxDetail">
          <h3>Status</h3>
          <p>{status}</p>
          <div className="line__boxDetail"></div>
        </div>
        <div className="consultation__boxDetail">
          <h3>Konsultasi Via</h3>
          <div className="flex__icon">
            <a href="#">
              {' '}
              <img className="icon1" src={Telpon} /> Panggil
            </a>
            <a href="#">
              {' '}
              <img className="icon2" src={WA} /> Whatsapp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailKeluhan;
