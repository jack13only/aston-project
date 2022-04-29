import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { Cards } from '../../components';
import { useGetMultipleCardsByIdsQuery } from '../../repositories/rim-api';
import './Favourites.scss';

const Favourites = (): JSX.Element => {
  const favourites = useAppSelector((state) => state.authStorage.user.favourites);

  const { data, isError, isLoading } = useGetMultipleCardsByIdsQuery(favourites);

  return (
    <div className="favourites">
      <h2 className="favourites__title">Favourites cards:</h2>
      {isLoading && <h2 className="favourites__loading">Loading...</h2>}
      {isError && <h2 className="favourites__error">Something go wrong...</h2>}
      {!isError && !!data?.length && (
        <>
          <Cards rimArray={data} />
        </>
      )}
      {!isError && !data && <h2 className="favourites__title">No data...</h2>}
    </div>
  );
};

export default Favourites;
