import React from 'react';
import { Link } from 'react-router-dom';
import IconBerhasil from '../assets/iconberhasil.png';
import './suksesRequest.css';

const SuksesRequest = () => {
  return (
    <div>
      <div className="iconBerhasil">
        <img src={IconBerhasil} />
      </div>
      <div className="pesanRequest">
        <p>Request kamu telah dikirim, harap menunggu balasan dari kami</p>
      </div>
      <Link className="button__kembalisukses" to={'/main'}>
        Kembali
      </Link>
    </div>
  );
};

export default SuksesRequest;
