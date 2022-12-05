import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import ModalEditDescription from './ModalEditDescription';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import { useRouter } from 'next/router';
const DescriptionProfile = ({ user, lender }) => {
    const [description, setDescription] = useState(user?.description)
    const router = useRouter();    
    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    const validationSchema = Yup.object().shape({
        description: Yup.string()
            .required('Ingresa una descripcion corta sobre vos!')
            .max(2000, 'Limite execedido (2000)'),
        aboutme: Yup.string()
            .required('Ingresa una descripcion sobre vos!')
            .max(100, 'Limite execedido (100)'),

    });
    const formOptions = { resolver: yupResolver(validationSchema) };



    const { register, handleSubmit, control, formState } = useForm(formOptions);
    const { errors } = formState;


    const onSubmit = async (values) => {

        setDescription(values)
    };

    return (
        <div className={'flex flex-col gap-4 bg-gray-300 relative dark:bg-gray-700 p-5  border-t dark:border-gray-400 border-gray-500'}>
            <div className={'flex flex-col   gap-2'}>


                <h3 className='text-2xl font-bold leading-6'> Descripcion</h3>
                <div className='py-5 h-auto'>

                    {
                        <span className="text-justify text-lg font-normal ">
                            {description ? description : 'Hola esto es una prueba'}
                        </span>
                    }
                </div>
                {router.asPath === '/profile' && <div className="flex absolute top-5 right-5 items-center">
                    <button
                        type="button"
                        onClick={openModal}
                        className="py-2 px-3   text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-gray-100 hover:text-blue-700  dark:bg-gray-800 dark:text-gray-400  dark:hover:text-white dark:hover:bg-gray-600"
                    >
                        Editar
                    </button>
                    <ModalEditDescription user={user} isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} description={description} setDescription={setDescription} />
                </div>}
            </div>
            <h3 className='text-2xl font-medium leading-6'>{' Como ofrece sus servicios ' + user.name}</h3>
            <div className='py-5 flex flex-row flex-wrap justify-items-center gap-5 h-auto'>
                <div className='flex flex-row items-center gap-5'>
                    <LocalShippingRoundedIcon />

                    <span className="text-justify whitespace-pre-line text-lg font-normal ">
                        Se desplaza a domicilio
                    </span>
                </div>
                <div className='flex flex-row items-center gap-5'>
                    <DevicesRoundedIcon />

                    <span className="text-justify whitespace-pre-line text-lg font-normal ">
                        Online (Discord, Meet, Skype, Zoom, etc)
                    </span>
                </div>
            </div>
            <h3 className='text-2xl  font-medium leading-6'> <SchoolRoundedIcon />{' Formacion: titulos, cursos y certificaciones ' + user.name}</h3>
            <div className='py-5 flex flex-col flex-wrap justify-items-center gap-5 h-auto'>
                <div className='flex flex-row items-center gap-5'>                    

                    <span className="text-justify  whitespace-pre-wrap text-lg font-normal ">
                        -Tecnico en Universitario en desarrollo Web
                    </span>
                </div>
                <div className='inlie-flex flex-col flex-wrap items-center gap-5'>                    

                    <span className="text-justify whitespace-pre-wrap text-lg font-normal ">
                        -Desarrollador React Certificado 
                    </span>
                </div>
            </div>

        </div >

    )
}


export default DescriptionProfile