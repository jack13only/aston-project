import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createSearchParams, useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import { useAppDispatch } from '../../app/hooks';
import { changeName, changeStatus, changeGender, changeSpecies } from '../../features/control-api';
import { STATUS, GENDER, SPECIES } from '../../shared/constants/form';
import './Form.scss';
import { removeEmptyFields } from '../../features/removeEmptyFields';

type FormValues = {
  name: string;
  status: string;
  gender: string;
  species: string;
};

// interface dataForFilter {
//   name: string;
//   status: string;
//   gender: string;
//   species: string;
// }

// const paramsNames: ('name' | 'status' | 'gender' | 'species')[] = [
//   'name',
//   'status',
//   'gender',
//   'species',
// ];

// changeName, changeStatus, changeGender, changeSpecies

const Form = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [hideFilters, setHideFilters] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(changeName(searchParams.get('name') || ''));
    if (!hideFilters) {
      dispatch(changeStatus(searchParams.get('status') || ''));
      dispatch(changeGender(searchParams.get('gender') || ''));
      dispatch(changeSpecies(searchParams.get('species') || ''));
    }
  }, [dispatch, hideFilters, searchParams]);

  // createSearchParams()
  // const query = useQuery();
  // const [searchParams, setSearchParams] = useSearchParams();

  // const a = () => {
  //   let dataForFilters = {};
  //   paramsNames.forEach((item: string) => {
  //     console.log(item);
  //     if (searchParams.has(item)) {
  //       console.log(1);
  //       dataForFilters = { ...dataForFilters, ...{ [item]: searchParams.get(item) } };
  //     }
  //   });
  //   console.log(dataForFilters);
  //   return dataForFilters;
  // };

  // const [query, setQuery] = useState(a());

  // useEffect(() => {
  //   let params = serializeFormQuery(event.target);
  //   setSearchParams({ getValues(paramsNames) });
  //   dispatch(changeFilters({ query }));
  // }, [query]);

  const onSubmit = (data: FormValues) => {
    const newSearchParams = createSearchParams(removeEmptyFields(data));
    // if (data.name === undefined) return;
    // setSearchParams(data);
    // const q = searchParams.get('name') as string;
    // console.log(query);
    // setSearchParams({ name: query });
    // console.log(searchParams);
    // const dataForFilter: FormValues = hideFilters
    //   ? { name: data.name }
    //   : Object.fromEntries(Object.entries(data).filter((item) => item[1]));
    // dispatch(changeFilters(dataForFilter));

    // let dataForFilters: FormValues = {};
    // paramsNames.forEach((item: string) => {
    //   if (query.has(item)) dataForFilters = { ...dataForFilters, ...{ [item]: query.get(item) } };
    // });
    // console.log(dataForFilters);
    // dispatch(changeFilters({ name: query }));
    // dispatch(changeFilters(query));
    setSearchParams(newSearchParams);
  };

  // const onChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   console.log(e);
  // };

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
          }}
        />
        <button onClick={() => setHideFilters(!hideFilters)} className="form__hide-filters">
          {hideFilters ? 'Show' : 'Hide'} filters
        </button>
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
