import React from 'react';
import './Card.scss';

type IProps = {
  id: number;
  image: string;
  name: string;
};

const Card = (props: IProps): JSX.Element => {
  return (
    <>
      <div className="card">
        <h3 className="card__header">{props.name}</h3>
        <hr className="card__divider" />
        <div className="card__pic-wrap">
          <img className="card__pic" src={props.image} alt={props.name} />
        </div>
      </div>
    </>
  );
};

export default Card;
