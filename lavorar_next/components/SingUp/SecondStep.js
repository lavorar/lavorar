import React, { useState } from 'react'

import { Controller, useForm } from 'react-hook-form';
import { UseFormData } from '../../context/FormContext'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import moment from 'moment';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';

const SecondStep = ({ formStep, nextFormStep }) => {
  const validationSchema = Yup.object().shape({
    phone: Yup.string()
      .required('Ingresa una telefono!'),
    acceptTerms: Yup.bool()
      .oneOf([true], 'debes aceptar los terminos y condiciniones')
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { setFormValues } = UseFormData();

  const { register, handleSubmit, control, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const datebirth = new Date();
  datebirth.setFullYear(datebirth.getFullYear() - 18);
  const formatDate = datebirth.getDate() < 10 ? `0${datebirth.getDate()}` : datebirth.getDate();
  const formatMonth = datebirth.getMonth() < 10 ? `0${datebirth.getMonth()}` : datebirth.getMonth();
  const formattedDate = [datebirth.getFullYear(), formatMonth, formatDate].join('-');

  const [birth, setbirth] = useState(formattedDate)
  const onSubmit = (values) => {
    console.log(values)
    values.birth = moment(birth).format('YYYY-MM-DD')
    console.log(values)
    setFormValues(values);
    nextFormStep();
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
            className={` ${errors.phone ? 'text-red-800 dark:text-orange-high border-orange-high ' : 'border-gray-500 dark:border-gray-400'} border-2 py-1 px-2 rounded-md outline-none focus:border-blue-500 bg-transparent`}
            type="phone"
            name="phone"
            {...register("phone")}
          />
          <p className={` ${errors.phone ? 'text-red-800 dark:text-orange-high block' : 'invisible'}  `}><ErrorOutlinedIcon /> {errors.phone?.message + ''}</p>
        </div>

        <div className="flex flex-col  ">
          <input            
            max={birth}            
            name='birth'
            type="date"
            className={` ${errors.birth ? 'text-red-800 dark:text-orange-high border-orange-high ' : 'border-gray-500 dark:border-gray-400'} border-2 py-1 px-2  rounded-md outline-none focus:border-blue-500 bg-transparent`}
            {...register("birth")}
          />
          <label className="font-bold text-lg mb-1" htmlFor="lastName">
            Fecha de nacimiento
          </label>
          {/* <Controller
            name='birth'
            control={control}
            render={({ field }) => (
              <DatePicker
                {...field}
                className={` ${errors.phone ? 'text-red-800 dark:text-orange-high border-orange-high ' : 'border-gray-500 dark:border-gray-400'} border-2 py-1 px-2 rounded-md outline-none focus:border-blue-500 bg-transparent w-full`}
                value={birth}
                onChange={(e) => { setbirth(e) }}
                selected={birth}
                id='birth'
                dateFormat={'yyyy-MM-dd'}
                placeholderText='Fecha de nacimiento'
                maxDate={birth}
                showYearDropdown
                showMonthDropdown
                scrollableYearDropdown
                dropdownMode='select'
                calendarClassName='text-white'
                locale={'es'}
                autoComplete='off'
              />
            )}
            onChange={(e) => { setbirth(e) }}
          /> */}
          <p className={` ${errors.birth ? 'text-red-800 dark:text-orange-high block' : 'invisible'}  `}> <ErrorOutlinedIcon />{errors.birth?.message + ''}</p>
        </div>
        <div className=''>
          <label
            htmlFor="small-toggle"
            className="inline-flex relative items-center mb-2 mt-2 cursor-pointer"
          >
            <input
              type="checkbox"
              id="small-toggle"
              name="acceptTerms"
              className="sr-only peer"
              {...register("acceptTerms")}
            />
            <div className="w-9 h-5 bg-gray-500  peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-100">
              Terminos y condiciones
            </span>
          </label>
        </div>
        <p className={` ${errors.acceptTerms ? 'text-red-800 dark:text-orange-high block' : 'invisible'} mb-3 `}><ErrorOutlinedIcon /> {errors.acceptTerms?.message + ''}</p>

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