import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import classNames from 'classnames';
import { saveUserData } from '../../features/ls-load-save';
import { addFavourite, removeFavourite } from '../../reducers/auth';
import './Card.scss';

type IProps = {
  id: number;
  image: string;
  name: string;
};

const Card = ({ id, image, name }: IProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, user } = useAppSelector((state) => state.authStorage);

  const isAvailableInFavourite = user.favourites.includes(id);

  const manageFavourites = (favouriteState: boolean, id: number) =>
    dispatch(favouriteState ? removeFavourite(id) : addFavourite(id));

  const likeClass = classNames('card__like', {
    like: isAvailableInFavourite,
    unlike: !isAvailableInFavourite,
  });

  useEffect(() => {
    saveUserData(user);
  }, [user]);

  return (
    <div className="card">
      <h3 className="card__header">{name}</h3>
      <hr className="card__divider" />
      <div className="card__pic-wrap">
        <img className="card__pic" src={image} alt={name} />
      </div>
      {isAuthenticated && (
        <div
          role="button"
          className={likeClass}
          onClick={(e) => {
            manageFavourites(isAvailableInFavourite, id);
            e.preventDefault();
          }}
        ></div>
      )}
    </div>
  );
};

export default Card;
