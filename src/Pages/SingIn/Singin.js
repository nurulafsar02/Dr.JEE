import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login-singin side img.png';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Singin = () => {
    const { register, formState: { errors }, handleSubmit } = useForm({
        mode: 'onChange'
    });
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('')

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleSingin = (data, event) => {
        console.log(data);
        event.target.reset(); // reset after form submit


        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.');
                const userInfo = {
                    displayName: data.name
                }

                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate(from, {replace: true});

            })
    }

    return (
        <div className='h-[450px] mt-10 ml-12 lg:ml-0  lg:mb-28 mb-[500px]  grid lg:grid-cols-2 grid-cols-1 '>
            <div className='w-96 lg:ml-52 px-8 pb-8 m-0  shadow-2xl rounded-2xl'>
                <h2 className='text-2xl font-bold my-5 text-center'>Singin</h2>
                <form onSubmit={handleSubmit(handleSingin)}>
                    <div className="form-control w-full max-w-xs">

                        <select {...register("gender")}>
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="other">other</option>
                        </select>
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text"
                            {...register("name")}
                            className="input input-bordered w-full mb-1 " />

                        <label className="label"><span className="label-text">Email</span></label>

                        <input type="email"
                            {...register("email",
                                { required: "Email Address is required" })}
                            className="input input-bordered w-full mb-1 " />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'password must be 6 characters or longer' },
                                    pattern: {
                                        value: /(?=.*[A-Z]){8}/,
                                        message: 'password criteria: Ensure string has one uppercase letters,Ensure string is of length 8'
                                    }
                                })}
                            className="input input-bordered w-full mb-1 " />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn bg-gradient-to-r from-cyan-500 to-green-400 hover:from-green-500 hover:to-pink-500 w-full mt-5' value='Sing in' type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p className='my-2'>Have an account: <Link to='/login' className='text-green-500 '>Stay login here</Link> </p>
                <div className='divider' >OR</div>
                <button className='btn  btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
            <div>
                <img src={loginImg} className='h-[450px]  mt-12 ' alt="" />
            </div>
        </div>
    );
}
export default Singin;