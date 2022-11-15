import React, { useState } from 'react'
import { useForm, Controller, useController } from 'react-hook-form';
import { useFormData } from '../../context/FormContext'
import Select from 'react-select'
import { useQuery } from 'react-query';
import axios from 'axios'
import { components } from "react-select";

export const slugify = str =>
    str
        .toLowerCase()
        .trim()
        .normalize('NFD')
        .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi, "$1")
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .normalize();

const LenderOptions = ({ formStep, nextFormStep }) => {


    const Menu = props => {
        const optionSelectedLength = props.getValue().length || 0;
        return (
            <components.Menu {...props}>
                {optionSelectedLength < 3 ? (
                    props.children
                ) : (
                    <div style={{ margin: 15 }}>LImite alcanzado</div>
                )}
            </components.Menu>
        );
    };
    const isValidNewOption = (inputValue, selectValue) =>
        inputValue.length > 0 && selectValue.length < 3;
    const getCategories = async (user) => {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/categories`)
        return data
    }

    const { data, isFetching, error } = useQuery(['todos'], getCategories, { staleTime: Infinity })


    const { setFormValues } = useFormData();

    const { handleSubmit, register, control, formState } = useForm({
    });
    const { errors } = formState;
    
    

    const onSubmit = (values) => {
        let slugprovince = slugify(values.provincia.name )
        
        let slugcity= slugify(values.localidad.name)
        values.localidad = { name: values.localidad.name, identificador: values.localidad.identificador, slug: slugcity }
        values.provincia = { name: values.provincia.name, identificador: values.provincia.identificador, Slug: slugprovince }
        
        console.log('submit', values)
        setFormValues(values);
        nextFormStep();
    };



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

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={`${formStep === 2 ? 'block' : 'hidden'}`}
        >
            <div className="flex flex-col text-black">
                <label className='mb-5 dark:text-gray-50'>Categoria (3 max)</label>
                <Controller
                    className='mt-5 '
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Select
                            components={{ Menu }}
                            {...field}
                            options={data?.data}
                            isMulti
                            placeholder='Habilidad o rubro al que te dedicas'
                            id="categories" instanceId="categories"
                            isValidNewOption={isValidNewOption}
                            getOptionLabel={(option) => option.attributes.name}
                            getOptionValue={(option) => option.id} // It should be unique value in the options. E.g. ID
                        />
                    )}
                    
                    name="categories"
                    control={control}
                />
                <p className={` ${errors.categories ? 'text-orange-high block' : 'invisible'}  `}>{'Debes ingresar al menos una categoria'}</p>
            </div>
            <div className="flex flex-col text-black">
                <label className='mb-5 dark:text-gray-50'>Provincia</label>
                <Controller
                    className='mt-5 '
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Select
                            {...field}
                            placeholder='Provincia'
                            options={provinces.data}
                            isDisabled={provinces.isLoading}
                            onChange={handleProvinceChange}
                            id="provincia" instanceId="provincia"
                        // getOptionLabel={(option) => option.nombre}
                        // getOptionValue={(option) => option.nombre} // It should be unique value in the options. E.g. ID
                        />
                    )}                    
                    name="provincia"
                    control={control}
                />
                <p className={` ${errors.provincia ? 'text-orange-high block' : 'invisible'}  `}>{'Debes seleccionar una provincia'}</p>
            </div>
            <div className="flex flex-col text-black">
                <label className='mb-5 dark:text-gray-50'>Provincia</label>
                <Controller
                    className='mt-5 '
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Select
                            {...field}
                            value={cityValue}
                            onChange={(e) => { setcityValue(e), control._formValues.localidad = e }}
                            placeholder='Ingresa una Ciudaddd'
                            options={citys.data}
                            id="localidad" instanceId="localidad"
                            defaultOptions={[{ id: 0, label: "ingresa una provincia", value: '' }]}
                            isDisabled={!citys.isSuccess}
                            // getOptionLabel={(option) => option.nombre}
                            // getOptionValue={(option) => option.nombre}
                        />
                    )}
                    onChange={(e) => { setcityValue(e) }}
                    name="localidad"
                    control={control}
                />
                <p className={` ${errors.localidad ? 'text-orange-high block' : 'invisible'}  `}>{'Debes seleccionar una ciudad'}</p>
            </div>           
            <button
                className='block mb-6 text-gray-900 bg-orange-pastel text-lg rounded py-2.5 w-full'
                type="submit"
            >
                Siguiente
            </button>
        </form>
    )
}

export default LenderOptions