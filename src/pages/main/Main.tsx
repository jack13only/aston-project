import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { Cards, Form } from '../../components';
import { removeEmptyFields } from '../../features/removeEmptyFields';
import { useGetCardsQuery } from '../../repositories/rim-api';
import './Main.scss';

const Main = () => {
  const stateFilters = useAppSelector((state) => state.controlApi);

  const { data, isError, isLoading } = useGetCardsQuery(removeEmptyFields(stateFilters));

  return (
    <div className="main">
      {/* <Input /> */}
      <Form />
      {isLoading && <h2 className="main__loading">Loading...</h2>}
      {isError && <h2 className="main__error">Something go wrong...</h2>}
      {!isError && !!data?.results?.length && <Cards rimArray={data.results} />}
    </div>
  );
};

export default Main;
