import React from 'react'

const Progress = ({ currentStep, prevFormStep }) => {
    return (
        <div className='flex flex-col justify-center'>
            <h1 className="flex justify-center text-5xl md:text-6xl font-bold leading-tighter mb-4">
                <span className="bg-clip-text text-center text-transparent bg-gray-700  dark:bg-gray-100 py-2">
                    {'Registrate'}
                </span>
            </h1>
            <div className=' w-full p-2 md:max-w-md place-self-center grid grid-cols-3 '>                
                    <button
                    className={` ${currentStep > 0 ? 'block' : 'invisible' } justify-self-start  `}
                        onClick={prevFormStep}
                        type="button"
                    >
                        back
                    </button>
                

                <span className={'flex justify-self-center '}>Paso {currentStep + 1} de 3</span>
                <span className={''}></span>
            </div>
            
        </div>
    )
}

export default Progress