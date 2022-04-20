import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { Cards, Form, Pagination } from '../../components';
import { removeEmptyFields } from '../../features/removeEmptyFields';
import { useGetCardsQuery } from '../../repositories/rim-api';
import './Search.scss';

const Search = () => {
  const stateFilters = useAppSelector((state) => state.controlApi);

  const { data, isError, isLoading } = useGetCardsQuery(removeEmptyFields(stateFilters));

  return (
    <div className="search">
      <Form />
      {isLoading && <h2 className="search__loading">Loading...</h2>}
      {isError && <h2 className="search__error">Something go wrong...</h2>}
      {!isError && !!data?.results?.length && (
        <>
          <Pagination pageLeft={data.info.prev} pageRight={data.info.next} />
          <Cards rimArray={data.results} />
        </>
      )}
    </div>
  );
};

export default Search;
