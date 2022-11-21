import React from 'react'

import { useForm } from 'react-hook-form';
import { UseFormData } from '../../context/FormContext'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const plans = ['Quiero Ofrecer mis servicios', 'Omitir']

const SecondStep = ({ formStep, nextFormStep }) => {
  const validationSchema = Yup.object().shape({
    phone: Yup.string()
      .required('Ingresa una telefono!'),
    birth: Yup.string()
      .required('Ingresa una fecha de nacimiento!')
      .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'La fecha de nacimiento debe tener el formato YYYY-MM-DD'),
    acceptTerms: Yup.bool()
      .oneOf([true], 'debes aceptar los terminos y condiciniones')
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { setFormValues } = UseFormData();

  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (values) => {
    console.log('values', values.is_lender)
    values.is_lender ? values.role = { id: 3 } : ''
    setFormValues(values);
    if (!values.is_lender) {
      nextFormStep();
      nextFormStep();
    }
    else nextFormStep();

  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${formStep === 1 ? 'block' : 'hidden'}`}
    >
      <div className={'flex-col'}>

        <div className="flex flex-col ">
          <label className="font-bold text-lg mb-2" htmlFor="email">
            Telefono
          </label>
          <input
            className={` ${errors.phone ? 'text-orange-high border-orange-high ' : 'border-gray-500 dark:border-gray-400'} border-2 py-1 px-2 rounded-md outline-none focus:border-blue-500 bg-transparent`}
            type="phone"
            name="phone"
            {...register("phone")}
          />
          <p className={` ${errors.phone ? 'text-orange-high block' : 'invisible'}  `}>{errors.phone?.message + ''}</p>
        </div>
        <div className="flex flex-col ">
          <label className="font-bold text-lg mb-1" htmlFor="lastName">
            Fecha de nacimiento
          </label>
          <input
            name='birth'
            type="date"
            className={` ${errors.birth ? 'text-orange-high border-orange-high ' : 'border-gray-500 dark:border-gray-400'} border-2 py-1 px-2  rounded-md outline-none focus:border-blue-500 bg-transparent`}
            {...register("birth")}
          />
          <p className={` ${errors.birth ? 'text-orange-high block' : 'invisible'}  `}>{errors.birth?.message + ''}</p>
        </div>
        <div>
          <label
            htmlFor="small-toggle"
            className="inline-flex relative items-center mb-2 mt-2 cursor-pointer"
          >
            <input
              type="checkbox"
              id="small-toggle"
              name="is_lender"
              className="sr-only peer"
              {...register("is_lender")}
            />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-100">
              Voy a prestar un servicio
            </span>
          </label>
        </div>
        <div className="flex mt-2 flex-row gap-2 items-baseline ">
          <label className="font-bold text-lg" htmlFor="email">
            Terminos y condiciones
          </label>
          <input
            className="flex justify-start border-2 py-2 px-3 border-gray-500 dark:border-gray-400 rounded-md outline-none focus:border-blue-500 bg-transparent"
            type="checkbox"
            name="acceptTerms"
            {...register("acceptTerms")}
          />
        </div>
        <p className={` ${errors.acceptTerms ? 'text-orange-high block' : 'invisible'} mb-3 `}>{errors.acceptTerms?.message + ''}</p>

        <button
          className='block mb-6 text-gray-900 bg-orange-pastel text-lg rounded py-2.5 w-full'
          type="submit"
        >
          Siguiente
        </button>
      </div>
    </form>
  )
}

export default SecondStep