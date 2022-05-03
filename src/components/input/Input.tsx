import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { addHistory } from '../../reducers/auth';
import KEY_CODES from '../../shared/constants/key-codes';
import { PATHS } from '../../shared/constants/routes';
import { defaultFiltersValues } from '../../shared/constants/form';
import './Input.scss';
import useInput from '../../customHooks/useInput';

const Input = (): JSX.Element => {
  const input = useInput('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onKeyDown = (e: { keyCode: number }) => {
    if (e.keyCode === KEY_CODES.enter) navitgateTo(input.value);
  };

  const navitgateTo = (value: string) => {
    dispatch(addHistory({ ...defaultFiltersValues, name: value }));
    navigate(`${PATHS.search}/?name=${value}`);
  };

  return (
    <div className="input-wrapper">
      <input className="input-wrapper__input" type="text" {...input} onKeyDown={onKeyDown} />
      <button
        className="input-wrapper__button"
        onClick={() => {
          navitgateTo(input.value);
        }}
      />
    </div>
  );
};

export default Input;
