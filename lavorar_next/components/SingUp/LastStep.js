import React, { useState } from 'react'

import { useForm } from 'react-hook-form';
import { useFormData } from '../../context/FormContext'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { fetcher } from '../../lib/api';
import { setToken } from '../../lib/auth';

const lastStep = ({ formStep, nextFormStep }) => {
    const validationSchema = Yup.object().shape({
        aboutme: Yup.string()
            .required('Ingresa una descripcion sobre vos!')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    const { setFormValues } = useFormData();

    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;


    const { data } = useFormData();

    const onSubmit = async (values) => {
        setFormValues(values);
        nextFormStep();      
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={`${formStep === 3 ? 'block' : 'hidden'}`}
        >
            <div className={'flex-col'}>

                <div className="flex flex-col ">
                    <label className="font-bold text-lg mb-2" htmlFor="email">
                        Sobre mi
                    </label>
                    <input
                        className={` ${errors.aboutme ? 'text-orange-high border-orange-high ' : 'border-gray-500 dark:border-gray-400'} border-2 py-1 px-2 rounded-md outline-none focus:border-blue-500 bg-transparent`}
                        type="aboutme"
                        name="aboutme"
                        {...register("aboutme")}
                    />
                    <p className={` ${errors.aboutme ? 'text-orange-high block' : 'invisible'}  `}>{errors.aboutme?.message + ''}</p>
                </div>


                <button
                    className='block mb-6 text-gray-900 bg-orange-pastel text-lg rounded py-2.5 w-full'
                    type="submit"
                >
                    Registrarse
                </button>
            </div>
        </form>
    )
}


export default lastStep