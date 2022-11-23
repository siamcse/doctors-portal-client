import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState('');
    const { signIn, popUpSignIn, passwordReset } = useContext(AuthContext);

    //token verify
    const [loginEmail, setLoginEmail] = useState('');
    const [token] = useToken(loginEmail);

    const resetPassword = useRef(''); // for reset password

    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        //sign in function
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                //set email for token verify
                setLoginEmail(user.email);

            })
            .catch(e => {
                console.error(e.message);
                setLoginError(e.message);
            })
    }

    const handleGoogleSignIn = () => {
        popUpSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                saveUser(user.displayName, user.email);
            })
            .catch(e => {
                console.error(e);
                setLoginError(e.message);
            })
    }
    //save user to database for google sign in
    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('https://doctors-portal-server-sigma-seven.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                //set email for token verify
                setLoginEmail(email);
            })
    }

    const handleResetPassword = () => {
        const email = resetPassword.current.value;
        console.log('reset email:', email);
        passwordReset(email)
            .then(() => {
                toast.success('Password reset link sent to your email address.');
            })
            .catch(e => toast.error(e.message))
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
                                minLength: { value: 6, message: 'Password must be 6 characters or long.' }
                            }

                        )} className="input input-bordered w-full max-w-md" />

                        <label htmlFor="reset-modal" className="cursor-pointer label-text text-xs">Forget Password?</label>

                        {errors.password && <p className='text-red-600 text-sm'>{errors.password?.message}</p>}
                        {loginError && <p className='text-red-600 text-sm'>{loginError}</p>}
                    </div>
                    <input className='btn btn-accent w-full text-white' value='Login' type="submit" />

                </form>
                <p className='text-center mt-3'>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
            </div>

            {/* password reset modal  */}
            <input type="checkbox" id="reset-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="reset-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Reset your Password?</h3>
                    <p className="py-4">Enter your email</p>
                    <input ref={resetPassword} type="email" className='input input-bordered w-full max-w-xs' required /> <br />
                    <div onClick={handleResetPassword} className='text-center'>
                        <label htmlFor="reset-modal" className="btn mt-2">Submit</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;