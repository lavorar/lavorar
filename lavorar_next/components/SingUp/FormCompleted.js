import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";
import { useFormData } from "../../context/FormContext";
import { fetcher } from "../../lib/api";
import { setToken } from "../../lib/auth";


export default function FormCompleted() {
    const { data } = useFormData();
    const router = useRouter();
    const provinceForm = data.provincia
    const [cityForm, setcityForm] = useState(data.localidad)
    const { setFormValues } = useFormData();

    const [datos, setdatos] = useState(data)

    let provinceUp
    let registerUp = true
    if (data?.categories) {
        provinceUp = true
        registerUp = false
    }


    const [province, setprovince] = useState(null)    

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


    const [foundProvince, setfoundProvince] = useState(undefined)
    const queryprovince = useQuery(
        ['province'],
        getProvince,
        {
            onSettled: (data) => {
                setprovince(data)
                setfoundProvince(true)
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

    const [city, setcity] = useState(null)

    const [foundcity, setfoundcity] = useState(undefined)
    const querycity = useQuery(
        ['city'],
        getCity,
        {
            onSettled: (data) => {
                setcity(data)
                setfoundcity(true)
                setdatos({ ...datos, localidad: data })
            },
            enabled: Boolean(foundProvince),
            staleTime: Infinity
        },
    )  

    

    const registerUser = async () => {        
        const { data } = await axios.put(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${datos.id}`,
            datos,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${datos.jwt}`,
                }
            }
        )
        return data
    }


    // console.log('objeto ciudad', city)
    // console.log('objeto provinca', province)
    // console.log('register', querycity)


    const queryregisterUser = useQuery(['putUser', foundcity], registerUser,
          {
              onSettled: (data) => {
                   router.replace('/profile')
              },
              enabled: Boolean(foundcity || registerUp),
              staleTime: Infinity
          }
      )


    
    return (
        <>
            <h1 className="text-5xl text-center font-bold">
                Bienvenido, Gracias por Registrarte! {' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                    {data.firstName + ' ' + data.lastName}
                </span>
                <span>👋 🎉</span>
            </h1>
        </>
    );
}
