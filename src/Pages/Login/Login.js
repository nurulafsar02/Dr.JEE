import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login-singin side img.png';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data);
    }
    return (
        <div className='h-[450px] mt-10 mb-20 grid lg:grid-cols-2 grid-cols-1 '>
            <div className='w-96 lg:ml-52 px-8 pb-8 m-0 shadow-2xl rounded-2xl'>
                <h2 className='text-2xl font-bold my-5 text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email")} className="input input-bordered w-full " required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password")} className="input input-bordered w-full " required />
                    </div>
                    <input className='btn bg-gradient-to-r from-cyan-500 to-green-400 hover:from-green-500 hover:to-pink-500 w-full mt-5' value='login' type="submit" />
                </form>
                <p className='my-2'>New to here <Link to='/singin' className='text-green-500 '>Create New account</Link> </p>
                <div className='divider' >OR</div>
                <button className='btn btn-outline w-full'>CONTINEW WITH GOOGLE</button>
            </div>
            <div>
                <img src={loginImg} className='h-[450px]' alt="" />
            </div>
        </div>
    );
};

export default Login;