import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import KEY_CODES from '../../shared/constants/key-codes';
import { PATHS } from '../../shared/constants/routes';
import './Input.scss';

const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onKeyDown = async (e: { keyCode: number }) => {
    if (e.keyCode === KEY_CODES.enter) sendRequest(inputValue);
  };

  const sendRequest = (value: string) => navigate(`${PATHS.search}/?name=${value}`);

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
          sendRequest(inputValue);
        }}
      />
    </div>
  );
};

export default Input;
