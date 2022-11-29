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
  const SERVER_URL = process.env.NEXT_PUBLIC_STRAPI_URL_SERVER;

  // token will be verified, connection will be rejected if not a valid JWT
  const socket = io(SERVER_URL, {
    auth: {
      token: jwt
    },
  });

  //  wait until socket connects before adding event listeners
  useEffect(() => {
    socket.on("notificationCreate", function (data) {
      console.log('notification creada', data)
      if (data.user.id === user.id) {        
        setnotifications(notifications => [data, ...notifications])       
        setunreadNotifications(notifications => [data, ...notifications]) 
      }
    });
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
      <nav className="bg-gray-200
      dark:bg-[#13192b]
       text-gray-900  dark:text-white-ghost px-2 sm:px-4 p-0 sticky w-full z-10 top-0 py-1 left-0">
        <div className="container flex justify-between md:justify-end h-16 items-center mx-auto px-2">
          <a href="/" className="flex items-center md:invisible ">
            <img src="/Lavorar-logo-negativo.svg" className="mr-2 w-16" alt="LAvorar Logo" />
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
            {/* {user ?
              <div className='mr-2  hidden md:block group'>

                <IconWithButton>
                  {<Badge badgeContent={4} color="primary">
                    <ChatRoundedIcon fontSize='large' />
                  </Badge>}
                </IconWithButton>
              </div>
              :
              <>
              </>
            }


            {user ?
              <div className={`mr-2 group `}>
                <IconWithButton
                  onBlur={() => closeNotification}
                  onClick={() => {
                    handleOpenNotification()
                  }}
                >
                  <Badge badgeContent={4} color="primary">
                    <NotificationsRoundedIcon fontSize='large' />
                  </Badge>
                </IconWithButton>
                <div className={`${openNotification ? "hidden md:block " : "hidden "}  h-52 mt-3 -ml-24  md:absolute md:w-60  justify-between items-center w-full `} id="notificationBar">
                  <div className="flex flex-col container overflow-y-auto max-h-screen  items-start p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100  md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <div>
                      <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sobre Nosotros</a>

                      <br>
                      </br>
                    </div>
                  </div>

                </div>
              </div>
              :
              <></>
            } */}
            {
              user && (
                <div className='mr-4 '>
                  <NotificationDropdown
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

            <div className='mr-4 '>
              <Dropdown user={user}>
                {user ?
                  user?.avatar ?
                    <div className="h-[50px] w-[50px] relative aspect-square cursor-pointer"
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
                    <div className="h-[50px] w-[50px] cursor-pointer aspect-square"
                    // onClick={router.replace( '/prestadores/' + lender?.Slug )}
                    >
                      <BackgroundLetterAvatars fontSize='large' firtsName={user?.firstName} lastName={user?.lastName} />
                    </div>


                  :
                  <PersonRoundedIcon fontSize='large' />
                }
              </Dropdown>
            </div>

            <div className={`md:hidden`}>
              <IconWithButton
                onClick={() => {
                  handleOpen()
                }}
              >
                {open === false ?
                  <MenuRoundedIcon
                    sx={{
                      animation: !open && "spin 500ms ease 0s alternate",
                      "@keyframes spin": {
                        "0%": {
                          transform: "rotate(360deg)",
                        },
                        "100%": {
                          transform: "rotate(0deg)",
                        },
                      },
                    }}
                    fontSize='large' />

                  :

                  <CloseRoundedIcon
                    sx={{
                      animation: open && "spin 500ms ease 0s reverse",
                      "@keyframes spin": {
                        "0%": {
                          transform: "rotate(360deg)",
                        },
                        "100%": {
                          transform: "rotate(0deg)",
                        },
                      },
                    }}
                    fontSize='large' />}
              </IconWithButton>
            </div>

          </div>
        </div>
        <div className={`${open ? "block" : "hidden"} md:hidden justify-between items-center w-full md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-700 md:dark:bg-gray-900 dark:border-gray-700">
            {user && <li>
              <div
                onClick={handleLogout}
                className="px-1 py-1 ">
                <button

                  className={`text-text-gray-900 dark:text-white-ghost group flex w-full  bg-gray-200 dark:bg-gray-800 items-center rounded-md px-2 py-2 text-md`}
                >
                  <div

                    className={`rounded-full bg-gray-300 dark:bg-gray-700 mr-3 h-9 w-9 p-1`}>

                    <LogoutRoundedIcon />
                  </div>
                  Cerrar sesion
                </button>
              </div>
            </li>}
            <li>
              <div
                className="px-1 py-1 ">
                <button

                  className={`text-text-gray-900 dark:text-white-ghost group flex w-full  bg-gray-200 dark:bg-gray-800 items-center rounded-md px-2 py-2 text-md`}
                >
                  <div

                    className={`rounded-full bg-gray-300 dark:bg-gray-700 mr-3 h-9 w-9 p-1`}>

                    <HelpRoundedIcon />
                  </div>
                  Ayuda (proximamente)
                </button>
              </div>
            </li>
            <li>
              <div
                className="px-1 py-1 ">
                <Link href='/donate'>
                  <button
                    type="button"
                    className="focus:outline-none text-gray-900 w-full bg-orange-brand hover:bg-yellow-500 focus:ring-2 focus:ring-orange-high dark:focus:ring-orange-high font-medium rounded-lg text-base px-3 py-2 "
                  >
                    Dona
                  </button>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>

    </>
  )
}

export default Header
