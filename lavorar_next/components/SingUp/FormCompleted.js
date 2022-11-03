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
    const cityForm = data.localidad
    const { setFormValues } = useFormData();

    const [datos, setdatos] = useState(data)



    function delay(time) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(register());
            }, time);
        });
    }

    async function test() {
        console.log('start timer');
        await delay(2500);
        console.log('after 2 second');
    }

    test();


    const [province, setprovince] = useState(null)
    const newProvince = async () => {
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/provinces`, { data: provinceForm })
        return data.data
    }

    const getProvince = async () => {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/provinces1/${provinceForm.identificador}`)
        return data.data
    }

    const [enabledNewProvince, setenabledNewProvince] = useState(undefined)
    const [foundProvince, setfoundProvince] = useState(undefined)
    const queryprovince = useQuery(
        ['province'],
        getProvince,
        {
            onSettled: (data) => {
                console.log('se encuenta la provincia', data)
                setprovince(data)
                setfoundProvince(true)  
                setdatos({...datos, provincia: data})              
            },
            onError: (error) => {
                setenabledNewProvince(true)
            },

            staleTime: Infinity
        }
    )
    const querynewProvince = useQuery(['newprovince', enabledNewProvince], newProvince,
        {
            enabled: Boolean(enabledNewProvince),
            onSettled: (data) => {
                console.log(data)
                setprovince(data)
                setfoundProvince(true)
                setdatos({ ...datos, provincia: data })  
            },
            staleTime: Infinity
        }
    )

    // let provinceObj
    // if (queryprovince.data) {
    //     provinceObj = queryprovince.data
    //     const newdata = { ...data, provincia: provinceObj }
    //     newdata.provincia = { ...cityForm, province: provinceObj }
    // }
    // else {
    //     if (querynewProvince.data) {
    //         provinceObj = querynewProvince.data
    //         newdata = { ...data, provincia: provinceObj }
    //         newdata.provincia = { ...cityForm, province: provinceObj }
    //     }
    // }



    const newCity = async () => {
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/cities`, {
            data: {
                name: cityForm.name,
                identificador: cityForm.identificador,
                province: province
            }
        })
        return data.data
    }

    const getCity = async () => {

        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/citys1/${cityForm.identificador}`)

        return data.data
    }
    const [city, setcity] = useState(null)
    const [enabledNewCity, setenabledNewCity] = useState(undefined)  

    const [foundcity, setfoundcity] = useState(undefined)
    const querycity = useQuery(
        ['city'],
        getCity,
        {
            onSettled: (data) => {                
                console.log(data)
                setcity(data)
                setfoundcity(true)
                setdatos({ ...datos, localidad: data })  
            },
            onError: (error) => {
                setenabledNewCity(true)
            },           
            staleTime: Infinity
        },
    )
    const querynewCity = useQuery(['newcity', enabledNewCity], newCity,
        {
            onSettled: (data) => {
                console.log(data)
                setcity(data)
                setfoundcity(true)                
                setdatos({ ...datos, localidad: data })  
            },
            enabled: Boolean(enabledNewCity),
            staleTime: Infinity
        }
    )

    // if (province !== null && city) {
    //     console.log(data)
    //     setFormValues({ provincia: province, city: city })
    //     console.log(data)
    // }

    const registerUser = async () => {
        console.log(datos)
        const { data } = await axios.put(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${datos.id}`,
            { data: datos },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${datos.jwt}`,
                }
            }
        )

        return data.data
    }



    // let cityobj
    // if (querycity.data) {
    //     cityobj = querycity.data
    // }
    // else {
    //     cityobj = querynewCity.data ? querynewCity.data : 'no hay nada  '
    // }
    
    // console.log('odatos', datos)
    console.log('objeto ciudad', city)
    console.log('objeto provinca', province)
    // console.log('provincia encontrada', foundProvince)
    // let registerallowed
    // if (cityobj !== undefined && provinceObj) {
    //     setFormValues({ provincia: provinceObj, localidad: cityobj })
    //     registerallowed = true
    //     data.provincia = provinceObj
    //     data.localidad = cityobj
    // }
    
    
    // const queryregisterUser = useQuery(['newcity', enabledNewCity], registerUser,
    //     {
    //         enabled: Boolean(finish),
    //         staleTime: Infinity
    //     }
    // )

    
    //  console.log('datos', queryregisterUser)
    const register = async () => {  
        console.log('datos nuevos', datos)    
        if (foundProvince === true && foundcity === true) {
             try {
              const responseData = await fetcher(
                  `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${data.id}`,
                  {
                      headers: {
                          'Content-Type': 'application/json',
                          Authorization: `Bearer ${data.jwt}`,
                      },
                      body: JSON.stringify(datos),
                      method: 'PUT',
                  }
              );
              console.log(responseData)
              router.replace('/')

          } catch (error) {
              console.error(error);
          }
        }
        // getProvince()
        // console.log('ciudad con su provincia', province)        
        // getCity()
        // console.log('ciudad con su provincia', province)

        // getprovince()
        // console.log(province,city)
        // try {
        //     const responseData = await fetcher(
        //         `${process.env.NEXT_PUBLIC_STRAPI_URL}/cities`,
        //         {
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify({ data: city }),
        //             method: 'POST',
        //         }
        //     );

        //     console.log(responseData)
        // } catch (error) {
        //     console.error(error);
        // }
        // try {
        //     const responseData = await fetcher(
        //         `${process.env.NEXT_PUBLIC_STRAPI_URL}/provinces`,
        //         {
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify({data:province}),
        //             method: 'POST',
        //         }
        //     );

        //     console.log(responseData)
        // } catch (error) {
        //     console.error(error);
        // }



        // try {
        //      const responseData = await fetcher(
        //          `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${data.id}`,
        //          {
        //              headers: {
        //                  'Content-Type': 'application/json',
        //                  Authorization: `Bearer ${data.jwt}`,
        //              },
        //              body: JSON.stringify({data: data}),
        //              method: 'PUT',
        //          }
        //      );
        //      console.log(responseData)

        //  } catch (error) {
        //      console.error(error);
        //  }

    };


    // promiseOptions()
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
