import React, { useState } from 'react'
import Image from 'next/image'
import { useForm, Controller } from 'react-hook-form';
import { UseFormData } from '../../context/FormContext'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';


const LastStep = ({ formStep, nextFormStep }) => {
    const validationSchema = Yup.object().shape({
        description: Yup.string()
            .required('Ingresa una descripcion corta sobre vos!')
            .max(2000, 'Limite execedido (2000)'),
        aboutme: Yup.string()
            .required('Ingresa una descripcion sobre vos!')
            .max(100, 'Limite execedido (100)'),

    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    const { setFormValues } = UseFormData();

    const { register, handleSubmit, control, formState } = useForm(formOptions);
    const { errors } = formState;
   
   
    const onSubmit = async (values) => {

        
        setFormValues(values);
        nextFormStep();
    };  
    const [numberofcharacters, setNumberofcharacters] = useState(0);
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={`${formStep === 3 ? 'block' : 'hidden'}`}
        >
            <div className={'flex-col'}>

                <div className="flex flex-col ">
                    <label className="font-bold text-lg mb-2" htmlFor="aboutme">
                        Sobre mi
                    </label>
                    <input
                        className={` ${errors.aboutme ? 'text-red-800 dark:text-orange-high border-orange-high' : 'border-gray-500 dark:border-gray-400'} border-2 py-1 px-2 rounded-md outline-none focus:border-blue-500 bg-transparent`}
                        type="aboutme"
                        name="aboutme"
                        placeholder='Define a que te dedicas en pocas palabras'
                        {...register("aboutme")}                        
                    />
                    
                    <p className={` ${errors.aboutme ? 'text-red-800 dark:text-orange-high block' : 'invisible'}  `}><ErrorOutlinedIcon /> {errors.aboutme?.message + ''}</p>
                </div>   

                <div className="flex flex-col  ">
                    <label className="font-bold text-lg mb-2" htmlFor="description">
                        Descripcion
                    </label>
                    <textarea
                        className={` ${errors.description ? 'text-red-800 dark:text-orange-high border-orange-high ' : 'border-gray-500 dark:border-gray-400'} border-2 h-64 py-1 px-2 rounded-md outline-none focus:border-blue-500 bg-transparent`}
                        type="description"
                        name="description"                        
                        placeholder='Ingresa una descripcion sobre ti (maximo 420 caracteres), no escribas datos personales, emails, numero de telenofos, links, etc. o tu cuenta sera eliminada'
                        {...register("description", {
                            onChange: (e) => {
                                setNumberofcharacters(e.target.value.length)
                            }
                        })}
                    />   
                    <p className={` ${errors.aboutme ? 'text-red-800 dark:text-orange-high block' : ''} text-right  `}> {'Te quedan ' + (2400 - numberofcharacters)+ ' caracteres'}</p>                 
                    <p className={` ${errors.description ? 'text-red-800 dark:text-orange-high block' : 'invisible'}  mb-5`}><ErrorOutlinedIcon /> {errors.description?.message + ''}</p>
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


export default LastStep