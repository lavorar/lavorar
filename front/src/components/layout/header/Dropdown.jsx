import { Menu, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import { useAuth } from "../../../context/authContext";
import { useNavigate } from 'react-router-dom';

export default function Example(props) {
    const { user, logout, loading } = useAuth();
    const navigate = useNavigate("/")
    const handleLogout = async () => {
        try {
            await logout();
        } catch {
            console.log(error);
        }
         navigate("/");
    };
    return (
        <div className="text-right">
            <Menu as="div" className="relative inline-block text-left">
                {({ open }) => (
                    <>
                        <div>
                            <Menu.Button
                                className={`  ${open ? 'text-blue-600 dark:text-blue-500 dark:bg-gray-200' : ''} inline-flex w-full justify-center rounded-full bg-gray-300 dark:bg-gray-700 dark:hover:bg-black px-2 py-2 text-sm font-medium text-gray-900 dark:text-white-ghost hover:bg-gray-200  focus:outline-1 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
                                {props.children}

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
                            <Menu.Items className="absolute right-0 mt-4 w-72 origin-top-right divide-y divide-gray-200 rounded-md bg-white-ghost dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {user ?
                                    <div className="px-1 py-1 ">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'bg-gray-300 dark:bg-gray-700' : 'dark:bg-gray-800'}  group flex w-full items-center rounded-md px-2 py-2 text-md  text-gray-900 dark:text-white-ghost`}
                                                >
                                                    <div className={`rounded-full mr-3 ${active ? 'bg-gray-100 dark:bg-black ' : 'bg-gray-300 dark:bg-gray-600'} h-9 w-9 p-1 text-gray-900 dark:text-white-ghost`}>

                                                        <SettingsRoundedIcon />
                                                    </div>
                                                    Configuracion
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                    :
                                    <></>
                                }
                                { user ?
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
                                }
                                {   user ? 

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
                                                onClick={() => [navigate('/login')]}                                            
                                                className={`${active ? 'bg-opacity-90  ' : ' '}  group flex w-full items-center rounded-full px-10 py-2 text-md bg-[#0343F5] bg-gradient bg-gradient-to-l text-white-ghost`}
                                            >
                                                <div className={`rounded-full mr-3 ${active ? ' ' : 'bg-[#0343F5]'} h-9 w-9 p-1 text-white-ghost`}>     
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

function EditInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    )
}

function EditActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    )
}

function DuplicateInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 4H12V12H4V4Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path
                d="M8 8H16V16H8V8Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    )
}

function DuplicateActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 4H12V12H4V4Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path
                d="M8 8H16V16H8V8Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    )
}

function ArchiveInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="8"
                width="10"
                height="8"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <rect
                x="4"
                y="4"
                width="12"
                height="4"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function ArchiveActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="8"
                width="10"
                height="8"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <rect
                x="4"
                y="4"
                width="12"
                height="4"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function MoveInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function MoveActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    )
}

function DeleteInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function DeleteActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    )
}
