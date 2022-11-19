
import { useRouter } from 'next/router';
import { setToken } from '../../lib/auth';
import { fetcher } from '../../lib/api';

import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form';
import { useFormData } from '../../context/FormContext'
import Select from 'react-select'
import { useQuery } from 'react-query';
import axios from 'axios'
import { components } from "react-select";

const options = [
    { value: 500, label: '500 pesos' },
    { value: 1000, label: '1000 pesos' },
    { value: 1500, label: '1500 pesos' },
    { value: 2000, label: '2000 pesos' },
    { value: 2500, label: '2500 pesos' },
]

const DonateComponent = () => {

    const router = useRouter();

    const { handleSubmit, control, formState } = useForm({
    });
    const { errors } = formState;

    const mercadopagoPreference = async (unitprice) => {
        const endpoint = 'https://api.mercadopago.com/checkout/preferences'

        let data = JSON.stringify({
            "items": [
                {
                    "title": "Donacion a Lavorar",
                    "description": "Gracias a las donaciones podemos seguir trabajando",
                    "quantity": 1,
                    "currency_id": "ARS",
                    "unit_price": unitprice
                }
            ],
            "back_urls": {
                "success": "http:localhost:3000/"
            }
        });

        const res = axios.post(endpoint, data, {
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
            }
        }).then((data) => {
            console.log(data)
            router.replace(data.data.init_point)
        }).catch((data) => {
            console.log(data)
            return data
        })
        return

    }

    const submitDonate = async (values) => {
        console.log(values);
        let preference = mercadopagoPreference(values.unit_price.value)
    };


    return (
        <div className="items-center w-full">
            <h1 className="flex justify-center text-5xl md:text-6xl font-bold leading-tighter mb-4">
                <span className="bg-clip-text text-center text-transparent bg-gray-700 dark:bg-gray-100 py-2">
                    Apoya nuestro Trabajo, dona ahora!
                </span>
            </h1>
            <div className="w-full md:max-w-md md:mx-auto">
                <form
                    onSubmit={handleSubmit(submitDonate)}
                >
                    <div className="flex flex-col text-black">
                        <label className='mb-5 dark:text-gray-50'>Cantidad a donar </label>
                        <Controller
                            className='mt-5 '
                            rules={{ required: true }}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={options}
                                    placeholder='Elige la cantidad a Donar'
                                    id="unit_price" instanceId="unit_price"
                                />
                            )}
                            name="unit_price"
                            control={control}
                        />
                        <p className={` ${errors.unit_price ? 'text-orange-high block' : 'invisible'}  mb-1`}>{'Debes seleccionar un monto'}</p>
                    </div>

                    <button
                        className='block mb-6 text-gray-900 bg-orange-pastel text-lg rounded py-2.5 w-full'
                        type="submit"
                    >
                        Donar!
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DonateComponent;