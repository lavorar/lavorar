import { Menu, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/router';
import moment from 'moment';
import MarkAsUnreadRoundedIcon from '@mui/icons-material/MarkAsUnreadRounded';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import BackgroundLetterAvatars from './AvatarInitials';
import Link from 'next/link';
import { forwardRef } from 'react';
import axios from 'axios';
import { getTokenFromLocalCookie } from '../../lib/auth';
import Image from 'next/image';
export default function NotificationDropdown({ user, children, notifications, unreadNotifications, setunreadNotifications }) {
    const router = useRouter()
    const jwt = getTokenFromLocalCookie()

    const [readNotification, setreadNotification] = useState(notifications?.map(function (item) {
        // console.log(item?.read)
        return item?.read === true ? true : false
    }))
    // console.log(readNotification)
    function formatMyDate(value, locale = 'en-es') {
        let today = moment(new Date())
        let weeks = today.diff(moment(value), 'weeks')
        let days = today.diff(moment(value), 'days')
        let hours = today.diff(moment(value), 'hours')
        let minutes = today.diff(moment(value), 'minutes')
        let seconds = today.diff(moment(value), 'seconds')
        return weeks ? (weeks > 1 ? (weeks + ' semanas') : (weeks + ' semana')) :
            days ? (days > 1 ? (days + ' dias') : (days + ' dias')) :
                hours ? (hours > 1 ? (hours + ' horas') : (hours + ' hora')) :
                    minutes ? (minutes > 1 ? (minutes + ' minutos') : (hours + ' minuto')) :
                        ' hace unos momentos';
    }
    const markAsNotRead = async (e, id, indexstate, notification) => {
        if (notification.read) {
            e.preventDefault()

            setunreadNotifications(unreadNotifications => [...unreadNotifications, notification])



            setreadNotification(readNotification.map(function (item, index) {
                if (index === indexstate) {
                    return false
                }
                else {
                    return item
                }
            }))
            notification.read = false
            await axios.put(`${process.env.NEXT_PUBLIC_STRAPI_URL}/notifications/${id}`,
                {
                    data: {
                        read: false
                    }
                }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`,
                }
            }).then(({ data }) => {

            }).catch((error) => {
                console.log(error)
            })
        }

    }
    // console.log(notifications)
    const handleAceptService = async (e, id, indexstate, notification) => {
        e.preventDefault()

        await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/services/`,
            {
                data: {
                    acepted: true,
                    start_date: new Date(),
                    users_recruiter: notification.user_request.id,
                    lender: user.id,
                }
            }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            }
        }).then(async ({ data }) => {
            notification.acepted = true
            markAsRead(e, id, indexstate, notification, true)
            await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/notifications`, {
                data: {
                    user: notification.user_request.id,
                    user_request: user.id,
                    type: 'Reply',
                    review_updatedAt: new Date()
                }
            }, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            }).then(({ data }) => {
                console.log(data)
            })
        }).catch((error) => {
            console.log(error)
        })


    }

    const markAsRead = async (e, id, indexstate, notification, acepted) => {

        setreadNotification(readNotification.map(function (item, index) {
            if (index === indexstate) {
                return true
            }
            else {
                return item
            }
        }))

        let read = unreadNotifications.filter(function (noti) {
            console.log('notificacion a remover', notification.id, 'notificacion a actual', noti)
            return noti !== notification
        })
        if (!notification.read) {
            setunreadNotifications(read)
        }

        notification.read = true
        await axios.put(`${process.env.NEXT_PUBLIC_STRAPI_URL}/notifications/${id}`,
            {
                data: {
                    read: true,
                    acepted: acepted ? true : false
                }
            }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            }
        }).then(({ data }) => {
            console.log('marcada como leida', data.data)
        }).catch((error) => {
            console.log(error)
        })

    }


    return (
        <div className="text-right">
            <Menu as="div" className="relative inline-block text-left">
                {({ open }) => (
                    <>
                        <div>
                            <Menu.Button
                                className={`  ${open ? 'text-blue-600 dark:text-blue-500 dark:bg-gray-200' : ''} inline-flex w-full justify-center rounded-full bg-gray-300 dark:bg-gray-700 dark:hover:bg-black px-2 py-2 text-sm font-medium text-gray-900 dark:text-white-ghost hover:bg-gray-200  focus:outline-1 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}>
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
                            <Menu.Items className="fixed w-full max-h-[60%] sm:max-h-[500px] overflow-y-auto top-14 md:top-12 sm:absolute right-0 sm:-right-10  mt-4 sm:w-96 origin-top-right divide-y divide-gray-200 rounded-md bg-white-ghost dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {notifications ?
                                    notifications?.map((notification, index) => (
                                        <div key={index}

                                            className="px-1 py-1 ">
                                            <Menu.Item >
                                                {({ active, close }) => (

                                                    notification?.type === 'Review' &&

                                                    <div

                                                        id="toast-notification" className={`${active ? 'bg-gray-300 dark:bg-gray-700 dark:bg-100 ' : ' '}p-2 w-full  text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300 cursor-pointer`} role="alert">
                                                        <div className="flex items-center">
                                                            <div
                                                                onClick={(e) => { markAsRead(e, notification.id, index, notification) }}
                                                                className="inline-block relative shrink-0">
                                                                {
                                                                    notification.user_request.avatar ?

                                                                        <div
                                                                            onClick={(e) => { router.push('/profile') }}
                                                                            className="h-[50px] w-[50px] md:w-[50px] md:h-[50px] relative aspect-square "
                                                                        // onClick={router.replace('/prestadores/' + user?.Slug)}
                                                                        >
                                                                            <Image
                                                                                src={`/v${notification.user_request.avatar}`}
                                                                                alt={"Picture of the user " + notification.user_request.name}
                                                                                layout="fill" //required
                                                                                objectFit="cover" // change to suit your needs
                                                                                className="rounded-full w-full"
                                                                                loading="eager"
                                                                                priority={true}
                                                                                quality={100} //just an example
                                                                            />
                                                                        </div>
                                                                        :
                                                                        <div
                                                                            onClick={(e) => { router.push('/profile') }} className="h-[50px] w-[50px] md:w-[50px] md:h-[50px] aspect-square"
                                                                        // onClick={router.replace('/prestadores/' + user?.Slug)}
                                                                        >
                                                                            <span className="sr-only">{notification.user_request.name}</span>
                                                                            <BackgroundLetterAvatars fontSize='xx-large' firtsName={notification.user_request.firstName} lastName={notification.user_request.lastName} />
                                                                        </div>

                                                                }
                                                            </div>
                                                            <div onClick={(e) => { router.push('/profile') }} className='flex w-full flex-row justify-between items-center'>
                                                                <div
                                                                    onClick={(e) => { markAsRead(e, notification.id, index, notification) }}
                                                                    className="ml-3 text-sm font-normal">
                                                                    <div className="text-sm font-semibold text-gray-900 dark:text-white-ghost">{notification.user_request.name}</div>
                                                                    <div className="text-sm font-normal">{'te acaba de puntuar con ' + notification.score + ' estrellas'}</div>
                                                                    <span className="text-xs font-medium text-blue-600 dark:text-blue-300">{'hace ' + formatMyDate(notification.review_updatedAt)}</span>
                                                                </div>

                                                                <div
                                                                    className='flex gap-2'>
                                                                    {readNotification[index] === true ?
                                                                        <CheckCircleRoundedIcon
                                                                            fontSize='small' />
                                                                        :
                                                                        <CircleRoundedIcon
                                                                            fontSize='small' />
                                                                    }
                                                                    <MarkAsUnreadRoundedIcon
                                                                        onClick={(e) => { markAsNotRead(e, notification.id, index, notification) }}
                                                                        fontSize='small' />
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    ||
                                                    notification?.type === 'Hire' &&
                                                    <div

                                                        id="toast-notification" className={`${active ? 'bg-gray-300 dark:bg-gray-700 dark:bg-100 ' : ' '}p-2 w-full  text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300 cursor-pointer`} role="alert">
                                                        <div className="flex items-center">
                                                            <div
                                                                onClick={(e) => { markAsRead(e, notification.id, index, notification) }}
                                                                className="inline-block relative shrink-0">
                                                                {
                                                                    notification.user_request.avatar ?

                                                                        <div
                                                                            onClick={(e) => { router.push('/profile') }}
                                                                            className="h-[50px] w-[50px] md:w-[50px] md:h-[50px] relative aspect-square "
                                                                        // onClick={router.replace('/prestadores/' + user?.Slug)}
                                                                        >
                                                                            <Image
                                                                                src={`/v${notification.user_request.avatar}`}
                                                                                alt={"Picture of the user " + notification.user_request.name}
                                                                                layout="fill" //required
                                                                                objectFit="cover" // change to suit your needs
                                                                                className="rounded-full w-full"
                                                                                loading="eager"
                                                                                priority={true}
                                                                                quality={100} //just an example
                                                                            />
                                                                        </div>
                                                                        :
                                                                        <div
                                                                            onClick={(e) => { router.push('/profile') }} className="h-[50px] w-[50px] md:w-[50px] md:h-[50px] aspect-square"
                                                                        // onClick={router.replace('/prestadores/' + user?.Slug)}
                                                                        >
                                                                            <span className="sr-only">{notification.user_request.name}</span>
                                                                            <BackgroundLetterAvatars fontSize='xx-large' firtsName={notification.user_request.firstName} lastName={notification.user_request.lastName} />
                                                                        </div>

                                                                }
                                                            </div>
                                                            <div onClick={(e) => { markAsRead(e, notification.id, index, notification) }} className='ml-3 flex w-full flex-row gap-2 items-center '>
                                                                {notification.acepted ?
                                                                    <div className='flex w-full flex-col  justify-start items-start'>

                                                                        <div className=" text-sm font-normal">
                                                                            <div className="text-sm font-semibold text-gray-900 dark:text-white-ghost">{notification.user_request.name + ' te contrato'}</div>
                                                                        </div>
                                                                        <span className=" mt-2 text-xs font-medium text-blue-600 dark:text-blue-300">{'hace ' + formatMyDate(notification.review_updatedAt)}</span>
                                                                    </div>
                                                                    :
                                                                    <div className='flex w-full flex-col  justify-start items-start'>

                                                                        <div className=" text-sm font-normal">
                                                                            <div className="text-sm font-semibold text-gray-900 dark:text-white-ghost">{notification.user_request.name}</div>
                                                                            <div className="text-sm font-normal">{'Quiere contratarte'}</div>

                                                                        </div>
                                                                        <div className="flex flex-row gap-2 mt-1">
                                                                            <div onClick={(e) => handleAceptService(e, notification.id, index, notification)}>
                                                                                <button className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-gray-900 bg-orange-brand rounded-lg hover:bg-orange-high">Aceptar</button>
                                                                            </div>
                                                                            <div>
                                                                                <button href="#" className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Ahora no</button>
                                                                            </div>
                                                                        </div>

                                                                        <span className=" mt-2 text-xs font-medium text-blue-600 dark:text-blue-300">{'hace ' + formatMyDate(notification.review_updatedAt)}</span>
                                                                    </div>}
                                                                <div
                                                                    className='flex gap-2'>
                                                                    {readNotification[index] === true ?
                                                                        <CheckCircleRoundedIcon
                                                                            fontSize='small' />
                                                                        :
                                                                        <CircleRoundedIcon
                                                                            fontSize='small' />
                                                                    }
                                                                    <MarkAsUnreadRoundedIcon
                                                                        onClick={(e) => { markAsNotRead(e, notification.id, index, notification) }}
                                                                        fontSize='small' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    ||
                                                    notification?.type === 'Reply' &&
                                                    <div

                                                        id="toast-notification" className={`${active ? 'bg-gray-300 dark:bg-gray-700 dark:bg-100 ' : ' '}p-2 w-full  text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300 cursor-pointer`} role="alert">
                                                        <div className="flex items-center">
                                                            <div
                                                                onClick={(e) => { markAsRead(e, notification.id, index, notification) }}
                                                                className="inline-block relative shrink-0">
                                                                {
                                                                    notification.user_request.avatar ?

                                                                        <div
                                                                            onClick={(e) => { router.push('/prestadores/' + notification.user_request.Slug) }}
                                                                            className="h-[50px] w-[50px] md:w-[50px] md:h-[50px] relative aspect-square "
                                                                        // onClick={router.replace('/prestadores/' + user?.Slug)}
                                                                        >
                                                                            <Image
                                                                                src={`/v${notification.user_request.avatar}`}
                                                                                alt={"Picture of the user " + notification.user_request.name}
                                                                                layout="fill" //required
                                                                                objectFit="cover" // change to suit your needs
                                                                                className="rounded-full w-full"
                                                                                loading="eager"
                                                                                priority={true}
                                                                                quality={100} //just an example
                                                                            />
                                                                        </div>
                                                                        :
                                                                        <div
                                                                            onClick={(e) => { router.push('/prestadores/' + notification.user_request.Slug) }} className="h-[50px] w-[50px] md:w-[50px] md:h-[50px] aspect-square"
                                                                        // onClick={router.replace('/prestadores/' + user?.Slug)}
                                                                        >
                                                                            <span className="sr-only">{notification.user_request.name}</span>
                                                                            <BackgroundLetterAvatars fontSize='xx-large' firtsName={notification.user_request.firstName} lastName={notification.user_request.lastName} />
                                                                        </div>

                                                                }
                                                            </div>
                                                            <div onClick={(e) => { markAsRead(e, notification.id, index, notification) }} className='ml-3 flex w-full flex-row gap-2 items-center '>

                                                                <div className='flex w-full flex-col  justify-start items-start'>

                                                                    <div className=" text-sm font-normal">
                                                                        <div onClick={(e) => { router.push('/prestadores/' + notification.user_request.Slug) }} className="text-sm font-semibold text-gray-900 dark:text-white-ghost">{notification.user_request.name}</div>
                                                                        <div className="text-sm font-normal">{'Acepto que lo contrataras, ahora puedes reseñarlo!'}</div>

                                                                    </div>
                                                                    <span className=" mt-2 text-xs font-medium text-blue-600 dark:text-blue-300">{'hace ' + formatMyDate(notification.review_updatedAt)}</span>
                                                                </div>
                                                                <div
                                                                    className='flex gap-2'>
                                                                    {readNotification[index] === true ?
                                                                        <CheckCircleRoundedIcon
                                                                            fontSize='small' />
                                                                        :
                                                                        <CircleRoundedIcon
                                                                            fontSize='small' />
                                                                    }
                                                                    <MarkAsUnreadRoundedIcon
                                                                        onClick={(e) => { markAsNotRead(e, notification.id, index, notification) }}
                                                                        fontSize='small' />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                )}
                                            </Menu.Item>
                                        </div>

                                    ))
                                    :
                                    <></>
                                }
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
        </div >
    )
}

