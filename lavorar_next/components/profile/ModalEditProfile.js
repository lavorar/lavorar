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
import AddAPhoto from '@mui/icons-material/AddAPhoto';
import Image from 'next/image';
import { getTokenFromLocalCookie } from '../../lib/auth';
import { useRouter } from 'next/router';
import IconWithButton from '../elements/IconWithButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { slugify } from '../SingUp/LenderOptions';
import { Avatar } from '@mui/material';


export default function MyModal({ isOpen, setIsOpen, user }) {
    const router = useRouter()
    const validationSchema = Yup.object().shape({
        aboutme: Yup.string()
            .required('Ingresa una descripcion sobre vos!'),
        phone: Yup.string()
            .required('Ingresa una telefono!'),
        categories: Yup.array()
            .required('Ingresa una categoria!')
            .nullable()
            .min(1, 'Selecciona una categoria por lo menos'),
        localidad: Yup.object().shape({
            label: Yup.string().required(),
            value: Yup.string().required(),
        })

    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, control, formState } = useForm(formOptions);
    const { errors } = formState;
    const { ref, onChange, name, type, ...rest } = register('avatar');

    const [image, setImage] = useState(user.avatar ? '/f_auto,q_auto,c_thumb,r_max/v' + user.avatar : null);
    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const tmpImage = event.target.files[0];
            avatar.current = event.target.files
            setImage(URL.createObjectURL(tmpImage));
        }
    };


    const isValidNewOption = (inputValue, selectValue) =>
        inputValue.length > 0 && selectValue.length < 3;
    const getCategories = async () => {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/categories`)


        const options = data.data.map((categorie) => (
            {
                value: categorie.id,
                label: categorie.attributes.name,
                id: categorie.id
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
    const [cityId, setcityId] = useState(user.provincia?.identificador)
    const [cityValue, setcityValue] = useState({ value: user.localidad?.identificador, label: user.localidad?.name })

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
            staleTime: Infinity
        }
    )

    const handleProvinceChange = (e) => {
        console.log(e)
        control._formValues.provincia = e
        control._formValues.localidad = undefined
        setcityId(e.identificador)
        setprovinceValue(e)
        setcityValue(null)

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

    const avatar = useRef(null);

    const handleClick = event => {
        avatar.current.click();
    };

    const uploadToServer = async (file) => {
        const formData = new FormData();
        formData.append('inputFile', file);
        formData.append('user_id', user.id);
        console.log(formData)
        await axios.post(`/api/upload/`,
            formData,
        )
            .then(({ data }) => {
                console.log(data)
                router.reload('/profile')
                // return data
            })

            .catch((error) => {
                console.error(JSON.stringify(error));
                router.reload('/profile')
            })
    };

    const onSubmit = async (values) => {
        console.log('data', values)
        const files = values.avatar
        if (image === null) {
            values.avatar = ''
        }
        else {
            delete values.avatar
        }
        let slugprovince = slugify(values.provincia.label)
        let slugcity = slugify(values.localidad.label)
        let provincia = { name: values.provincia.label, identificador: values.provincia.identificador, Slug: slugprovince }
        console.log('provicnes', values.provincia)
        let responseProvince = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/provinces1/${provincia.Slug}`)
            .then(({ data }) => {
                return data.data
            }).catch(async (error) => {
                return await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/provinces`, { data: provincia })
                    .then(({ data }) => {
                        return data.data
                    })
                    .catch((error) => {
                        return error
                    })
            })
        values.provincia = responseProvince
        let localidad = { name: values.localidad.label, identificador: values.localidad.identificador, slug: slugcity, province: values.provincia }
        let responseCity = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/citys1/${localidad.slug}`)
            .then(({ data }) => {
                return data.data
            }).catch(async (error) => {
                return await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/cities`, { data: localidad })
                    .then(({ data }) => {
                        return data.data
                    })
                    .catch((error) => {
                        return error
                    })
            })
        values.localidad = responseCity
        const jwt = getTokenFromLocalCookie();
        const responsePut = await axios.put(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${user.id}`,
            values,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`,
                }
            }
        ).then((data) => {
            if (image === null) {
                router.reload('/profile')
            }
            // router.reload('/profile')
            return data
        }).catch((error) => {
            if (image === null) {
                router.reload('/profile')
            }
            return error
        });
        if (image !== null && files.length > 0) {
            uploadToServer(files[0])
        }
        // console.log('data', responsePut)
    }
    const [provinceValue, setprovinceValue] = useState({ value: user.provincia?.identificador, label: user.provincia?.name })
    const [phone, setphone] = useState(user.phone)
    const [aboutme, setaboutme] = useState(user.aboutme)

    function closeModal() {
        setIsOpen(false)
        setImage(user.avatar ? '/f_auto,q_auto,c_thumb,r_max/v' + user.avatar : null);
    }
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-30" onClose={closeModal}>
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
                                <Dialog.Panel className="w-full max-w-md transform  rounded-2xl bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-50 p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl font-bold leading-6 text-gray-900 dark:text-gray-50"
                                    >
                                        Editar Perfil
                                        <div
                                            className='group absolute top-2 right-2 cursor-pointer  duration-300  text-gray-900  dark:text-white-ghost'>
                                            <IconWithButton onClick={closeModal}>
                                                <CloseRoundedIcon sx={{ fontSize: '25px' }} />
                                            </IconWithButton>

                                        </div>

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
                                                        <div>
                                                            <div
                                                                className="h-20 w-20 relative aspect-square cursor-pointer"
                                                                onClick={handleClick}
                                                            >
                                                                <Image
                                                                    alt="Picture of the user"
                                                                    layout="fill" // required                   
                                                                    objectFit="cover" // change to suit your needs
                                                                    className="rounded-full w-full"
                                                                    src={image}

                                                                />
                                                                <div className="absolute bottom-0 left-14">
                                                                    <AddAPhoto />
                                                                </div>
                                                                <input
                                                                    {...rest}
                                                                    type="file"
                                                                    accept="image/*"
                                                                    className={`hidden`}
                                                                    name="avatar"
                                                                    ref={(e) => {
                                                                        ref(e)
                                                                        avatar.current = e // you can still assign to ref
                                                                    }}
                                                                    onChange={(e) => {
                                                                        uploadToClient(e)
                                                                        onChange(e)
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="absolute top-32 left-40 cursor-pointer flex-row flex items-center gap-2 "
                                                                onClick={(e) => {
                                                                    setImage(null)
                                                                    onChange(e)
                                                                }}
                                                            >
                                                                <Avatar sx={{ background: '#111827' }}>
                                                                    <DeleteRoundedIcon sx={{ color: '#ef4444' }} fontSize='large' />
                                                                </Avatar>
                                                                Eliminar Foto
                                                            </div>
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
                                                                name="avatar"
                                                                ref={(e) => {
                                                                    ref(e)
                                                                    avatar.current = e // you can still assign to ref
                                                                }}
                                                                onChange={(e) => {
                                                                    uploadToClient(e)
                                                                    onChange(e)
                                                                }}
                                                            // {...register("avatar", {
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
                                                    value={phone}
                                                    {...register("phone", {
                                                        onChange: (e) => setphone(e.target.value)
                                                    })}
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
                                                    value={aboutme}
                                                    {...register("aboutme",
                                                        {
                                                            onChange: (e) => setaboutme(e.target.value)
                                                        })}

                                                />
                                                <p className={` ${errors.aboutme ? 'text-orange-high block' : 'invisible'}  `}>{errors.aboutme?.message + ''}</p>
                                            </div>
                                            {
                                                user.role.id === 3 ?
                                                    <>
                                                        <div className="flex flex-col text-black">
                                                            <label className='mb-5 dark:text-gray-50'>Categoria (3 max)</label>

                                                            <Controller
                                                                className='mt-5 '
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
                                                                defaultValue={user.categories?.map((ele) => (
                                                                    { value: ele.id, label: ele.name, id: ele.id }
                                                                ))}
                                                                name="categories"
                                                                control={control}
                                                            />
                                                            <p className={` ${errors.categories ? 'text-orange-high block' : 'invisible'}  `}>
                                                                {errors.categories?.message}</p>

                                                        </div>


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
                                                                        value={provinceValue}
                                                                        onChange={handleProvinceChange}
                                                                        id="provincia" instanceId="provincia"
                                                                    // getOptionLabel={(option) => option.nombre}
                                                                    // getOptionValue={(option) => option.nombre} // It should be unique value in the options. E.g. ID
                                                                    />
                                                                )}
                                                                // onChange={handleProvinceChange}
                                                                defaultValue={{ value: user.provincia?.identificador, label: user.provincia?.name }}
                                                                name="provincia"
                                                                control={control}
                                                            />
                                                            <p className={` ${errors.provincia ? 'text-orange-high block' : 'invisible'}  `}>{'Debes seleccionar una provincia'}</p>
                                                        </div>
                                                        <div className="flex flex-col text-black">
                                                            <label className='mb-5 dark:text-gray-50 '>Localidad</label>
                                                            <Controller
                                                                className='mt-5 z-30'
                                                                render={({ field }) => (
                                                                    <Select
                                                                        {...field}
                                                                        placeholder='Ingresa una Ciudad'
                                                                        options={citys.data}
                                                                        value={cityValue}

                                                                        id="localidad" instanceId="localidad"
                                                                        onChange={(e) => {
                                                                            setcityValue(e)
                                                                            control._formValues.localidad = e
                                                                        }}

                                                                    // getOptionLabel={(option) => option.nombre}
                                                                    // getOptionValue={(option) => option.nombre}
                                                                    />
                                                                )}
                                                                defaultValue={cityValue}
                                                                // 
                                                                name="localidad"
                                                                control={control}
                                                            />
                                                            <p className={` ${errors.localidad ? 'text-orange-high block' : 'invisible'}  `}>{'Debes seleccionar una ciudad'}</p>
                                                        </div>
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                            }

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


