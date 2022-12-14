import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, popUpSignIn, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');

    const [createUserEmail, setCreateUserEmail] = useState('');
    const [token] = useToken(createUserEmail);

    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate('/');
    }

    const handleSignUp = (data, e) => {
        setSignUpError('');
        console.log(data);
        //create user
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Successfully sign up!');
                e.target.reset();

                //update user
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        //save user to database
                        saveUser(data.name, data.email);
                    })
                    .catch(e => console.error(e))
            })
            .catch(e => {
                console.error(e);
                setSignUpError(e.message);
            })
    }

    const handleGoogleSignIn = () => {
        popUpSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                saveUser(user.displayName, user.email);
                // navigate(from, { replace: true });
            })
            .catch(e => {
                console.error(e);
                setSignUpError(e.message);
            })
    }
    //save user to database
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
                setCreateUserEmail(email);
            })
    }


    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='shadow-xl w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>

                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-md mb-3">
                        <label className="label"><span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: 'Name is required' })} className="input input-bordered w-full max-w-md" />
                        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-md mb-3">
                        <label className="label"><span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: 'Email is required' })} className="input input-bordered w-full max-w-md" />
                        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-md mb-6">
                        <label className="label"><span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: 'Password is required', minLength: { value: 6, message: 'Password must be 6 characters or long' }
                        })} className="input input-bordered w-full max-w-md" />
                        {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                        {signUpError && <p className="text-red-600">{signUpError}</p>}
                    </div>
                    <input className='btn btn-accent w-full text-white' value='Sign Up' type="submit" />
                </form>
                <p className='text-center mt-3'>Already have an account? <Link className='text-secondary' to='/login'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;