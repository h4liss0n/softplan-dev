import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../../Components/Loading/Loading';
import { PErro } from '../../Components/PErro/PErro';
import img from '../../img/login.png';
import RouterHistory from '../../Service/History';
import { ApplicationState } from '../../Store';
import * as Action from '../../Store/Auth/Action';
import './Login.css';

interface IProps {}

type FormValues = {
  email: string;
  password: string;
  prevPath: string;
};

const Login: React.FC<IProps> = (props) => {
  const store = useSelector((store: ApplicationState) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    if (store.auth.isAuthenticated) {
      RouterHistory.push('/home');
    }

    setValue('email', 'halisson@gmail.com');
    setValue('password', '123');



    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const [isLoading, setisLoading] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setisLoading(true);
      dispatch(
        Action.RequestLogin({
          email: data.email,
          password: data.password,
          prevPath: data.prevPath,
        })
      );
    } finally {
      setisLoading(false);
    }
  });

  return (
    <div className="container-login">
      <Loading isloading={isLoading} />
      <div className="whapper-login">
        <div className="flex-center">
          <h1>Hello!</h1>
          <h1>Enter your email or username</h1>
          <img className="img-login" src={img} alt="" />
        </div>
        <form data-testid="frm-login" action="submit" className="login-form box-form" onSubmit={onSubmit}  noValidate>
          <section className="login-input">
            <label>E-mail</label>
            <input data-testid="email" type="email" className="input-test" {...register('email', { required: 'E-mail! is required' })} />
            {errors?.email && <PErro>{errors.email.message}</PErro>}
          </section>

          <section className="login-input">
            <label>Password</label>
            <input data-testid="password" type="password" className="input-test" {...register('password', { required: 'password is required!' })} />
            {errors?.password && <PErro>{errors.password.message}</PErro>}
          </section>

          <button data-testid="btn-login" className="btn-salvar" type="submit">
            Join
          </button>
        </form>
      </div>
    </div>
  );
};

export { Login };

