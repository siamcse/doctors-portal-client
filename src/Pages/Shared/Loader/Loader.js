import React from 'react';
import { SyncLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <SyncLoader color="#36d7b7" />
        </div>
    );
};

export default Loader;