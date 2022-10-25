import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { useFormData } from '../../context/FormContext'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Select from 'react-select'
import { useQuery } from 'react-query';
import axios from 'axios'
import { components } from "react-select";


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

    const { data, isFetching, error } = useQuery('todos', getCategories)


    const options = []
    if (!isFetching) {
        data.data.map((categorie) => (
            options.push({
                value: categorie.attributes.name,
                label: categorie.attributes.name,
                name: categorie.attributes.name,
                id: categorie.id
            })
        ))
    }


    const validationSchema = Yup.object().shape({
        aboutme: Yup.string()
            .required('Ingresa una descripcion!'),
        categories: Yup.object()
            .required('debes selecionar una categoria')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    const { setFormValues } = useFormData();

    const { handleSubmit, control, formState } = useForm({
    });
    const { errors } = formState;
    const [errorCategorie, seterrorCategorie] = useState(null)

    const onSubmit = (values) => {
        console.log('values', values)
        setFormValues(values);
        nextFormStep();
        if (selectedOptions.length === 0) {
            seterrorCategorie(false)
        }
    };

    const [selectedOptions, setSelectedOptions] = useState([]);
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={`${formStep === 2 ? 'block' : 'hidden'}`}
        >
            <section className={'text-black my-3'}>
                <label className='mb-5 dark:text-gray-50'>Categoria</label>
                <Controller
                    className='mt-5 '
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Select
                            components={{ Menu }}
                            {...field}
                            options={options}
                            isMulti
                            id="categories" instanceId="categories"
                            isValidNewOption={isValidNewOption}
                        />
                    )}
                    name="categories"
                    control={control}
                />
                <p className={` ${errors.categories ? 'text-orange-high block' : 'invisible'}  `}>{'Debes ingresar al menos una categoria'}</p>
            </section>  
            {/* <section className={'text-black my-3'}>
                <label className='mb-5 dark:text-gray-50'>Provincia</label>
                <Controller
                    className='mt-5 '
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Select
                            components={{ Menu }}
                            {...field}
                            options={options}
                            isMulti
                            id="province" instanceId="province"
                            isValidNewOption={isValidNewOption}
                        />
                    )}
                    name="province"
                    control={control}
                />
                <p className={` ${errors.province ? 'text-orange-high block' : 'invisible'}  `}>{'Debes ingresar al menos una categoria'}</p>
            </section>
            <section className={'text-black my-3'}>
                <label className='mb-5 dark:text-gray-50'>Localidad</label>
                <Controller
                    className='mt-5 '
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Select
                            components={{ Menu }}
                            {...field}
                            options={options}
                            isMulti
                            id="city" instanceId="city"
                            isValidNewOption={isValidNewOption}
                        />
                    )}
                    name="city"
                    control={control}
                />
                <p className={` ${errors.city ? 'text-orange-high block' : 'invisible'}  `}>{'Debes ingresar al menos una categoria'}</p>
            </section>              */}
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