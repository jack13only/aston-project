import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { addHistory } from '../../reducers/auth';
import KEY_CODES from '../../shared/constants/key-codes';
import { PATHS } from '../../shared/constants/routes';
import { defaultFiltersValues } from '../../shared/constants/form';
import './Input.scss';

const Input = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onKeyDown = (e: { keyCode: number }) => {
    if (e.keyCode === KEY_CODES.enter) navitgateTo(inputValue);
  };

  const navitgateTo = (value: string) => {
    dispatch(addHistory({ ...defaultFiltersValues, name: value }));
    navigate(`${PATHS.search}/?name=${value}`);
  };

  return (
    <div className="input-wrapper">
      <input
        className="input-wrapper__input"
        type="text"
        value={inputValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button
        className="input-wrapper__button"
        onClick={() => {
          navitgateTo(inputValue);
        }}
      />
    </div>
  );
};

export default Input;
