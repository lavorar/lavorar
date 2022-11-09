import React, { useState } from 'react'
import Image  from 'next/image'
import { useForm } from 'react-hook-form';
import { useFormData } from '../../context/FormContext'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { fetcher } from '../../lib/api';
import { setToken } from '../../lib/auth';

const lastStep = ({ formStep, nextFormStep }) => {
    const validationSchema = Yup.object().shape({
        aboutme: Yup.string()
            .required('Ingresa una descripcion sobre vos!'),
        avatar: Yup.mixed()
            .test("fileSize", "The file is too large", (value) => {
                // if u want to allow only certain file sizes
                if (!value?.length) return true
                else {
                    return value[0].size <= 2000000;
                }

            })
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

    const [image, setImage] = useState(null);
    const uploadToClient = (event) => {
        console.log(image)
        if (event.target.files && event.target.files[0]) {
            console.log(event.target.files[0])
            const tmpImage = event.target.files[0];
            setImage(URL.createObjectURL(tmpImage));
        }
    };
    console.log(image)
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={`${formStep === 3 ? 'block' : 'hidden'}`}
        >
            <div className={'flex-col'}>

                <div>
                    <label htmlFor="profile_pic" className="font-bold text-lg mb-2">
                        Foto de perfil
                    </label>
                    <input
                        id="profile_pic"
                        name="profile_pic"
                        type="file"
                        
                        className={` ${errors.profile_pic ? 'text-orange-high border-orange-high ' : 'border-gray-500 dark:border-gray-400'} border-2 py-1 px-2 rounded-md outline-none focus:border-blue-500 bg-transparent`}
                        {...register("profile_pic", {
                            onChange: (e) => uploadToClient(e)
                        })}
                    />
                    <p className={` ${errors.profile_pic ? 'text-orange-high block' : 'invisible'}  `}>{errors.profile_pic?.message + ''}</p>
                    {
                        image ?
                            <Image src={image} alt="preview image" width={250} height={250} />
                            :
                            <></>
                    }

                </div>

                <div className="flex flex-col ">
                    <label className="font-bold text-lg mb-2" htmlFor="aboutme">
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