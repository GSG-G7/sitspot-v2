import React from 'react';
import { Link } from 'react-router-dom';
import frog404 from '../../assets/images/error404.png';
import './style.css';

const Error404 = () => (
  <div className="error">
    <div className="error__header" />
    <div className="error__content">
      <img className="error__image" src={frog404} alt="frog error 404" />
      <p className="error__message">Page not Found!</p>
      <Link to="/">
        <p className="error__back">Back to home</p>
      </Link>
    </div>
  </div>
);

export default Error404;
