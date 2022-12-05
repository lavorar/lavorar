import { useRouter } from 'next/router'
import React, { Children } from 'react'
import { UseFormData } from '../../context/FormContext'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
const Progress = ({ currentStep, prevFormStep, back2FormStep, children }) => {
    const { data } = UseFormData()
    const router = useRouter()
    return (
        <div className="items-center w-full">
            <div className="w-full p-2 md:max-w-md md:mx-auto">
                <div className='flex flex-col justify-center '>
                    <h2 className="flex justify-center text-5xl md:text-6xl font-bold leading-tighter mb-4">
                        <span className="bg-clip-text text-center text-transparent bg-gray-700  dark:bg-gray-100 py-2">
                            {'Registrate'}
                        </span>
                    </h2>
                    <div className=' w-full items-center  place-self-center grid grid-cols-4 '>
                        <button
                            className={` ${currentStep > 0 ? 'block' : 'invisible'} w-10  aspect-square focus:outline-none text-white dark:text-gray-900 bg-orange-brand border-2 border-orange-brand hover:bg-transparent hover:text-orange-brand transition-colors duration-500 focus:ring-2 focus:ring-orange-high dark:focus:ring-orange-high font-medium rounded-full text-base   mr-10 my-3  `}
                            onClick={currentStep === 3 && !data.is_lender ? back2FormStep : prevFormStep}
                            type="button"
                        >
                            <ArrowBackRoundedIcon fontSize='small' />    
                                                  
                        </button>


                        <span className={'flex justify-self-center col-span-2 '}>Paso {currentStep + 1} de 5</span>
                        <span className={''}></span>
                    </div>
                </div>
                {children}
                <p className={`${currentStep === 0 ? 'block' : 'hidden'} text-center space-x-6`}>
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-semibold">Ya tienes una cuenta? </span>
                    <a className="text-blue-600 dark:text-[#039be5] cursor-pointer text-sm font-semibold"
                        onClick={() => router.replace('/login')}
                    >Inicia Sesion</a>
                </p>
            </div>
        </div >
    )
}

export default Progress