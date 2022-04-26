import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createSearchParams, useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import { useAppDispatch } from '../../app/hooks';
import { changeAllFilters, pageFirst } from '../../features/control-api';
import { formHelpers, FormValues } from '../../shared/constants/form';
import { removeEmptyFields } from '../../features/removeEmptyFields';
import './Form.scss';

const Form = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: { name: searchParams.get('name') ?? '' },
  });
  const [hideFilters, setHideFilters] = useState(false);

  const { STATUS, GENDER, SPECIES, defaultFiltersValues, createNewParams } = formHelpers;

  const createSetParams = (obj: FormValues) => {
    const newParams = createSearchParams(removeEmptyFields(obj));
    setSearchParams(newParams);
  };

  useEffect(() => {
    const newObj = createNewParams(searchParams, hideFilters);

    createSetParams(newObj);
    dispatch(changeAllFilters(newObj));
  }, [hideFilters, searchParams]);

  const onSubmit = (data: FormValues) => {
    dispatch(pageFirst());
    const newObj = { ...defaultFiltersValues, ...data };
    createSetParams(newObj);
  };

  const filtersClass = classNames('form__bottom', {
    hideFilters: hideFilters,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form__top">
        <label className="form__label-name">
          <div className="form__label-title">Name:</div>
          <input {...register('name')} className="form__input-name" />
        </label>
        <input type="submit" value="Submit" className="form__submit" />
        <input
          type="reset"
          value="Reset"
          className="form__reset"
          onClick={() => {
            reset();
            handleSubmit(onSubmit)();
          }}
        />
        <input
          type="button"
          onClick={() => {
            setHideFilters(!hideFilters);
            reset({
              gender: GENDER[0],
              status: STATUS[0],
              species: SPECIES[0],
            });
          }}
          className="form__hide-filters"
          value={hideFilters ? 'Show filters' : 'Hide filters'}
        />
      </div>
      <div className={filtersClass}>
        <label className="form__label-status">
          <div className="form__label-title">Status:</div>
          <select {...register('status')} className="form__select-status">
            {STATUS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="form__label-gender">
          <div className="form__label-title">Gender:</div>
          <select {...register('gender')} className="form__select-gender">
            {GENDER.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="form__label-species">
          <div className="form__label-title">Species:</div>
          <select {...register('species')} className="form__select-species">
            {SPECIES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>
    </form>
  );
};

export default Form;
