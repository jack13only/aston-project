/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './Pagination.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { changeAllFilters, pageDown, pageUp } from '../../reducers/control-api';
import { createSearchParams, useSearchParams } from 'react-router-dom';
import { formHelpers, FormValues } from '../../shared/constants/form';
import { removeEmptyFields } from '../../features/removeEmptyFields';

type Pagination = {
  pageLeft: string | null;
  pageRight: string | null;
};

const Pagination = ({ pageLeft, pageRight }: Pagination): JSX.Element => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { createParams } = formHelpers;
  const page = useAppSelector((state) => state.controlApi.page);

  const createSetParams = (obj: FormValues) => {
    const newParams = createSearchParams(removeEmptyFields(obj));
    setSearchParams(newParams);
  };

  useEffect(() => {
    const newObj = createParams(searchParams, false);
    newObj.page = `${page}`;
    createSetParams(newObj);
    dispatch(changeAllFilters(newObj));
  }, [page]);

  return (
    <>
      {pageLeft && (
        <div className="page-left" role="button" onClick={() => dispatch(pageDown())}>
          &lt; <span className="page-title">left</span>
        </div>
      )}
      {pageRight && (
        <div className="page-right" role="button" onClick={() => dispatch(pageUp())}>
          <span className="page-title">right</span> &gt;
        </div>
      )}
    </>
  );
};

export default Pagination;
