import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";
import { UseFormData } from "../../context/FormContext";
import { fetcher } from "../../lib/api";
import { setToken } from "../../lib/auth";


export default function FormCompleted() {
    const { data } = UseFormData();
    const router = useRouter();
    const provinceForm = data.provincia
    const [cityForm, setcityForm] = useState(data.localidad)
    const { setFormValues } = UseFormData();

    const formData = new FormData();


    const [datos, setdatos] = useState(data)
    console.log('formdata', datos)
    let provinceUp = true
    const getProvince = async () => {
        let response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/provinces1/${provinceForm.Slug}`)
            .then(({ data }) => {
                return data.data
            }).catch(async (error) => {
                return await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/provinces`, { data: provinceForm })
                    .then(({ data }) => {
                        return data.data
                    })
                    .catch((error) => {
                        return error
                    })
            })
        return response
    }



    const queryprovince = useQuery(
        ['province'],
        getProvince,
        {
            onSettled: (data) => {
                setdatos({ ...datos, provincia: data })
                setcityForm({ ...cityForm, province: data })
            },
            enabled: Boolean(provinceUp),
            staleTime: Infinity
        }
    )
    // console.log(queryprovince)    






    const getCity = async () => {
        // console.log('ciudad form', cityForm)  
        let response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/citys1/${cityForm.slug}`)
            .then(({ data }) => {
                return data.data
            }).catch(async (error) => {

                return await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/cities`, { data: cityForm })
                    .then(({ data }) => {
                        return data.data
                    })
                    .catch((error) => {
                        return error
                    })
            })
        return response
    }

    const querycity = useQuery(
        ['city'],
        getCity,
        {
            onSettled: (data) => {
                // console.log('datos a actualizar', datos)                
                setdatos({ ...datos, localidad: data })
            },
            enabled: Boolean(queryprovince.isSuccess),
            staleTime: Infinity
        },
    )


    const registerUser = async () => {
        // formData.append("data", datos)
        // console.log('datos put', formData)

        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local/register`,
            datos,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
        return data

    }



    const queryregisterUser = useQuery(['putUser'], registerUser,
        {
            onSettled: async (data) => {
                setToken(data);
                // console.log('datos id', data.user)
                setdatos({ ...datos, id: data.user.id, jwt: data.jwt })
                let role = JSON.stringify({
                    "role": {
                        "id": 3
                    }
                });
                await axios.put(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${data.user.id}`,
                    role,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${data.jwt}`
                        }
                    }).then((data => {
                        router.replace('/profile')
                    }))
                    .catch(error => { console.error(error) })

            },
            enabled: Boolean((querycity.isSuccess)),
            staleTime: Infinity
        })


    console.log('datos update', datos)
    console.log('querycity', querycity)
    console.log('register', queryregisterUser)

    return (
        <>
            <h2 className="text-5xl text-center font-bold">
                Bienvenido, Gracias por Registrarte! {' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                    {data.firstName + ' ' + data.lastName}
                </span>
                <span>👋 🎉</span>
            </h2>
        </>
    );
}
