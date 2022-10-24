import { useState } from 'react';
import { useRouter } from 'next/router';
import { getIdFromLocalCookie, getTokenFromLocalCookie, setToken } from '../../lib/auth';
import { fetcher } from '../../lib/api';
import { useFetchUser } from '../../lib/authContext';

const RegisterComponent = () => {
    const [user, setUser] = useState({user: null, jwt: ''})
    const router = useRouter();
    const [registration, setregistration] = useState(false)
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        name: '',
        surname: '',
        birth: '',
        city: '',
        province: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const responseData = await fetcher(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local/register`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: userData.email,
                        password: userData.password,
                        username: userData.email,
                        name: userData.name,
                        surname: userData.surname,
                        birth: userData.birth,
                    }),
                    method: 'POST',
                }
            );
            setregistration(true)
            console.log(responseData)
            setToken(responseData);
            setUser({ ...user, user: responseData.user, jwt: responseData.jwt })
            console.log('id user', user)
        } catch (error) {
            console.error(error);
        }
    };

    const handleLender = async (e) => {
         const id = user.user.id
        console.log('id user', user)
         const jwt = user.jwt;
         try {
             const responseData = await fetcher(
                 `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${id}`,
                 {
                     headers: {
                         'Content-Type': 'application/json',
                         Authorization: `Bearer ${jwt}`,
                     },
                     body: JSON.stringify({
                         is_lender: true,
                         province: userData.province,
                         city: userData.city,
                     }),
                     method: 'PUT',
                 }
             );
             console.log(responseData)

         } catch (error) {
             console.error(error);
         }
         router.replace('/')
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };
    return (
        <div className="items-center w-full">            
            <div className="w-full p-2 md:max-w-md md:mx-auto">
                <form
                    onSubmit={handleSubmit}
                    className="mb-4 md:flex md:flex-wrap md:justify-center"
                >
                    <div className={` ${registration ? 'hidden' : 'flex-col'}  `}>

                        <div className="grid grid-cols-2 gap-5 mb-4 md:w-full">
                            <div className="flex flex-col  md:w-full">
                                <label className="font-bold text-lg mb-2" htmlFor="email">
                                    Nombre
                                </label>
                                <input
                                    className="border-2 py-2 px-3 border-gray-500 dark:border-gray-400 rounded-md outline-none focus:border-blue-500 bg-transparent"
                                    type="text"
                                    name="name"
                                    onChange={(e) => handleChange(e)}                                    
                                />
                            </div>
                            <div className="flex flex-col md:w-full">
                                <label className="font-bold text-lg mb-2" htmlFor="email">
                                    Apellido
                                </label>
                                <input
                                    className="border-2 py-2 px-3 border-gray-500 dark:border-gray-400 rounded-md outline-none focus:border-blue-500 bg-transparent"
                                    type="text"
                                    name="surname"
                                    onChange={(e) => handleChange(e)}                                    
                                />
                            </div>
                        </div>                       
                        <div className="grid grid-cols-2 gap-5 mb-4 md:w-full">
                            <div className="flex flex-col md:w-full">
                                <label className="font-bold text-lg mb-2" htmlFor="password">
                                    Fecha de nacimiento
                                </label>
                                <input
                                    className="border-2 py-2 px-3  border-gray-500 dark:border-gray-400  rounded-md outline-none focus:border-blue-500 bg-transparent"
                                    type="date"
                                    name="birth"
                                    onChange={(e) => handleChange(e)}

                                />
                            </div>
                            <div className="flex flex-col md:w-full">
                                <label className="font-bold text-lg mb-2" htmlFor="email">
                                    Telefono
                                </label>
                                <input
                                    className="border-2 py-2 px-3 border-gray-500 dark:border-gray-400 rounded-md outline-none focus:border-blue-500 bg-transparent"
                                    type="phone"
                                    name="surname"
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                        </div>                       
                        <div className="flex flex-col mb-4 md:w-full">
                            <label className="font-bold text-lg mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="border-2 py-2 px-3 border-gray-500 dark:border-gray-400 rounded-md outline-none focus:border-blue-500 bg-transparent"
                                type="email"
                                name="email"
                                onChange={(e) => handleChange(e)}

                            />
                        </div>
                        <div className="flex flex-col mb-6 md:w-full">
                            <label className="font-bold text-lg mb-2" htmlFor="password">
                                Contraseña
                            </label>
                            <input
                                className="border-2 py-2 px-3  border-gray-500 dark:border-gray-400  rounded-md outline-none focus:border-blue-500 bg-transparent"
                                type="password"
                                name="password"
                                onChange={(e) => handleChange(e)}

                            />
                        </div>                      
                        <button
                            className='block mb-6 text-gray-900 bg-orange-pastel text-lg rounded py-2.5 w-full'
                            type="submit"
                        >
                            Registrarse
                        </button>
                        <p className="text-center space-x-6">
                            <span className="text-gray-700 dark:text-gray-300 text-sm font-semibold">Ya tienes una cuenta? </span>
                            <a className="text-blue-600 dark:text-[#039be5] cursor-pointer text-sm font-semibold"
                                onClick={() => router.replace('/login')}
                            >Inicia Sesion</a>
                        </p>
                    </div>
                    <div className={` ${registration ? 'block' : 'hidden'}  `}>
                        <div className="flex flex-col mb-6 md:w-full">
                            <label className="font-bold text-lg mb-2" htmlFor="password">
                                Provincia
                            </label>
                            <input
                                className="border-2 py-2 px-3  border-gray-500 dark:border-gray-400  rounded-md outline-none focus:border-blue-500 bg-transparent"
                                type="text"
                                name="province"
                                onChange={(e) => handleChange(e)}

                            />
                        </div>
                        <div className="flex flex-col mb-6 md:w-full">
                            <label className="font-bold text-lg mb-2" htmlFor="password">
                                localidad
                            </label>
                            <input
                                className="border-2 py-2 px-3  border-gray-500 dark:border-gray-400  rounded-md outline-none focus:border-blue-500 bg-transparent"
                                type="text"
                                name="city"
                                onChange={(e) => handleChange(e)}

                            />
                        </div>
                        <button
                            onClick={(e) => handleLender(e)}
                            className="block text-white bg-gradient-to-r mb-6 px-3 from-orange-400 to-orange-600 text-lg rounded py-2.5 w-full"
                            type="button"
                        >
                            Quiero ofrecer mis servicios
                        </button>
                        <p className="text-center space-x-6">

                            <a className="text-blue-600 dark:text-[#039be5] cursor-pointer text-sm font-semibold"
                                onClick={() => router.replace('/')}
                            >Omitir este paso</a>
                        </p>
                    </div>




                </form>
            </div>
        </div>
    );
};

export default RegisterComponent;