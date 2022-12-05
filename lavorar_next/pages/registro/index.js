import RegisterComponent from '../../components/SingUp/RegisterComponent';
import { getIdFromLocalCookie, getTokenFromServerCookie } from '../../lib/auth';
import { fetcher } from '../../lib/api';
import { useRouter } from 'next/router';
import SignUpLayout from '../../components/Layouts/SignUpLayout';
import Progress from '../../components/SingUp/Progress';
import { useState } from 'react';
import LenderChoice from '../../components/SingUp/SecondStep';
import LenderOptions from '../../components/SingUp/LenderOptions';
import LastStep from '../../components/SingUp/LastStep';
import FormCompleted from '../../components/SingUp/FormCompleted';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Link from 'next/link';

const Register = (jwt) => {
    const router = useRouter()
    return (
        <SignUpLayout >
            <div className=" flex items-baseline w-full min-h-screen justify-between ">
                <div className="w-full p-2  md:max-w-2xl lg:max-w-4xl  md:mx-auto">
                    <div className="items-center w-full">

                        <div className='flex flex-col justify-center text-orange-brand'>
                            <h2 className="flex justify-center text-5xl md:text-6xl font-bold leading-tighter mb-10">
                                <span className="bg-clip-text text-ellipsis text-center text-transparent bg-gray-700  dark:bg-gray-100 py-2">
                                    {'Registrate'}
                                </span>

                            </h2>
                            <span className=" flex justify-center text-xl md:text-xl font-medium leading-tighter mb-4 bg-clip-text text-center text-transparent bg-gray-700  dark:bg-gray-100 py-2">
                                {'Elige el tipo de cuenta que se adapte a tus necesidades'}
                            </span>
                        </div>
                        <div className="flex flex-col w-full mt-5 justify-center md:flex-row gap-10 items-center">

                            <div className="w-full max-w-md h-72 flex flex-col justify-between items-center text-center p-5 bg-gray-100 border-4 border-orange-brand rounded-lg shadow-md dark:bg-gray-800 ">
                                <Link href='/registro/usuario'  >
                                    <h5 className="text-center cursor-pointer  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Contratar Servicios  </h5>
                                </Link>
                                <div className='flex flex-col gap-3 justify-center items-center'>
                                    <button
                                        className={``}>

                                        <PersonRoundedIcon sx={{ fontSize: '7.5rem' }} />
                                    </button>
                                    <div onClick={() => router.replace('/registro/usuario')} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">
                                        Registrarse gratis
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full max-w-md h-72 flex flex-col justify-between items-center text-center p-5 bg-gray-100 border-4 border-orange-brand rounded-lg shadow-md dark:bg-gray-800 ">
                                <Link href='/registro/prestador-de-servicios'  >
                                    <h5 className="text-center  cursor-pointer text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Anunciarme y prestar mis servicios</h5>
                                </Link>
                                <div className='flex flex-col gap-3 justify-center items-center'>
                                    <button
                                        className={``}>

                                        <WorkRoundedIcon sx={{ fontSize: '7rem' }} />
                                    </button>
                                    <div onClick={() => router.replace('/registro/prestador-de-servicios')} className="inline-flex items-center px-3 py-2  text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">
                                        Registrarse gratis
                                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <p className={`mt-6 text-center space-x-6`}>
                            <span className="text-gray-700 dark:text-gray-300 text-sm font-semibold">Ya tienes una cuenta? </span>
                            <a className="text-blue-600 dark:text-[#039be5] cursor-pointer text-sm font-semibold"
                                onClick={() => router.replace('/login')}
                            >Inicia Sesion</a>
                        </p>
                    </div >
                </div>
            </div>
        </SignUpLayout>
    );
};

export default Register;

export async function getServerSideProps({ req }) {
    const us = true
    const jwt = getTokenFromServerCookie(req);
    if (jwt) {
        return {
            redirect: {
                destination: '/',
            },
        };
    }
    else {
        return {
            props: {
                us,
            },
        };
    }
}