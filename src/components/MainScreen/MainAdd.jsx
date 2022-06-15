import React, { useState } from 'react';
import './mainAdd.css';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBack from '../assets/Arrow 6.png';
import IconPlus from '../assets/plus.png';
import axios from 'axios';

const MainAdd = () => {
  const kategori = ['Komputer & Laptop', 'CCTV', 'AC'];

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('title', title);
    form.append('category', category);
    form.append('image', image);
    form.append('description', description);

    const options = {
      method: 'POST',
      url: 'http://34.101.70.83:5200/mobile/user/v1/ticket/',
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-API-KEY': 'l!nt@h-B@!k',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
      },
      data: form,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        navigate('/sukses');
      })
      .catch(function (error) {
        console.error(error);
        navigate('/bad');
      });
  };

  const ImageChange = (e) => {
    const files = Array.from(e.target.files);

    setImage('');
    setImagePreview('');

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagePreview((old) => [...old, reader.result]);
          setImage((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="container__add">
      <div className="container__title">
        <Link to={'/main'} className="imgBack">
          <img src={ArrowBack} />
        </Link>
        <div className="title__iconkeluhan">
          <h3>Lapor Keluhan</h3>
        </div>
      </div>
      <div className="foto__keluhan">
        <h3>Foto Keluhan</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="container__upload">
          <div className="icon__plus">
            <label>
              <img src={IconPlus} />
              <input onChange={ImageChange} type="file" name="images" accept="image/*" multiple />
            </label>
          </div>
          <div className="previewImage">
            <img src={image} />
          </div>
          <div className="title__foto">
            <h3>Foto Keluhan</h3>
          </div>
        </div>
        <div className="judul__keluhan">
          <div className="nama__judul">
            <h3>Apa Keluhan?</h3>
          </div>
          <div className="judul__input">
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Judul Keluhan" required />
          </div>
        </div>
        <div className="judul__kategori">
          <h3>Kategori Keluhan</h3>
        </div>
        <select onChange={(e) => setCategory(e.target.value)} className="pilih__kategori">
          <option className="warna__kategori">Pilih Kategori</option>
          {kategori.map((kate) => (
            <option key={kate} value={kate}>
              {kate}
            </option>
          ))}
        </select>
        <div className="judul__diskripsi">
          <h3>Deskripsikan Keluhanmu</h3>
        </div>
        <div className="box__diskripsi">
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Deskripsi Keluhan" cols="30" rows="1"></textarea>
        </div>
        <button className="button" type="submit">
          Kirim
        </button>
      </form>
    </div>
  );
};

export default MainAdd;
