import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login-singin side img.png';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Login = () => {
    
    const { register, formState: { errors }, handleSubmit } = useForm({
        mode: 'onChange',
    });
    
    const { signIn ,loading} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
   
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    if(loading){
        return <progress className="lg:mx-[500px] m-32 lg:my-[250px] progress w-56"></progress>
       }
    const handleLogin = (data, event) => {
        console.log(data);
        event.target.reset(); // reset after form submit
        
      setLoginError('');
      signIn(data.email, data.password)
      .then(result => {
          const user = result.user;
          console.log(user);
          navigate(from, {replace: true});
      })
      .catch(error => {
          console.log(error.message)
          setLoginError(error.message);
      });
      

    }
    return (
        <div className='h-[450px] mt-10 ml-12 lg:ml-0  lg:mb-20 mb-[500px]  grid lg:grid-cols-2 grid-cols-1 '>
            <div className='w-96 lg:ml-52 px-8 pb-8 m-0  shadow-2xl rounded-2xl'>
                <h2 className='text-2xl font-bold my-5 text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full mb-1 " />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, massage: 'password must be 6 characters or longer' }

                                })}
                            className="input input-bordered w-full mb-1 " />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn bg-gradient-to-r from-cyan-500 to-green-400 hover:from-green-500 hover:to-pink-500 w-full mt-5' value='login' type="submit" />
                    <div>
                        {
                            loginError && <p className='text-red-500'>{loginError}</p>
                        }
                    </div>
                </form>
                <p className='my-2'>Forget pssword: <Link to='' className='text-green-500 '> Reset Password</Link> </p>
                <p className='my-2'>New to here: <Link to='/singin' className='text-green-500 '>Create New account</Link> </p>
                <div className='divider' >OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
            <div>
                <img src={loginImg} className=' h-[450px] mt-12 ' alt="" />
            </div>
        </div>
    );
};

export default Login;