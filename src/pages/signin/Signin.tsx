import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { checkNameAvailable, loadUser, checkPass } from '../../features/ls-load-save';
import { login } from '../../reducers/auth';
import { PATHS } from '../../shared/constants/routes';
import './Signin.scss';

export type SignInValues = {
  name: string;
  password: string;
};

const Signin = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<SignInValues>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: { name: '', password: '' },
  });

  const name = useRef({});
  name.current = watch('name', '');

  const registeredNames = useAppSelector((state) => state.localStorageUse);

  const onSubmit = (data: SignInValues) => {
    const user = loadUser(data.name, data.password);
    dispatch(login(user));
    reset();
    navigate(PATHS.main);
  };

  return (
    <form className="signin" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__title">Sign In</div>
      <label className="form__nickname" title="Only numbers and english letters">
        <span className="form__label-tittle">Nickname:</span>
        <input
          className="signin__name"
          {...register('name', {
            required: 'Empty name',
            validate: {
              nameAvailable: (v) =>
                !checkNameAvailable(v, registeredNames) || 'User does not exist',
            },
          })}
          placeholder="Enter your nickname"
        />
        {errors.name && <div className="form__error">{errors.name.message}</div>}
      </label>

      <label className="form__password">
        <span className="form__label-tittle">Password:</span>
        <input
          className="signin__password"
          type="password"
          {...register('password', {
            required: 'Empty password',
            validate: {
              checkName: () => !errors.name || 'User does not exist',
              checkPass: (v) => checkPass(name.current.toString(), v) || 'Wrong password',
            },
          })}
          placeholder="Enter your password"
        />
        {errors.password && <div className="form__error">{errors.password.message}</div>}
      </label>
      <input type="submit" value="Sign In" className="form__submit" />
    </form>
  );
};

export default Signin;
