import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ContextFavouritePage } from '../../context/context';
import { logout } from '../../reducers/auth';
import { PATHS } from '../../shared/constants/routes';
import './Header.scss';

const Header = (): JSX.Element => {
  const { isAuthenticated, user } = useAppSelector((state) => state.authStorage);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const value = useContext(ContextFavouritePage);

  return (
    <div className="header">
      <Link to={PATHS.main} className="header__link">
        <h1 className="header__title">
          <span className="header__title-small">RiM</span>
          <span className="header__title-big">Rick and Morty</span>
        </h1>
      </Link>

      {isAuthenticated && (
        <div className="user-header">
          <Link to={PATHS.search} className="user-name">
            {user.name}
          </Link>
          <div className="user-preferences">
            <Link to={PATHS.favourites} className="user-favourites">
              Favourites ({value})
            </Link>
            <Link to={PATHS.history} className="user-history">
              History
            </Link>
            <div
              role="button"
              className="user-sign-out"
              onClick={() => {
                dispatch(logout());
                navigate(PATHS.main);
              }}
            >
              Sign Out
            </div>
          </div>
        </div>
      )}

      {!isAuthenticated && (
        <div className="sign-header">
          <Link to={PATHS.signin} className="sign-link-wrapper">
            <div className="signin-link">Sign In</div>
          </Link>
          <Link to={PATHS.signup} className="sign-link-wrapper">
            <div className="signup-link">Sign Up</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
