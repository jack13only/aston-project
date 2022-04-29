import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setName } from '../../reducers/locastorage-slice';
import { login } from '../../reducers/auth';
import { checkNameAvailable, loadUser, saveNewUser } from '../../features/ls-load-save';
import './Signup.scss';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../shared/constants/routes';

export type SignUpValues = {
  name: string;
  password: string;
  repeatPassword: string;
};

const Signup = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<SignUpValues>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: { name: '', password: '', repeatPassword: '' },
  });

  const password = useRef({});
  password.current = watch('password', '');

  const registeredNames = useAppSelector((state) => state.localStorageUse);

  const onSubmit = (data: SignUpValues) => {
    dispatch(setName(data.name));
    saveNewUser(data.name, data.password, [], []);
    const user = loadUser(data.name, data.password);
    dispatch(login(user));
    reset();
    navigate(PATHS.main);
  };

  return (
    <form className="signup" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__title">Sign Up</div>
      <label className="form__nickname" title="Only numbers and english letters">
        <span className="form__label-tittle">Nickname:</span>
        <input
          className="signup__name"
          {...register('name', {
            required: 'Empty name',
            pattern: {
              value: /^[A-Za-z0-9]+$/i,
              message: 'Only numbers and english letters!',
            },
            validate: {
              nameAvailable: (v) =>
                checkNameAvailable(v, registeredNames) || 'This name already exists',
              nameLength: (v) => v.length > 3 || 'Name can not be less than 4 letters',
            },
          })}
          placeholder="Enter your nickname"
        />
        {errors.name && <div className="form__error">{errors.name.message}</div>}
      </label>

      <label className="form__password">
        <span className="form__label-tittle">Password:</span>
        <input
          className="signup__password"
          type="password"
          {...register('password', {
            required: 'Empty password',
            validate: {
              passLength: (v) => v.length > 3 || 'Password can not be less than 4 letters',
            },
          })}
          placeholder="Enter your password"
        />
        {errors.password && <div className="form__error">{errors.password.message}</div>}
      </label>

      <label className="form__password">
        <span className="form__label-tittle">Repeat password:</span>
        <input
          className="signup__password"
          type="password"
          {...register('repeatPassword', {
            required: 'Empty password',
            validate: {
              passLength: (v) => v.length > 3 || 'Password can not be less than 4 letters',
              passRepeat: (v) => v === password.current || 'The passwords do not match',
            },
          })}
          placeholder="Repeat your password"
        />
        {errors.repeatPassword && (
          <div className="form__error">{errors.repeatPassword.message}</div>
        )}
      </label>
      <input type="submit" value="Sign Up" className="form__submit" />
    </form>
  );
};

export default Signup;
