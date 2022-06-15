import React from 'react';
import { Link } from 'react-router-dom';
import IconBad from '../assets/iconbad.png';
import './badRequest.css';

const BadRequest = () => {
  return (
    <div>
      <div className="iconBad">
        <img src={IconBad} />
      </div>
      <div className="pesanRequest">
        <p>Request tidak terkirim karena terjadi kesalahan. Silakan hubungi kami.</p>
      </div>
      <Link className="button__kembali" to={'/main'}>
        Hubungi Kami
      </Link>
    </div>
  );
};

export default BadRequest;
