import { Menu, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import { useRouter } from 'next/router';
import { useUser } from '../../lib/AuthContext';
import { unsetToken } from '../../lib/auth';
import BackgroundLetterAvatars from './AvatarInitials';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import PendingRoundedIcon from '@mui/icons-material/PendingRounded';

import Image from 'next/image';
// import { useAuth } from "../../../context/authContext";
// import { useNavigate } from 'react-router-dom';

export default function Example({ children, user }) {
    // const { user, logout, loading } = useAuth();  
    const router = useRouter()
    const handleLogout = async () => {
        unsetToken();

    };
    return (
        <div className="text-right">
            <Menu as="div" className="relative inline-block text-left">
                {({ open }) => (
                    <>
                        <div>

                            <Menu.Button
                                className={` ${user ? '' : 'px-2 py-2'}  ${open ? 'text-blue-600 dark:text-blue-500 dark:bg-gray-200' : ''} inline-flex w-full justify-center rounded-full bg-gray-300 dark:bg-gray-700 dark:hover:bg-black   text-sm font-medium text-gray-900 dark:text-white-ghost hover:bg-gray-200  focus:outline-1 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
                                {children}

                            </Menu.Button>

                        </div>

                        <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="fixed w-full top-14 md:top-12 sm:absolute right-0 sm:-right-10 z-30 mt-4 sm:w-72 origin-top-right divide-y divide-gray-200 rounded-md bg-white-ghost dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {user && <div className='text-bold'>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${active ? 'bg-gray-300 dark:bg-gray-700' : 'dark:bg-gray-800'}  group flex w-full items-center rounded-md px-2 py-2 text-md  text-gray-900 dark:text-white-ghost`}
                                            >
                                                {user?.avatar ?
                                                    <div className="h-[50px] w-[50px] relative aspect-square cursor-pointer mr-5"
                                                    // onClick={router.replace( '/prestadores/' + lender?.Slug )}
                                                    >
                                                        <Image
                                                            src={`/v${user.avatar}`}
                                                            alt={"Picture of the lender " + user?.name}
                                                            layout="fill" // required                   
                                                            objectFit="cover" // change to suit your needs
                                                            className="rounded-full w-full" // just an example
                                                        />
                                                    </div>
                                                    :
                                                    <div className="h-[50px] w-[50px] cursor-pointer aspect-square  mr-5"
                                                    // onClick={router.replace( '/prestadores/' + lender?.Slug )}
                                                    >
                                                        <BackgroundLetterAvatars fontSize='large' firtsName={user?.firstName} lastName={user?.lastName} />
                                                    </div>}{
                                                    user?.name
                                                }
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                                }
                                {user ?
                                    <div
                                        onClick={() => [router.push('/' + user.Slug)]} className="px-1 py-1 ">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'bg-gray-300 dark:bg-gray-700' : 'dark:bg-gray-800'}  group flex w-full items-center rounded-md px-2 py-2 text-md  text-gray-900 dark:text-white-ghost`}
                                                >
                                                    <div className={`rounded-full mr-3 ${active ? 'bg-gray-100 dark:bg-black ' : 'bg-gray-300 dark:bg-gray-600'} h-9 w-9 p-1 text-gray-900 dark:text-white-ghost`}>

                                                        <PersonRoundedIcon />
                                                    </div>
                                                    Tu perfil
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                    :
                                    <></>
                                }

                                {user ?
                                    <div
                                        onClick={() => [router.push('/' + user.Slug + '/contratados')]} className="px-1 py-1 ">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'bg-gray-300 dark:bg-gray-700' : 'dark:bg-gray-800'}  group flex w-full items-center rounded-md px-2 py-2 text-md  text-gray-900 dark:text-white-ghost`}
                                                >
                                                    <div className={`rounded-full mr-3 ${active ? 'bg-gray-100 dark:bg-black ' : 'bg-gray-300 dark:bg-gray-600'} h-9 w-9 p-1 text-gray-900 dark:text-white-ghost`}>

                                                        <BookmarkOutlinedIcon />
                                                    </div>
                                                    Contratados
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                    :
                                    <></>
                                }
                                {user ?
                                    <div
                                        onClick={() => [router.push('/' + user.Slug + '/pendientes')]} className="px-1 py-1 ">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'bg-gray-300 dark:bg-gray-700' : 'dark:bg-gray-800'}  group flex w-full items-center rounded-md px-2 py-2 text-md  text-gray-900 dark:text-white-ghost`}
                                                >
                                                    <div className={`rounded-full mr-3 ${active ? 'bg-gray-100 dark:bg-black ' : 'bg-gray-300 dark:bg-gray-600'} h-9 w-9 p-1 text-gray-900 dark:text-white-ghost`}>

                                                        <PendingRoundedIcon />
                                                    </div>
                                                    Pendientes
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                    :
                                    <></>
                                }
                                {/* {user ?
                                    <div className="px-1 py-1 ">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'bg-gray-300 dark:bg-gray-700' : ' '} group flex w-full items-center rounded-md px-2 py-2 text-md  text-gray-900 dark:text-white-ghost`}
                                                >
                                                    <div className={`rounded-full mr-3 ${active ? 'bg-gray-100 dark:bg-black ' : 'bg-gray-300 dark:bg-gray-600'} h-9 w-9 p-1 text-gray-900 dark:text-white-ghost`}>

                                                        <HelpRoundedIcon />
                                                    </div>
                                                    Ayuda y soporte técnico
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                    :
                                    <> </>
                                } */}
                                {user ?

                                    <div className="px-1 py-1 ">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    onClick={handleLogout}
                                                    className={`${active ? 'bg-gray-300 dark:bg-gray-700 dark:bg-100 ' : ' '}  group flex w-full items-center rounded-md px-2 py-2 text-md  text-gray-900 dark:text-white-ghost`}
                                                >
                                                    <div className={`rounded-full mr-3 ${active ? 'bg-gray-100 dark:bg-black ' : 'bg-gray-300 dark:bg-gray-600'} h-9 w-9 p-1 text-gray-900 dark:text-white-ghost`}>

                                                        <LogoutIcon />
                                                    </div>
                                                    Cerrar sesion
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                    :
                                    <></>
                                }
                                {
                                    !user ?
                                        <div className="py-3 px-7 ">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        onClick={() => [router.push('/login')]}
                                                        className={`${active ? 'bg-opacity-90  ' : ' '}  group flex w-full items-center rounded-full px-10 py-2 text-md  bg-gradient-to-r from-sky-500 to-blue-700 text-white-ghost`}
                                                    >
                                                        <div className={`rounded-full mr-3 h-9 w-9 p-1 text-white-ghost`}>
                                                            <LoginRoundedIcon />
                                                        </div>
                                                        Iniciar Sesion
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </div>
                                        :
                                        <></>
                                }
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
        </div>
    )
}

