import { useState } from 'react';
import { useRouter } from 'next/router';
import { setToken } from '../lib/auth';
import { fetcher } from '../lib/api';

const RegisterComponent = () => {
    const router = useRouter();
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        phone: '',
        name: '',
        surname: '',
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
                        username: userData.username,
                        phone: userData.phone,
                        name: userData.name,
                        surname: userData.surname,
                    }),
                    method: 'POST',
                }
            );
            console.log(responseData)
            setToken(responseData);
            router.push('/');
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };
    return (
        <div className="flex w-full">
            <div className="w-full bg-white border-2 rounded p-8 m-4 md:max-w-sm md:mx-auto">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-brand to-blue-300 py-2">
                        Registrate!
                    </span>
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="mb-4 md:flex md:flex-wrap md:justify-between"
                >
                    <div className="flex flex-col mb-4 md:w-full">
                        <label className="font-bold text-lg mb-2" htmlFor="username">
                            Nombre de usuario
                        </label>
                        <input
                            className="border-2 py-2 px-3"
                            type="text"
                            name="username"
                            onChange={(e) => handleChange(e)}

                        />
                    </div>
                    <div className="flex flex-col mb-4 md:w-full">
                        <label className="font-bold text-lg mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="border-2 py-2 px-3"
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
                            className="border-2 py-2 px-3"
                            type="password"
                            name="password"
                            onChange={(e) => handleChange(e)}

                        />
                    </div>
                    <div className="flex flex-col mb-4 md:w-full">
                        <label className="font-bold text-lg mb-2" htmlFor="name">
                            Nombre
                        </label>
                        <input
                            className="border-2 py-2 px-3"
                            type="text"
                            name="name"
                            onChange={(e) => handleChange(e)}

                        />
                    </div>
                    <div className="flex flex-col mb-4 md:w-full">
                        <label className="font-bold text-lg mb-2" htmlFor="surname">
                            Apellido
                        </label>
                        <input
                            className="border-2 py-2 px-3"
                            type="text"
                            name="surname"
                            onChange={(e) => handleChange(e)}

                        />
                    </div>
                    <div className="flex flex-col mb-4 md:w-full">
                        <label className="font-bold text-lg mb-2" htmlFor="phone">
                            Numero telefonico
                        </label>
                        <input
                            className="border-2 py-2 px-3"
                            type="text"
                            name="phone"
                            onChange={(e) => handleChange(e)}

                        />
                    </div>
                    <button
                        className="block bg-teal-400 text-lg rounded p-4 mx-auto"
                        type="submit"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterComponent;