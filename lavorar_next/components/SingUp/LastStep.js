import React, { useState } from 'react'
import Image  from 'next/image'
import { useForm, Controller } from 'react-hook-form'; 
import { UseFormData } from '../../context/FormContext'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { fetcher } from '../../lib/api';
import { setToken } from '../../lib/auth';
import axios from 'axios';
import Select from 'react-select'
import { useQuery } from 'react-query';


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

    const { setFormValues } = UseFormData();

    const { register, handleSubmit, control, formState } = useForm(formOptions);
    const { errors } = formState;


    const { data } = useFormData();


    const getProvinces = async () => {
        const { data } = await axios.get(`https://apis.datos.gob.ar/georef/api/provincias?campos=nombre`)
        const options = []
        data.provincias.map((provice) => (
            options.push({
                value: provice.id,
                label: provice.nombre,
                identificador: provice.id,
                name: provice.nombre,
            })
        ))
        return options

    }

    const provinces = useQuery(['provinces'], getProvinces, { staleTime: Infinity })
    const [cityId, setcityId] = useState(null)
    const [cityValue, setcityValue] = useState({ id: 1, name: 'ingresa una cuidad', label: 'ingresa una cuidad' })

    const getCitys = async (cityId) => {
        if (cityId) {
            const { data } = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${cityId}&campos=nombre&max=400`)
            const options = []
            data.localidades.map((city) => (
                city.nombre = city.nombre.toLowerCase(),
                city.nombre = city.nombre.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()),
                options.push({
                    value: city.id,
                    label: city.nombre,
                    identificador: city.id,
                    name: city.nombre,
                })
            ))
            return options
        }
        return
    }

    const citys = useQuery(
        ['citys', cityId],
        () => getCitys(cityId),
        {
            enabled: Boolean(cityId),
            staleTime: Infinity
        }
    )
    // console.log(citys)
    const handleProvinceChange = (e) => {
        control._formValues.provincia = e
        setcityId(e.identificador)
        control._formValues.localidad = undefined
        setcityValue({ id: 1, name: 'ingresa una cuidad', label: 'ingresa una cuidad' })
    }

    const onSubmit = async (values) => {
               
        if (values.profile_pic.length < 1 ){
            delete values.profile_pic
        }        
        setFormValues(values);
          nextFormStep();
    };



    const [image, setImage] = useState(null);
    const uploadToClient = (event) => {        
        if (event.target.files && event.target.files[0]) {            
            const tmpImage = event.target.files[0];
            setImage(URL.createObjectURL(tmpImage));
        }
    };    
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
                        accept="image/*"
                        className={` ${errors.profile_pic ? 'text-orange-high border-orange-high ' : 'border-gray-500 dark:border-gray-400'} border-2 py-1 px-2 rounded-md outline-none focus:border-blue-500 bg-transparent`}
                        {...register("profile_pic", {
                            onChange: (e) => uploadToClient(e)
                        })}
                    />
                    <p className={` ${errors.profile_pic ? 'text-orange-high block' : 'invisible'}  `}>{errors.profile_pic?.message + ''}</p>
                    {
                        image ?
                        <div className=" rounded-full overflow-hidden w-[50px] h-[50px] ">
                                <Image src={image} alt="preview image" width={50} height={50} objectFit="cover" />
                        </div>
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