import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import IconWithButton from "../elements/IconWithButton"
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { useRouter } from 'next/router';
import { getTokenFromLocalCookie, unsetToken } from '../../lib/auth';
import Link from 'next/link';
import NotificationDropdown from './NotificationsDropdown';
import { Badge } from '@mui/material';
import axios from 'axios';
import { useQuery } from 'react-query';
import { boolean } from 'yup';
import Image from 'next/image';
import moment from 'moment';
import BackgroundLetterAvatars from './AvatarInitials';
// import { useAuth } from "../../../context/authContext";

const Header = ({ user }) => {
    const jwt = getTokenFromLocalCookie()
    const qs = require('qs');
    const queryuser = qs.stringify({
        populate: {
            notifications: {
                sort: ['review_updatedAt:desc'],
                limit: 10,
                populate: '*'
            },
        }
    }, {
        encodeValuesOnly: true, // prettify URL
    });
    const getNotifications = async () => {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me?${queryuser}`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        })
        return data
    }
    const [notifications, setnotifications] = useState(user?.notifications)
    const [unreadNotifications, setunreadNotifications] = useState(user?.notifications.filter(function (notif) {
        //  console.log('notificacion ' ,notif)
        if (!notif.read) {
            return notif
        }
        else {
            return
        }
    }))


    const querynotifications = useQuery('notifications', getNotifications, {
        refetchInterval: 10000,
        enabled: Boolean(jwt),
        onSettled: (data) => {
            // console.log('ractquery data', data.notifications)
            // setnotifications(data)
        }
    })
    // console.log('numero de no leida',unreadNotifications)
    const router = useRouter();
    const [open, setopen] = useState(false)
    const [openNotification, setopenNotification] = useState(false)

    const { io } = require("socket.io-client");
    const SERVER_URL = "http://localhost:1337";

    // token will be verified, connection will be rejected if not a valid JWT


    //  wait until socket connects before adding event listeners
    useEffect(() => {
        const socket = io(SERVER_URL, {
            auth: {
                token: jwt
            },
        });
        socket.on("connect", () => {
            socket.on("notificationCreate", function (data) {
                console.log('notification creada', data)
                console.log('user ', user)
                if (user && data.user.id === user?.id) {
                    setnotifications(notifications => [data, ...notifications])
                    setunreadNotifications(notifications => [data, ...notifications])
                }
            });

        });
        return () => {
            socket.disconnect();
        }
    }, [])
    useEffect(() => {
        const socket = io(SERVER_URL, {
            auth: {
                token: jwt
            },
        });
        socket.on("notificationDelete", function (data) {
            console.log('notification Borrada', data)
            console.log('user ', user)
            if (user && data.user.id === user?.id) {
                setnotifications(
                    notifications.filter(function (notifaction) {
                        return notifaction.id !== data.id
                    })
                )
                setunreadNotifications(
                    unreadNotifications.filter(function (notifaction) {
                        return notifaction.id !== data.id
                    })
                )
            }
        });
        return () => {
            socket.disconnect();
        }
    }, [])

    const handleOpenNotification = () => {
        if (open) {
            setopen(false)
        }
        if (openNotification) {
            setopenNotification(false)
        }
        else {
            setopenNotification(true)
        }
    }
    const handleOpen = () => {
        if (openNotification) {
            setopenNotification(false)
        }
        if (open) {
            setopen(false)
        }
        else {
            setopen(true)
        }
    }

    const handleLogout = async () => {
        console.log('logout')
        unsetToken();
    };
    const closeNotification = () => {
        console.log("blur")
        setopenNotification(false)
    }

    return (
        <>
            <nav className="bg-gray-50
      dark:bg-[#13192b]
       text-gray-900  dark:text-white-ghost dark:bg-opacity-95  backdrop-blur px-2 sm:px-4 p-0 sticky w-full z-10 top-16 py-1 left-0">
                <div className="container flex justify-between md:justify-end h-16 items-center mx-auto px-2">
                    <a href="/" className="flex items-center md:invisible ">
                        <img src="/Lavorar-logo-negativo.svg" className="mr-2 w-11" alt="LAvorar Logo" />
                        <span className="self-center hidden md:block text-xl font-semibold whitespace-nowrap dark:text-white">Lavorar</span>
                    </a>
                    <div className="flex md:order-2 ">

                        <div className='mr-2 hidden md:block '>
                            <button
                                type="button"
                                onClick={(e) => router.replace('/donate')}
                                className="focus:outline-none text-gray-900 bg-orange-brand hover:bg-yellow-500 focus:ring-2 focus:ring-orange-high dark:focus:ring-orange-high font-medium rounded-lg text-base px-3 py-2 mr-2 my-2 "
                            >
                                Dona
                            </button>
                        </div>
                        <div className='mr-2  hidden md:block '>
                            <button
                                type="button"
                                onClick={(e) => router.replace('/donate')}
                                className="focus:outline-none text-gray-900 bg-orange-brand hover:bg-yellow-500 focus:ring-2 focus:ring-orange-high dark:focus:ring-orange-high font-medium rounded-lg text-base px-3 py-2 mr-2 my-2 "
                            >
                                Anunciate
                            </button>
                        </div>
                        
              
                        

                        

                    </div>
                </div>                
            </nav>

        </>
    )
}

export default Header
