import { useState } from 'react';
import { useRouter } from 'next/router';
import { setToken } from '../../lib/auth';
import { fetcher } from '../../lib/api';
import axios from 'axios';

const LoginComponent = () => {
    const router = useRouter();
    const [userData, setUserData] = useState({
        identifier: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`, {
            identifier: userData.identifier,
            password: userData.password,
        })
            .then(({ data }) => {
                setToken(data);
                console.log(data)
                router.replace('/')
            })
            .catch((error) => {
                alert('credenciales invalidas')
                console.error(error)
            })
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };
    return (
        <div className="items-center w-full">
            <h1 className="flex justify-center text-5xl md:text-6xl font-bold leading-tighter mb-4">
                <span className="bg-clip-text text-center text-transparent bg-gray-700 dark:bg-gray-100 py-2">
                    Iniciar Sesion!
                </span>
            </h1>
            <div className="w-full md:max-w-md md:mx-auto">
                <form
                    onSubmit={handleSubmit}
                    className="mb-4 md:flex md:flex-wrap md:justify-center"
                >
                    <div className="flex flex-col mb-4 md:w-full">
                        <label className="font-bold text-lg mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="border-2 py-2 px-3 border-gray-500 dark:border-gray-400 rounded-md outline-none focus:border-blue-500 bg-transparent"
                            type="email"
                            name="identifier"
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
                        className="block mb-6 text-gray-900 bg-orange-pastel text-lg rounded py-2.5 w-full"
                        type="submit"
                    >
                        Iniciar sesión
                    </button>
                    <p className="text-center space-x-6">
                        <span className="text-gray-700 dark:text-gray-300 text-sm font-semibold">Aun tienes una cuenta? </span>
                        <a className="text-blue-600 dark:text-[#039be5] cursor-pointer text-sm font-semibold"
                            onClick={() => router.replace('/register')}
                        >Registrate</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginComponent;