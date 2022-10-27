import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { useFormData } from '../../context/FormContext'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Select from 'react-select'
import { useQuery } from 'react-query';
import axios from 'axios'
import { components } from "react-select";
import AsyncSelect from 'react-select'


const LenderOptions = ({ formStep, nextFormStep }) => {


    const Menu = props => {
        const optionSelectedLength = props.getValue().length || 0;
        return (
            <components.Menu {...props}>
                {optionSelectedLength < 3 ? (
                    props.children
                ) : (
                    <div style={{ margin: 15 }}>Escoge un maximo de 3 categorias</div>
                )}
            </components.Menu>
        );
    };
    const isValidNewOption = (inputValue, selectValue) =>
        inputValue.length > 0 && selectValue.length < 3;
    const getCategories = async (user) => {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/categories `)
        return data
    }

    const { data, isFetching, error } = useQuery(['todos'], getCategories, { staleTime: Infinity })


    // const options = []
    // if (!isFetching) {
    //     data.data.map((categorie) => (
    //         options.push({
    //             value: categorie.attributes.name,
    //             label: categorie.attributes.name,
    //             name: categorie.attributes.name,
    //             id: categorie.id
    //         })
    //     ))
    // }
    // const [categories, setcategories ] = useState([])
    // if (!isFetching) {
    //     setcategories(data.data)
    // }
    //console.log(data?.data)


    const { setFormValues } = useFormData();

    const { handleSubmit, control, formState } = useForm({
    });
    const { errors } = formState;

    const onSubmit = (values) => {
        // console.log('values', values)
        values.province = values.province.Localidad_censal.nombre
        values.city = values.city.nombre
        setFormValues(values);
        nextFormStep();
    };



    const getProvinces = async () => {
        const { data } = await axios.get(`https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre`)
        return data
    }

    const provinces = useQuery(['provinces'], getProvinces, { staleTime: Infinity })
    const [cityId, setcityId] = useState(null)
    const [cityValue, setcityValue] = useState(null)

    const getCitys = async (cityId) => {
        if (cityId) {
            const { data } = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${cityId}&campos=id,localidad_censal,nombre&max=400`)
            // console.log(data.localidades)
            data.localidades.map((localidad) => (
                localidad.nombre = localidad.localidad_censal.nombre
            ))
            return data
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
    const handleProvinceChange = (e) => {
        control._formValues.province = e
        setcityId(e.id)
        control._formValues.city = undefined
        setcityValue({ id: 1, name: 'ingresa una cuidad', label: 'ingresa una cuidad' })
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={`${formStep === 2 ? 'block' : 'hidden'}`}
        >
            <div className="flex flex-col text-black">
                <label className='mb-5 dark:text-gray-50'>Categoria</label>
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
                        <AsyncSelect
                            {...field}
                            placeholder='Provincia'
                            options={provinces.data?.provincias}
                            isDisabled={provinces.isLoading}
                            onChange={handleProvinceChange}
                            id="province" instanceId="province"
                            getOptionLabel={(option) => option.nombre}
                            getOptionValue={(option) => option.id} // It should be unique value in the options. E.g. ID
                        />
                    )}
                    name="province"
                    control={control}
                />
                <p className={` ${errors.province ? 'text-orange-high block' : 'invisible'}  `}>{'Debes seleccionar una provincia'}</p>
            </div>
            <div className="flex flex-col text-black">
                <label className='mb-5 dark:text-gray-50'>Provincia</label>
                <Controller
                    className='mt-5 '
                    rules={{ required: true }}
                    render={({ field }) => (
                        <AsyncSelect
                            {...field}
                            value={cityValue}
                            onChange={(e) => { setcityValue(e), control._formValues.city = e }}
                            placeholder='Ingresa una Ciudad'
                            options={citys.data?.localidades}
                            id="city" instanceId="city"
                            defaultOptions={[{ id: 0, label: "Loading..." }]}
                            isDisabled={!citys.data?.localidades}
                            getOptionLabel={(option) => option.nombre}
                            getOptionValue={(option) => option.id} // It should be unique value in the options. E.g. ID
                        />
                    )}
                    name="city"
                    control={control}
                />
                <p className={` ${errors.city ? 'text-orange-high block' : 'invisible'}  `}>{'Debes seleccionar una ciudad'}</p>
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