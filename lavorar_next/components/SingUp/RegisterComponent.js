import { useState } from 'react';
import { useRouter } from 'next/router';
import { getIdFromLocalCookie, getTokenFromLocalCookie, setToken } from '../../lib/auth';
import { fetcher } from '../../lib/api';
import { useFetchUser } from '../../lib/AuthContext';
import { useForm } from 'react-hook-form';
import { UseFormData } from '../../context/FormContext'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';

const RegisterComponent = ({ formStep, nextFormStep }) => {
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('Ingresa un nombre!')
            .matches(/^[a-zA-ZÀ-ÿ\s]{1,50}$/, 'Solo se permiten letras!'),
        lastName: Yup.string()
            .required('Ingresa un apellido!')
            .matches(/^[a-zA-ZÀ-ÿ\s]{1,50}$/, 'Solo se permiten letras!'),
        email: Yup.string()
            .required('Ingresa una email!')
            .email('Email invalido'),
        password: Yup.string()
            .required('Ingresa una contraseña!')
            .min(6, 'La contraseña  debe ser por lo menos de 6 characteres')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    const { setFormValues } = UseFormData()       
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;
    const onSubmit = async (values) => {
        
        const qs = require('qs');
        const query = qs.stringify({
            filters: {
                email: {
                    $eq: values.email,
                },

            }
        }, {
            encodeValuesOnly: true, // prettify URL
        });
        await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users?${query}`).then(({ data }) => {
            console.log('primer paso', data)
            if (data.length > 0) {
                alert('el email ya esta tomado')
            }
            else {
                let firstname = values.firstName.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
                let lastname = values.lastName.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
                let name = firstname + ' ' + lastname;
                values.firstName = firstname
                values.lastName = lastname
                values.name = name
                values.username = values.email
                console.log('primer paso', values)
                setFormValues(values);
                nextFormStep();
            }
        }).catch((data) => {
            console.log(data)
        })        

    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={`${formStep === 0 ? 'block' : 'hidden'}`}
        >
            <div className={'flex-col'}>
                <div className="grid grid-cols-2 gap-5  ">

                    <div className="flex flex-col ">
                        <label className="font-bold text-lg mb-1" htmlFor="firstName">
                            Nombre
                        </label>
                        <input
                            name='firstName'
                            className={` ${errors.firstName ? 'text-orange-high border-orange-high ' : 'border-gray-500 dark:border-gray-400'} border-2 py-1 px-2  rounded-md outline-none focus:border-blue-500 bg-transparent`}
                            {...register("firstName")}

                        />
                        <p className={` ${errors.firstName ? 'text-orange-high block' : 'invisible'}  `}>{errors.firstName?.message + ''}</p>

                    </div>
                    <div className="flex flex-col ">
                        <label className="font-bold text-lg mb-1" htmlFor="lastName">
                            Apellido
                        </label>
                        <input
                            name='lastName'
                            className={` ${errors.lastName ? 'text-orange-high border-orange-high ' : 'border-gray-500 dark:border-gray-400'} border-2 py-1 px-2  rounded-md outline-none focus:border-blue-500 bg-transparent`}
                            {...register("lastName")}
                        />
                        <p className={` ${errors.lastName ? 'text-orange-high block' : 'invisible'}  `}>{errors.lastName?.message + ''}</p>
                    </div>
                </div>

                <div className="flex flex-col  ">
                    <label className="font-bold text-lg mb-1" htmlFor="email">
                        Email
                    </label>
                    <input
                        className={` ${errors.email ? 'text-orange-high border-orange-high ' : 'border-gray-500 dark:border-gray-400'} border-2 py-1 px-2  rounded-md outline-none focus:border-blue-500 bg-transparent`}
                        type="email"
                        name="email"
                        {...register("email")}
                    />
                    <p className={` ${errors.email ? 'text-orange-high block' : 'invisible'} `}>{errors.email?.message + ''}</p>
                </div>

                <div className="flex flex-col mb-4 ">
                    <label className="font-bold text-lg mb-1" htmlFor="password">
                        Contraseña
                    </label>
                    <input
                        className={` ${errors.password ? 'text-orange-high border-orange-high ' : 'border-gray-500 dark:border-gray-400'} border-2 py-1 px-2  rounded-md outline-none focus:border-blue-500 bg-transparent`}
                        type="password"
                        name="password"
                        {...register("password")}
                        autoComplete='new-password'
                    />
                    <p className={` ${errors.password ? 'text-orange-high block' : 'invisible'}   `}>{errors.password?.message + ''}</p>
                </div>

                <button
                    className='block mb-6 text-gray-900 bg-orange-pastel text-lg rounded py-2.5 w-full'
                    type="submit"
                >
                    Siguiente
                </button>
            </div>
        </form>
    );
};

export default RegisterComponent;