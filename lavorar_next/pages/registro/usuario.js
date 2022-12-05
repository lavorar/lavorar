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
import RegisterCommonUser from '../../components/SingUp/RegisterCommonUser';
const Register = (jwt) => {    
    return (
        <SignUpLayout >
            <div className="items-center w-full">
                <div className="w-full p-2 md:max-w-md md:mx-auto">
                    <div className='flex flex-col justify-center text-orange-brand'>
                        <h2 className="flex justify-center text-5xl md:text-6xl font-bold leading-tighter mb-4">
                            <span className="bg-clip-text text-center text-transparent bg-gray-700  dark:bg-gray-100 py-2">
                                {'Registrate'}
                            </span>
                        </h2>                        
                    </div>
                    <RegisterCommonUser />
                    <p className={`text-center space-x-6`}>
                        <span className="text-gray-700 dark:text-gray-300 text-sm font-semibold">Ya tienes una cuenta? </span>
                        <a className="text-blue-600 dark:text-[#039be5] cursor-pointer text-sm font-semibold"
                            onClick={() => router.replace('/login')}
                        >Inicia Sesion</a>
                    </p>
                </div>
            </div >           
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