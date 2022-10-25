import React, { Children } from 'react'

const Progress = ({ currentStep, prevFormStep, children }) => {
    return (
        <div className="items-center w-full">
            <div className="w-full p-2 md:max-w-md md:mx-auto">
                <div className='flex flex-col justify-center text-orange-brand'>
                    <h1 className="flex justify-center text-5xl md:text-6xl font-bold leading-tighter mb-4">
                        <span className="bg-clip-text text-center text-transparent bg-gray-700  dark:bg-gray-100 py-2">
                            {'Registrate'}
                        </span>
                    </h1>
                    <div className=' w-full p-2 md:max-w-md place-self-center grid grid-cols-3 '>
                        <button
                            className={` ${currentStep > 0 ? 'block' : 'invisible'} justify-self-start  `}
                            onClick={prevFormStep}
                            type="button"
                        >
                            Volver
                        </button>


                        <span className={'flex justify-self-center '}>Paso {currentStep + 1} de 5</span>
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
        </div>
    )
}

export default Progress