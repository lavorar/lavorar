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

    const formData = new FormData();


    const [datos, setdatos] = useState(data)
    console.log('formdata', datos)
    let provinceUp
    let imageup
    let registerUp = true
    if (data?.profile_pic) {
        formData.append("files", data.profile_pic[0])
        imageup = true
        registerUp = false
    }
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

    const [foundcity, setfoundcity] = useState(data.categories ? undefined : true)
    const querycity = useQuery(
        ['city'],
        getCity,
        {
            onSettled: (data) => {
                console.log('datos a actualizar', datos)
                setcity(data)
                setfoundcity(true)
                setdatos({ ...datos, localidad: data })
            },
            enabled: Boolean(foundProvince),
            staleTime: Infinity
        },
    )

    const [imguploaded, setimguploaded] = useState(undefined)
    const uploadimg = async () => {
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/upload/`,
            formData,
        )
        return data
    }
    const queryuploadimg = useQuery(['putUser', foundcity, imageup], uploadimg,
        {
            onSettled: (data) => {
                console.log("imagen del servidor", data)
                setdatos({ ...datos, profile_pic: data })
                setimguploaded(true)
            },
            enabled: Boolean(imageup),
            staleTime: Infinity
        }
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



    const queryregisterUser = useQuery(['putUser', foundcity, registerUp, imguploaded, imageup], registerUser,
        {
            onSettled: async (data) => {
                setToken(data);
                console.log('datos id', data.user)
                setdatos({ ...datos, profile_pic: data })
                setdatos({ ...datos, id: data.user.id, jwt: data.jwt })               
                // if (datos?.role) {
                //     await axios.put(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${data.user.id}`,
                //         {
                //             role: datos.role,
                //             name: data.user.name
                //         },
                //         {
                //             headers: {
                //                 'Content-Type': 'application/json',
                //                 Authorization: `Bearer ${data.jwt}`
                //             }
                //         })
                // }
                //router.replace('/profile')
            },
            enabled: Boolean(registerUp || (querycity.isSuccess && queryuploadimg.isSuccess) || (querycity.isSuccess && !imageup) ||
                (querycity.isIdle && queryuploadimg.isSuccess)),
            staleTime: Infinity
        })

    const putuser = async () => {
        // formData.append("data", datos)
        // console.log('datos put', formData)
        console.log('datos update', datos)
        const { data } = await axios.put(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${datos.id}`,
            {
                role: datos.role,
                name: datos.firstName + ' ' +datos.lastName + " "
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${datos.jwt}`
                }
            })
        return data

    }

    const queryupdateUser = useQuery(['putUser'], putuser,
        {
            onSettled: (data) => {
                router.replace('/')
            },
            enabled: Boolean(queryregisterUser.isSuccess && datos?.role && datos?.id && datos?.jwt),
            staleTime: Infinity
        }
    )


    // console.log('objeto ciudad', city)
    // console.log('objeto provinca', province)

    
    console.log('datos update', datos.jwt)
    console.log('datos update', datos.id)


    console.log('queryupdateUser', queryupdateUser)
    console.log('querycity', querycity)
    console.log('register', queryregisterUser)
    console.log('img', queryuploadimg)

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
