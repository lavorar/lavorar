import React, { useState } from 'react'
import Dropdown from './Dropdown'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconWithButton from "../elements/IconWithButton"
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import Badge from '@mui/material/Badge';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { useAuth } from "../../../context/authContext";
import App from '../../../App';

const Header = (props) => {
  const { user, logout, loading } = useAuth();
  const [open, setopen] = useState(false)
  const [openNotification, setopenNotification] = useState(false)

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

  const closeNotification = () => {
    console.log("blur")
    setopenNotification(false)
  }

  return (
    <>
      <nav className="bg-gray-100  dark:bg-gray-900 text-gray-900 dark:text-white-ghost px-2 sm:px-4 p-0 sticky w-full z-10 top-0 py-1 left-0">
        <div className="container flex justify-between md:justify-end h-16 items-center mx-auto px-2">
          <a href="https://flowbite.com/" className="flex items-center md:invisible ">
            <img src="./src/assets/Lavorar-logo-negativo.svg" className="mr-6 w-16" alt="LAvorar Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap hidden dark:text-white">Flowbite</span>
          </a>
          <div className="flex md:order-2 ">

            { user ?              
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


            { user ?
              <div className={`mr-2 group`}>
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
            }

            <div className='mr-4 hidden md:block'>
              <Dropdown>
                <PersonRoundedIcon fontSize='large' />
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
            <li>
              <div className="px-1 py-1 ">

                <button
                  className={`text-text-gray-900 dark:text-white-ghost group flex w-full items-center rounded-md px-2 py-2 text-md`}
                >
                  <div className={`rounded-full bg-gray-300 dark:bg-gray-700 mr-3 h-9 w-9 p-1`}>

                    <SettingsRoundedIcon />
                  </div>
                  Configuracion
                </button>
              </div>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Servicios</a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Ayuda</a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Cerrar sesion</a>
            </li>
          </ul>
        </div>
        <div className={`${openNotification ? "block " : "hidden "}  md:hidden justify-between items-center w-full `} id="notificationBar">
          <ul className="flex flex-col p-4 mt-4 max-h-min  bg-gray-50 rounded-lg border border-gray-100  md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Notificacion 1</a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Notificacion 4</a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Notificacion 3</a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Notificacion 2</a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">ver mas</a>
            </li>
          </ul>
        </div>
      </nav>
      
    </>
  )
}

export default Header