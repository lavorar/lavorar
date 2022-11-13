import { Dialog, Transition } from '@headlessui/react'
import { yupResolver } from '@hookform/resolvers/yup';
import { Fragment, useRef, useState } from 'react'
import { useForm, Controller, useController } from 'react-hook-form';
import { components } from "react-select";
import Select from 'react-select'
import { useQuery } from 'react-query';
import axios from 'axios'
import * as Yup from 'yup';
import BackgroundLetterAvatars from '../elements/AvatarInitials';
import { useFetchUser } from '../../lib/authContext';
import AddAPhoto from '@mui/icons-material/AddAPhoto';
import Image from 'next/image';

export default function MyModal({ isOpen, setIsOpen, user }) {

    const validationSchema = Yup.object().shape({
        aboutme: Yup.string()
            .required('Ingresa una descripcion sobre vos!'),
        phone: Yup.string()
            .required('Ingresa una telefono!'),
        categories: Yup.array()
            .required('Ingresa una categoria!')
            .nullable()
            .min(1, 'Selecciona una categoria por lo menos'),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, control, formState } = useForm(formOptions);
    const { errors } = formState;
    const { ref, onChange, name, type, ...rest } = register('profile_pic');

    const [image, setImage] = useState(user?.profile_pic ? 'http://localhost:1337' + user.profile_pic.formats.thumbnail.url : null);
    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const tmpImage = event.target.files[0];
            setImage(URL.createObjectURL(tmpImage));
        }
    };



    const getUser = async () => {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me`)
        return data
    }
    const isValidNewOption = (inputValue, selectValue) =>
        inputValue.length > 0 && selectValue.length < 3;
    const getCategories = async () => {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/categories`)


        const options = data.data.map((categorie) => (
            {
                value: categorie.id,
                label: categorie.attributes.name,
            }
        ))
        return options
    }

    const querycategories = useQuery(['todos'], getCategories, {
        staleTime: Infinity
    })

    const getProvinces = async () => {
        const { data } = await axios.get(`https://apis.datos.gob.ar/georef/api/provincias?campos=nombre`)
        const options = []
        data.provincias.map((provice) => (
            options.push({
                value: provice.id,
                label: provice.nombre,
                identificador: provice.id,
                name: provice.nombre,
            })
        ))
        return options

    }

    const provinces = useQuery(['provinces'], getProvinces, { staleTime: Infinity })
    const [cityId, setcityId] = useState(user.provincia.identificador)
    const [cityValue, setcityValue] = useState({ id: 1, name: 'ingresa una cuidad', label: 'ingresa una cuidad' })    

    const getCitys = async (cityId) => {         
        const { data } = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${cityId}&campos=nombre&max=400`)
        const options = []
        data.localidades.map((city) => (
            city.nombre = city.nombre.toLowerCase(),
            city.nombre = city.nombre.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()),
            options.push({
                value: city.id,
                label: city.nombre,
                identificador: city.id,
                name: city.nombre,
            })
        ))
        return options        
    }

    const citys = useQuery(
        ['citys', cityId],
        () => getCitys(cityId),
        {
            enabled: Boolean(cityId),
            staleTime: Infinity
        }
    )
    // console.log(citys)

    const handleProvinceChange = (e) => {
        control._formValues.provincia = e
        setcityId(e.identificador)
        control._formValues.localidad = undefined
        setcityValue({ id: 1, name: 'ingresa una cuidad', label: 'ingresa una cuidad' })
    }

    const Menu = props => {
        const optionSelectedLength = props.getValue().length || 0;
        return (
            <components.Menu {...props}>
                {optionSelectedLength < 3 ? (
                    props.children
                ) : (
                    <div style={{ margin: 15 }}>LImite alcanzado</div>
                )}
            </components.Menu>
        );
    };

    const profile_pic = useRef(null);

    const handleClick = event => {
        profile_pic.current.click();
    };

    const onSubmit = (values) => {
        console.log(values)
    }
    function closeModal() {
        setIsOpen(false)
        setImage(user?.profile_pic ? 'http://localhost:1337' + user.profile_pic.formats.thumbnail.url : null)
    }
    console.log(user)
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

                    <div className="fixed inset-0 overflow-y-auto ">
                        <div className="flex min-h-full items-center  justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-50 p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-50"
                                    >
                                        Editar Perfil
                                    </Dialog.Title>
                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        className={`p-3`}
                                    >
                                        <div className={'flex-col'}>
                                            <p className="font-bold text-lg mb-2">
                                                {user?.firstName + ' ' + user?.lastName}
                                            </p>
                                            <div className={'inline-block'}>
                                                {
                                                    image ?

                                                        <div
                                                            className="relative cursor-pointer "
                                                            onClick={handleClick}
                                                        >
                                                            <Image
                                                                width={72}
                                                                height={72}
                                                                className="rounded-full"
                                                                src={image}
                                                                alt="img"
                                                            />
                                                            <div className="absolute bottom-0 left-14">
                                                                <AddAPhoto />
                                                            </div>
                                                            <input
                                                                {...rest}
                                                                type="file"
                                                                accept="image/*"
                                                                className={`hidden`}
                                                                name="profile_pic"
                                                                ref={(e) => {
                                                                    ref(e)
                                                                    profile_pic.current = e // you can still assign to ref
                                                                }}
                                                                onChange={(e) =>
                                                                    uploadToClient(e)
                                                                }
                                                            />
                                                        </div>
                                                        :
                                                        <div
                                                            className="relative cursor-pointer "
                                                            onClick={handleClick}
                                                        >
                                                            <BackgroundLetterAvatars
                                                                width={72} fontSize='xx-large'
                                                                firtsName={user?.firstName}
                                                                lastName={user?.lastName}
                                                            />
                                                            <div className="absolute bottom-0 left-14">
                                                                <AddAPhoto />
                                                            </div>
                                                            <input
                                                                {...rest}
                                                                type="file"
                                                                accept="image/*"
                                                                className={`hidden`}
                                                                name="profile_pic"
                                                                ref={(e) => {
                                                                    ref(e)
                                                                    profile_pic.current = e // you can still assign to ref
                                                                }}

                                                                onChange={(e) =>
                                                                    uploadToClient(e)
                                                                }
                                                            // {...register("profile_pic", {
                                                            //     onChange: (e) => uploadToClient(e)
                                                            // })}
                                                            />
                                                        </div>



                                                }

                                            </div>
                                            <div className="flex flex-col mt-2 ">
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
                                                <label className="font-bold text-lg mb-2" htmlFor="aboutme">
                                                    Sobre mi
                                                </label>
                                                <input
                                                    className={` ${errors.aboutme ? 'text-orange-high border-orange-high ' : 'border-gray-500 dark:border-gray-400'} border-2 py-1 px-2 rounded-md outline-none focus:border-blue-500 bg-transparent`}
                                                    type="aboutme"
                                                    name="aboutme"
                                                    {...register("aboutme")}
                                                />
                                                <p className={` ${errors.aboutme ? 'text-orange-high block' : 'invisible'}  `}>{errors.aboutme?.message + ''}</p>
                                            </div>
                                            {
                                                user ?
                                                    <div className="flex flex-col text-black">
                                                        <label className='mb-5 dark:text-gray-50'>Categoria (3 max)</label>

                                                        <Controller
                                                            className='mt-5 '
                                                            rules={{ required: true }}
                                                            render={({ field }) => (
                                                                <Select
                                                                    components={{ Menu }}
                                                                    {...field}

                                                                    options={querycategories?.data}
                                                                    isMulti
                                                                    placeholder='Habilidad o rubro al que te dedicas'
                                                                    id="categories" instanceId="categories"
                                                                    isValidNewOption={isValidNewOption}

                                                                // getOptionLabel={(option) => option.attributes.name}
                                                                // getOptionValue={(option) => option.id} // It should be unique value in the options. E.g. ID

                                                                />

                                                            )}
                                                            onChange={(e) => { setcategorieoptions(e) }}
                                                            defaultValue={user?.categories.map((ele) => (
                                                                { value: ele.id, label: ele.name }
                                                            ))}
                                                            name="categories"
                                                            control={control}
                                                        />
                                                        <p className={` ${errors.categories ? 'text-orange-high block' : 'invisible'}  `}>
                                                            {errors.categories?.message}</p>

                                                    </div>
                                                    :
                                                    <>
                                                    </>
                                            }

                                            <div className="flex flex-col text-black">
                                                <label className='mb-5 dark:text-gray-50'>Provincia</label>
                                                <Controller
                                                    className='mt-5 '
                                                    render={({ field }) => (
                                                        <Select
                                                            {...field}
                                                            placeholder='Provincia'
                                                            options={provinces.data}
                                                            isDisabled={provinces.isLoading}
                                                            onChange={handleProvinceChange}
                                                            id="provincia" instanceId="provincia"
                                                        // getOptionLabel={(option) => option.nombre}
                                                        // getOptionValue={(option) => option.nombre} // It should be unique value in the options. E.g. ID
                                                        />
                                                    )}
                                                    defaultValue={{value: user.provincia.id, label: user.provincia.name}}
                                                    name="provincia"
                                                    control={control}
                                                />
                                                <p className={` ${errors.provincia ? 'text-orange-high block' : 'invisible'}  `}>{'Debes seleccionar una provincia'}</p>
                                            </div>
                                            <div className="flex flex-col text-black">
                                                <label className='mb-5 dark:text-gray-50'>Provincia</label>
                                                <Controller
                                                    className='mt-5 '
                                                    render={({ field }) => (
                                                        <Select
                                                            {...field}                                                            
                                                                                                                    
                                                            placeholder='Ingresa una Ciudaddd'
                                                            options={citys.data}
                                                            id="localidad" instanceId="localidad"
                                                            
                                                            
                                                        // getOptionLabel={(option) => option.nombre}
                                                        // getOptionValue={(option) => option.nombre}
                                                        />
                                                    )}
                                                    onChange={(e) => { setcityValue(e) }}
                                                    defaultValue={{ value: user.localidad.id, label: user.localidad.name }}
                                                    name="localidad"
                                                    control={control}
                                                />
                                                <p className={` ${errors.localidad ? 'text-orange-high block' : 'invisible'}  `}>{'Debes seleccionar una ciudad'}</p>
                                            </div>

                                            <button
                                                className='block mb-6 text-gray-900 bg-orange-pastel text-lg rounded py-2.5 w-full'
                                                type="submit"
                                            >
                                                Guardar
                                            </button>
                                        </div>
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


