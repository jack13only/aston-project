import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../shared/constants/routes';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <Link to={PATHS.main} className="header__link">
        <h1 className="header__title">Rick and Morty</h1>
      </Link>
      {/* <h1 className="header__title">Rick and Morty</h1> */}
    </div>
  );
};

export default Header;
