import React from 'react';
import './mainScreen.css';
import { IoIosNotificationsOutline } from 'react-icons/io';
import iconLocation from '../assets/location.png';
import Ticket from '../assets/ticket.png';
import Visit from '../assets/visit.png';
import TandaSeru from '../assets/tanda_seru.png';
import Keluhan from '../assets/keluhan.png';
import Rectangle from '../assets/Group 4.png';
import TandaPanah from '../assets/Frame 984.png';
import Beranda from '../assets/beranda.png';
import Cabang from '../assets/cabang.png';
import Profil from '../assets/profil.png';
import { Link } from 'react-router-dom';

const MainScreen = () => {
  return (
    <div className="container">
      <div className=" container__atas">
        <div className="container__up">
          <div className="title">
            <h2>ZidDesk</h2>
          </div>
          <div className="notification">
            <span>
              {' '}
              <IoIosNotificationsOutline />
            </span>
          </div>
        </div>
        <div className="container__pt">
          <div className="title__pt">
            <h3>
              PT. BESTADA<span>(Pusat)</span>
            </h3>
          </div>
          <div className="location">
            <div className="iconLocation">
              <img src={iconLocation} />
            </div>
            <div className="location__name">
              <h5>Jakarta</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container__boxticket">
        <div className="container__ticketvisit">
          <div className="ticket">
            <img className="img1" src={Ticket} />
            <h4>5 Tiket</h4>
            <img className="img2" src={TandaSeru} />
          </div>
          <div className="visit">
            <img className="img3" src={Visit} />
            <h4>3 Visit</h4>
            <img className="img4" src={TandaSeru} />
          </div>
        </div>
        <div className="waktu__berakhir">
          <h5>
            <span>Akan berakhir pada:</span> 17 Agustus 2022
          </h5>
        </div>
      </div>
      <div className="garis">
        <div className="imgLineVertical"></div>
        <div className="imgLineHorizontal"></div>
      </div>
      <div className="container__icon">
        <Link to={'/add'} className="icon__lapor">
          <img src={Keluhan} />
          <h4>Lapor Keluhan</h4>
        </Link>
        <Link to={'/get'} className="icon__keluhan">
          <img src={Rectangle} />
          <h4>Keluhan Saya</h4>
        </Link>
      </div>
      <div className="container__aktivitas">
        <h3>Aktivitas Terbaru</h3>
        <h5>Lihat Semua</h5>
      </div>

      <div className="container__keluhan">
        <div className="title__keluhan">
          <h3>Keluhan</h3>
        </div>
        <div className="product__keluhan">
          <div className="nama_product">
            <h4>Laptop Rusak</h4>
          </div>
          <div className="time__keluhan">
            <h4>Menunggu</h4>
          </div>
          <div className="icon__panah">
            <img src={TandaPanah} />
          </div>
        </div>
      </div>

      <div className="container__visit">
        <div className="title__visit">
          <h3>Visit</h3>
        </div>
        <div className="waktu__visit">
          <div className="nama_teknisi">
            <h4>Teknisi Budi</h4>
          </div>
          <div className="time__visit">
            <h4>31 Agustus 2021</h4>
          </div>
          <div className="icon__panah2">
            <img src={TandaPanah} />
          </div>
        </div>
      </div>

      <div className="container__menu">
        <div className="icon__menu">
          <div className="icon__beranda">
            <img src={Beranda} />
            <h5>Beranda</h5>
          </div>
          <div className="icon__cabang">
            <img src={Cabang} />
            <h5>Cabang</h5>
          </div>
          <div className="icon__profil">
            <img src={Profil} />
            <h5>Profil</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
