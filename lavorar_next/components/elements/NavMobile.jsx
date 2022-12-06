import React, { useEffect, useState } from 'react'
import IconWithButton from "../elements/IconWithButton"
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import Badge from '@mui/material/Badge';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Router from 'next/router'
import { getTokenFromLocalCookie } from '../../lib/auth';
import NotificationDropdown from './NotificationsDropdown';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';


const NavMobile = ({ user }) => {

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
    const jwt = getTokenFromLocalCookie()
    const { io } = require("socket.io-client");
    const SERVER_URL = "https://backstrapimysql-production.up.railway.app";
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
        });
        return () => {
            socket.disconnect();
        }
    }, [])
    return (
        <nav className="bg-gray-50 dark:bg-gray-900 px-2 sm:px-4 py-2.5 fixed md:hidden w-full  z-10 bottom-0">
            <div className="container flex relative  justify-around items-center mx-auto px-2">
                <div className='group'>
                    <IconWithButton
                        onClick={() => Router.push('/')}>
                        <HomeRoundedIcon fontSize='large' />
                    </IconWithButton>
                </div>

                <div className=''>
                    <IconWithButton
                        onClick={() => Router.push('/buscar')}>
                        <Badge color="primary">
                            <SearchRoundedIcon fontSize='large' />
                        </Badge>
                    </IconWithButton>
                </div>
                {
                    user && (
                        <div className=''>
                            <NotificationDropdown
                                up={true}
                                user={user}
                                notifications={notifications}
                                setunreadNotifications={setunreadNotifications}
                                unreadNotifications={unreadNotifications}>
                                <Badge badgeContent={unreadNotifications?.length} color="primary">
                                    <NotificationsRoundedIcon fontSize='large' />
                                </Badge>
                            </NotificationDropdown>
                        </div>)
                }
                {/* <div className=''>
                    <IconWithButton>
                        <Badge badgeContent={4} color="primary">
                            <ChatRoundedIcon fontSize='large' />
                        </Badge>
                    </IconWithButton>
                </div> */}
                {user &&
                    <div className=''>
                        <IconWithButton
                            onClick={() => Router.push('/'+user.Slug)}>
                            <PersonRoundedIcon fontSize='large' />
                        </IconWithButton>
                    </div>
                }

            </div>
        </nav >
    )
}


export default NavMobile