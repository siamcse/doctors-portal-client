import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = data => {
        console.log(data);
    }
    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='shadow-xl w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control w-full max-w-md mb-3">
                        <label className="label"><span className="label-text">Email</span>
                        </label>
                        <input type="text"
                            {...register("email",
                                { required: 'Email is required' }
                            )}
                            className="input input-bordered w-full max-w-md" />
                        {errors.email && <p className='text-red-600 text-sm'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-md mb-6">
                        <label className="label"><span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password",
                            {
                                required: 'Password is required',
                                minLength: {value:6, message: 'Password must be 6 characters or long.'}
                            }

                        )} className="input input-bordered w-full max-w-md" />
                        <label className="label"><span className="label-text text-xs">Forgot Password?</span>
                        </label>
                        {errors.password && <p className='text-red-600 text-sm'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full text-white' value='Login' type="submit" />
                </form>
                <p className='text-center mt-3'>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;