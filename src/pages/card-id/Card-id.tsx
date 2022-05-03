import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import classNames from 'classnames';
import { useGetCardByIdQuery } from '../../repositories/rim-api';
import { addFavourite, removeFavourite } from '../../reducers/auth';
import './Card-id.scss';

const CardId = (): JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuthenticated, user } = useAppSelector((state) => state.authStorage);

  const checkedId = +(id ?? 0);

  const { data, isError, isLoading } = useGetCardByIdQuery(id);

  const manageFavourites = (favouriteState: boolean, id: number) =>
    dispatch(favouriteState ? removeFavourite(id) : addFavourite(id));

  const isAvailableInFavourite = user.favourites.includes(checkedId);

  const likeClass = classNames('card__like', {
    like: isAvailableInFavourite,
    unlike: !isAvailableInFavourite,
  });

  return (
    <>
      {isLoading && <h2 className="main__loading">Loading...</h2>}
      {isError && <h2 className="main__error">Something go wrong...</h2>}
      {!isError && data && (
        <div className="card_modal">
          <div className="card_modal__header">
            <h3 className="card_modal__header-title">{data.name}</h3>
          </div>

          <div className="card_modal__pic-wrap">
            <img className="card_modal__pic" src={data.image} alt={data.name} />
            {isAuthenticated && (
              <div
                role="button"
                className={likeClass}
                onClick={(e) => {
                  manageFavourites(isAvailableInFavourite, checkedId);
                  e.preventDefault();
                }}
              ></div>
            )}
          </div>

          <div className="card_modal__description">
            <div className="card_modal__status">
              <h5 className="card_modal__small-header">STATUS: </h5>
              <span>{data.status}</span>
            </div>
            <div className="card_modal__species">
              <h5 className="card_modal__small-header">SPECIES: </h5>
              <span>{data.species}</span>
            </div>
            <div className="card_modal__location">
              <h5 className="card_modal__small-header">ORIGIN: </h5>
              <span>{data.origin.name}</span>
            </div>
            <div className="card_modal__location">
              <h5 className="card_modal__small-header">LOCATION: </h5>
              <span>{data.location.name}</span>
            </div>
            <div className="card_modal__created">
              <h5 className="card_modal__small-header">CREATION DATE: </h5>
              <span>{data.created}</span>
            </div>
          </div>
          <div className="card_modal__button-back-wrap">
            <button className="card_modal__button-back" onClick={() => navigate(-1)}>
              Go back
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CardId;
