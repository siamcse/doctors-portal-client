import React, { useContext } from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))
    }
    return (
        <div className='flex flex-col items-center min-h-screen justify-center gap-2'>
            <h1 className='text-4xl'>Oops!</h1>
            <p>Sorry, an unexpected error has occured.</p>
            <p className='text-red-600'>{error.statusText || error.message}</p>
            <h2 className='text-2xl'>Please <button className='btn btn-ghost' onClick={handleLogOut}><Link to='/'>Sign Out</Link></button> and Login Again</h2>
        </div>
    );
};

export default DisplayError;