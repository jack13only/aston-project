import React from 'react';
import { FormValues } from '../../shared/constants/form';
import './History-card.scss';

type Props = {
  card: FormValues;
  index: number;
};

const HistoryCard = ({ card, index }: Props): JSX.Element => {
  const { name, status, gender, species } = card;

  return (
    <div className="history-card">
      <div className="history-card__index">
        &nbsp;&nbsp;&nbsp;&nbsp;<span>{index}</span>
      </div>
      <div className="history-card__field">
        <span>{name}</span>
      </div>
      <div className="history-card__field">
        <span>{status}</span>
      </div>
      <div className="history-card__field">
        <span>{gender}</span>
      </div>
      <div className="history-card__field">
        <span>{species}</span>
      </div>
    </div>
  );
};

export default HistoryCard;
