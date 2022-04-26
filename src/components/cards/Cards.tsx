import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '..';
import { RiMObject } from '../../shared/constants/api-urls';
import { PATHS } from '../../shared/constants/routes';
import './Cards.scss';

type IProps = {
  rimArray: Array<RiMObject>;
};

const Cards = (props: IProps): JSX.Element => {
  return (
    <div className="cards-container">
      {props.rimArray.map((item: RiMObject) => (
        <Link to={`${PATHS.search}/${item.id}`} className="cardLink" key={item.id}>
          <Card id={item.id} name={item.name} image={item.image} />
        </Link>
      ))}
    </div>
  );
};

export default Cards;
