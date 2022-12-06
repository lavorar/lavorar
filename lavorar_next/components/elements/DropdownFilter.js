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
import HomeSearchBar from './HomeSearchBar';
// import { useAuth } from "../../../context/authContext";
// import { useNavigate } from 'react-router-dom';

export default function Example({ children, user }) {
    // const { user, logout, loading } = useAuth();  
    const router = useRouter()
    const handleLogout = async () => {
        unsetToken();

    };
    return (
        <div className="relative text-right w-full">
            <Menu as="div" className=" inline-flex  justify-end  text-left">
                {({ open }) => (
                    <>
                        <div className=' w-fit'>

                            <Menu.Button
                                className={` ${user ? '' : 'px-2 py-2'}  ${open ? 'text-blue-600 dark:text-blue-500 dark:bg-gray-700' : ''} inline-flex w-full justify-center rounded-full bg-gray-300 dark:bg-gray-700 dark:hover:bg-black   text-sm font-medium text-gray-900 dark:text-white-ghost hover:bg-gray-200  focus:outline-1 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
                                {'busquda avanzada'}

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
                            <Menu.Items className="fixed w-full  flex justify-center top-20  md:top-12 sm:absolute right-0  mt-8 md:mt-0  origin-top-right divide-y divide-gray-200 rounded-md bg-white-ghost dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <HomeSearchBar />
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
        </div>
    )
}