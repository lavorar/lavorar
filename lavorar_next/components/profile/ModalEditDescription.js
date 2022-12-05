import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import IconWithButton from '../elements/IconWithButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { getTokenFromLocalCookie } from '../../lib/auth';
import axios from 'axios';

export default function ModalEditDescription({ isOpen, setIsOpen, user, closeModal, setDescription, description }) {
    const [numberofcharacters, setNumberofcharacters] = useState(0);
    const validationSchema = Yup.object().shape({
        description: Yup.string()
            .required('Ingresa una descripcion corta sobre vos!')
            .max(2000, 'Limite execedido (2000)'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    const [descriptionModal, setdescriptionModal] = useState(description);


    const { register, handleSubmit, control, formState } = useForm(formOptions);
    const { errors } = formState;


    const onSubmit = async (values) => {
        const jwt = getTokenFromLocalCookie();
        await axios.put(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${user.id}`,
            { description: values.description }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            }
        }).then((data) => {
            console.log('datos modal description', data)
            setDescription(values.description)
            closeModal()
        })
    };
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-100  dark:bg-gray-700 p-6 text-left align-middle shadow-xl transition-all">
                                    <div
                                        className='group absolute top-2 right-2 cursor-pointer  duration-300  text-gray-900  dark:text-white-ghost'>
                                        <IconWithButton onClick={closeModal}>
                                            <CloseRoundedIcon sx={{ fontSize: '25px' }} />
                                        </IconWithButton>

                                    </div>

                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                    >
                                        <div className="flex flex-col  ">
                                            <label className="font-bold text-lg mb-2" htmlFor="aboutme">
                                                Escribe una Descripcion
                                            </label>
                                            <textarea
                                                className={` ${errors.description ? 'text-red-800 dark:text-orange-high border-orange-high ' : 'border-gray-500 dark:border-gray-400'} border-2 h-64 py-1 px-2 rounded-md outline-none focus:border-blue-500 bg-transparent`}
                                                type="description"
                                                name="description"
                                                placeholder='Ingresa una descripcion sobre ti (maximo 420 caracteres), no escribas datos personales, emails, numero de telenofos, links, etc. o tu cuenta sera eliminada'
                                                {...register("description", {
                                                    value: descriptionModal,
                                                    onChange: (e) => {
                                                        setdescriptionModal(e.target.value);
                                                        setNumberofcharacters(e.target.value.length)
                                                    }
                                                })}
                                            />
                                            <p className={` ${errors.aboutme ? 'text-red-800 dark:text-orange-high block' : ''} text-right  `}> {'Te quedan ' + (2400 - numberofcharacters) + ' caracteres'}</p>
                                            <p className={` ${errors.description ? 'text-red-800 dark:text-orange-high block' : 'invisible'}  mb-5`}><ErrorOutlinedIcon /> {errors.description?.message + ''}</p>
                                        </div>
                                        <button
                                            className='block mb-6 text-gray-900 bg-orange-pastel text-lg rounded py-2.5 w-full'
                                            type="submit"
                                        >
                                            Guardar
                                        </button>
                                    </form>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}