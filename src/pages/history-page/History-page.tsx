import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { removeHistory } from '../../reducers/auth';
import { HistoryCard } from '../../components';
import './History-page.scss';

const HistoryPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.authStorage.user);
  return (
    <div className="history">
      <h2 className="history-title">History:</h2>
      <div role="button" className="remove_all" onClick={() => dispatch(removeHistory())}>
        Remove ALL
      </div>

      <div className="history-card">
        <div className="history-card__field-title">Index:</div>
        <div className="history-card__field-title">Name:</div>
        <div className="history-card__field-title">Status:</div>
        <div className="history-card__field-title">Gender:</div>
        <div className="history-card__field-title">Species:</div>
      </div>

      {user.history.map((item, index) => (
        <HistoryCard key={index} card={item} index={index + 1} />
      ))}
    </div>
  );
};

export default HistoryPage;
