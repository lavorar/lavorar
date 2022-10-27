import { useState } from 'react';
import { useRouter } from 'next/router';
import { getIdFromLocalCookie, getTokenFromLocalCookie, setToken } from '../../lib/auth';
import { fetcher } from '../../lib/api';
import { useFetchUser } from '../../lib/authContext';
import { useForm } from 'react-hook-form';
import { useFormData } from '../../context/FormContext'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const RegisterComponent = ({ formStep, nextFormStep }) => {
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('Ingresa un nombre!')
            .matches(/^[a-zA-ZÀ-ÿ\s]{1,50}$/, 'Solo se permiten letras!'),
        lastName: Yup.string()
            .required('Ingresa un apellido!')
            .matches(/^[a-zA-ZÀ-ÿ\s]{1,50}$/, 'Solo se permiten letras!'),        
        email: Yup.string()
            .required('Ingresa una email!')
            .email('Email invalido'),
        password: Yup.string()
            .required('Ingresa una contraseña!')
            .min(6, 'La contraseña  debe ser por lo menos de 6 characteres')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    const { setFormValues } = useFormData()
    // const [user, setUser] = useState({ user: null, jwt: '' })
    // const router = useRouter();
    // const [registration, setregistration] = useState(false)
    // const [userData, setUserData] = useState({
    //     username: '',
    //     email: '',
    //     password: '',
    //     name: '',
    //     surname: '',
    //     birth: '',
    //     city: '',
    //     province: '',
    // });

    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    const onSubmit = async (values) => {        
        // setFormValues(data);
         try {
             const responseData = await fetcher(
                 `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local/register`,
                 {
                     headers: {
                         'Content-Type': 'application/json',
                     },
                     body: JSON.stringify({
                         email: values.email,
                         password: values.password,
                         username: values.email,
                         name: values.name,
                         surname: values.surname,
                         birth: values.birth,
                     }),
                     method: 'POST',
                 }
             );  
             console.log('response', responseData)
             if (responseData.user)
             {
                 console.log('user', responseData.user)
                 values.jwt = responseData.jwt
                 values.id = responseData.user.id
                 setFormValues(values);
                 nextFormStep();
                 //setregistration(true)
                 console.log(responseData)
                 setToken(responseData);  
             }
             else{
                alert('el email ya esta tomado')
             }
                       
            //  setUser({ ...user, user: responseData.user, jwt: responseData.jwt })
              
         } catch (error) {
             console.error(error);
         }
        
    };

    // const handleLender = async (e) => {
    //     const id = user.user.id
    //     console.log('id user', user)
    //     const jwt = user.jwt;
    //     try {
    //         const responseData = await fetcher(
    //             `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${id}`,
    //             {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     Authorization: `Bearer ${jwt}`,
    //                 },
    //                 body: JSON.stringify({
    //                     is_lender: true,
    //                     province: userData.province,
    //                     city: userData.city,
    //                 }),
    //                 method: 'PUT',
    //             }
    //         );
    //         console.log(responseData)

    //     } catch (error) {
    //         console.error(error);
    //     }
    //     router.replace('/')
    // }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={`${formStep === 0 ? 'block' : 'hidden'}`}
        >
            <div className={'flex-col'}>
                <div className="grid grid-cols-2 gap-5  ">

                    <div className="flex flex-col ">
                        <label className="font-bold text-lg mb-1" htmlFor="firstName">
                            Nombre
                        </label>
                        <input
                            name='firstName'
                            className={` ${errors.firstName ? 'text-orange-high border-orange-high ' : 'border-gray-500 dark:border-gray-400'} border-2 py-1 px-2  rounded-md outline-none focus:border-blue-500 bg-transparent`}
                            {...register("firstName")}

                        />
                        <p className={` ${errors.firstName ? 'text-orange-high block' : 'invisible'}  `}>{errors.firstName?.message + ''}</p>

                    </div>
                    <div className="flex flex-col ">
                        <label className="font-bold text-lg mb-1" htmlFor="lastName">
                            Apellido
                        </label>
                        <input
                            name='lastName'
                            className={` ${errors.lastName ? 'text-orange-high border-orange-high ' : 'border-gray-500 dark:border-gray-400'} border-2 py-1 px-2  rounded-md outline-none focus:border-blue-500 bg-transparent`}
                            {...register("lastName")}
                        />
                        <p className={` ${errors.lastName ? 'text-orange-high block' : 'invisible'}  `}>{errors.lastName?.message + ''}</p>
                    </div>
                </div>
                
                <div className="flex flex-col  ">
                    <label className="font-bold text-lg mb-1" htmlFor="email">
                        Email
                    </label>
                    <input
                        className={` ${errors.email ? 'text-orange-high border-orange-high ' : 'border-gray-500 dark:border-gray-400'} border-2 py-1 px-2  rounded-md outline-none focus:border-blue-500 bg-transparent`}
                        type="email"
                        name="email"
                        {...register("email")}
                    />
                    <p className={` ${errors.email ? 'text-orange-high block' : 'invisible'} `}>{errors.email?.message + ''}</p>
                </div>
               
                <div className="flex flex-col mb-4 ">
                    <label className="font-bold text-lg mb-1" htmlFor="password">
                        Contraseña
                    </label>
                    <input
                        className={` ${errors.password ? 'text-orange-high border-orange-high ' : 'border-gray-500 dark:border-gray-400'} border-2 py-1 px-2  rounded-md outline-none focus:border-blue-500 bg-transparent`}
                        type="password"
                        name="password"
                        {...register("password")}
                        autoComplete='new-password'
                    />
                    <p className={` ${errors.password ? 'text-orange-high block' : 'invisible'}   `}>{errors.password?.message + ''}</p>
                </div>
                
                <button
                    className='block mb-6 text-gray-900 bg-orange-pastel text-lg rounded py-2.5 w-full'
                    type="submit"
                >
                    Siguiente
                </button>                
            </div>
        </form>
    );
};

export default RegisterComponent;