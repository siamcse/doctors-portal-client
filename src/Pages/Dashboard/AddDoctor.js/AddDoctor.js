import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-sigma-seven.vercel.app/appointmentName');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data => {
        const imageHashKey = process.env.REACT_APP_imagebb_key;

        const formData = new FormData();
        formData.append('image', data.img[0]);
        const url = `https://api.imgbb.com/1/upload?key=${imageHashKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    //save doctor data to database
                    fetch('https://doctors-portal-server-sigma-seven.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.acknowledged) {
                                toast.success('Doctors added');
                                navigate('/dashboard/managedoctors');
                            }
                        })
                }
            })

    }
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='shadow-xl w-96 p-7'>
            <h2 className='text-2xl'>Add Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
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
                    <label className="label"><span className="label-text">Specialty</span>
                    </label>
                    <select
                        {...register('specialty')}
                        className="select select-bordered w-full max-w-xs">
                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                            >{specialty.name}</option>)
                        }
                    </select>
                </div>
                <div className="form-control w-full max-w-md mb-3">
                    <label className="label"><span className="label-text">Photo</span>
                    </label>
                    <input type="file" {...register("img", { required: 'Image is required' })} className="input input-bordered w-full max-w-md" />
                    {errors.img && <p className="text-red-600">{errors.img.message}</p>}
                </div>
                <input className='btn btn-accent w-full text-white' value='Sign Up' type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;