import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetCardByIdQuery } from '../../repositories/rim-api';
import './Card-id.scss';

const CardId = (): JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isError, isLoading } = useGetCardByIdQuery(id);

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
        </div>
      )}
      <button onClick={() => navigate(-1)}>go home</button>
    </>
  );
};

export default CardId;
