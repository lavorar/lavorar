import React, { useState } from 'react'
import { UseFormData } from '../../context/FormContext'
import Select from 'react-select'
import { useQuery } from 'react-query';
import axios from 'axios'
import { components } from "react-select";
import AsyncSelect from 'react-select/async';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/router';

const HomeSearchBar = (props) => {
    const getCategories = async (user) => {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/categories`)
        return data
    }
    const router = useRouter()
    const qs = require('qs');

    const categories = useQuery(['categories'], getCategories, { staleTime: Infinity })
    // console.log(categories.data?.data)

    const getCitys = async (value) => {

        const query = qs.stringify({
            filters: {
                name: {
                    $contains: value,
                },
            },
            populate: {
                province: {
                    fields: ['name', 'Slug'],
                }
            }
        }, {
            encodeValuesOnly: true, // prettify URL
        });
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/cities?${query}`)
        const options = []
        data.data.map(function (city) {
            let option = {
                value: city.attributes.slug,
                label: city.attributes.name + ' (' + city.attributes.province.data.attributes.name + ' )',
                id: city.id,
                name: city.attributes.name,
                slug: city.attributes.slug,
                province: city.attributes.province
            }
            options.push(option)
        })
        return options
    }
    const loadOptions = inputValue => {
        return new Promise((resolve, reject) => {
            // using setTimeout to emulate a call to server
            setTimeout(() => {
                resolve(getCitys(inputValue));
            }, 1000);
        });
    };
    const search = async (e) => {
        console.log(e)
        let url = '/buscar'
        if (e.categorie) {
            url = url + '/' + e.categorie.attributes.Slug
        }
        if (e.location) {
            url = url + '/' + e.location.province.data.attributes.Slug + '/' + e.location.slug
        }
        console.log(url)
        router.push({
            pathname: url,
            query: { categorieSlug: e.categorie?.attributes.Slug, citySlug: e.location?.slug, },
        })
    }
    const colorstylesSizes = {
        control: (styles) => ({
            ...styles,
            boxShadow: '0px 0px 0px 0px rgb(0 170 225)',
            borderWidth: '0',
            backgroundColor: 'rgb(0 0 0 0)',
            color: 'rgb(255 255 255)',
            '&:hover': {
                boxShadow: '0px 0px 0px 0px rgb(0 170 225)',
            },
        }),
        menuList: (base) => ({
            ...base,
            borderWidth: '0px',
            backgroundColor: '#1f2937',
            color: 'rgb(255 255 255)',
            '&:hover': {
                backgroundColor: '#374151',
                color: 'rgb(255 255 255)',
            },
            '@media (prefers-color-scheme: light)': {
                backgroundColor: '#e4e4e7',
                color: '#111827',
                boxShadow: '0px 0px 0.5em 0px #1f2937',
                '&:hover': {
                    backgroundColor: '#d4d4d8',
                    color: '#111827',
                },
            },
            "::-webkit-scrollbar": {
                width: "6px",
                height: "0px",
            },
            "::-webkit-scrollbar-track": {
                background: "#f1f1f1"
            },
            "::-webkit-scrollbar-thumb": {
                background: "#888"
            },
            "::-webkit-scrollbar-thumb:hover": {
                background: "#555"
            }
        }),
        option: (provided, { isSelected, isFocused }) => ({
            ...provided,
            backgroundColor: isFocused || isSelected ? '#4b5563' : '#1f2937',
            color: 'rgb(255 255 255)',
            '&:hover': {
                backgroundColor: '#4b5563',
                color: 'rgb(255 255 255)',
            },
            '&:focus': {
                backgroundColor: '#4b5563',
                color: 'rgb(255 255 255)',
            },
            '@media (prefers-color-scheme: light)': {
                backgroundColor: '#e4e4e7',
                color: '#111827',
                backgroundColor: isFocused || isSelected ? '#a1a1aa' : '#e4e4e7',
                '&:hover': {
                    backgroundColor: '#a1a1aa',
                    color: '#111827',
                },
            }


        }),
        placeholder: (provided) => ({
            ...provided,
            color: 'rgb(255 255 255)',
            '@media (prefers-color-scheme: light)': {
                backgroundColor: 'rgb(0 0 0 0)',
                color: '#111827',
            }

        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'rgb(255 255 255)',
            '@media (prefers-color-scheme: light)': {
                color: '#111827',
            }

        }),
        input: (provided) => ({
            ...provided,
            color: 'rgb(255 255 255)',
            '@media (prefers-color-scheme: light)': {
                color: '#111827',
            }

        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            backgroundColor: 'rgb(255 255 255 0)'

        }),
        clearIndicator: (provided) => ({
            ...provided,
            color: 'rgb(255 255 255)',
            '&:hover': {
                color: '#93c5fd',
            },
            '@media (prefers-color-scheme: light)': {
                color: '#111827',
                '&:hover': {
                    color: '#2563eb',
                },
            }
        }),
        dropdownIndicator: (provided, state) => ({
            ...provided,
            backgroundColor: 'rgb(255 255 255 0)',
            color: 'rgb(255 255 255)',
            '&:hover': {
                color: '#93c5fd',
            },
            '@media (prefers-color-scheme: light)': {
                borderColor: '#111827',
                color: '#111827',
                '&:hover': {
                    color: '#2563eb',
                },
            },
            '@media (min-width: 768px)': {
                borderRightWidth: state.selectProps.border ? state.selectProps.border : '2px',
            }
        }),
    }

    const { handleSubmit, control, formState } = useForm({
    });

    return (
        <form onSubmit={handleSubmit(search)} className='max-w-5xl mt-8 h-44 md:h-auto w-full'>
            <div className="inline-flex md:flex-row gap-y-4 flex-col items-center text-gray-300 justify-between p-5 md:pl-5 md:pr-1 shadow md:border-2 h-full md:h-16 w-full py-1 md:rounded-full border-gray-900 dark:border-gray-200" >
                <div
                    className='flex flex-col justify-center w-full md:w-1/2 h-full  border-gray-900 rounded-full dark:border-white-ghost border md:border-0 md:rounded-none  md:mr-2 text-black dark:text-white-ghost'
                >
                    <Controller
                        render={({ field }) => (
                            <Select
                                {...field}
                                isClearable
                                options={categories.data?.data}
                                id="categorie"
                                styles={colorstylesSizes}
                                instanceId="categorie"
                                placeholder='Qué buscas?'
                                getOptionLabel={(option) => option.attributes.name}
                                getOptionValue={(option) => option.id}
                            />
                        )}
                        name="categorie"
                        control={control}
                    />
                </div>
                <div className='flex flex-col justify-center md:border-0 md:rounded-none w-full md:w-1/2 h-full  border-gray-900 rounded-full dark:border-white-ghost border md:mr-2 text-black dark:text-white-ghost' >
                    <Controller
                        render={({ field }) => (
                            <AsyncSelect
                                {...field}
                                styles={colorstylesSizes}
                                isClearable
                                border='0px'
                                loadOptions={loadOptions}
                                className='text-black w-full outline-none'
                                id="location"
                                instanceId="location"
                                placeholder='Tu ubicación'
                                noOptionsMessage={(e) => 'Ingresa el nombre de una ciudad'}
                                classNamePrefix="react-select"
                            />
                        )}
                        name="location"
                        control={control}
                    />
                </div>
                <button type='submit' className="flex space-x-12 items-center w-full justify-center h-full md:ml-2 md:w-52 bg-orange-brand rounded-full text-3xl font-medium text-gray-900">Buscar</button>

            </div>
        </form>
    )
}



export default HomeSearchBar
