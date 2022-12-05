import Head from 'next/head';

import { UserProvider } from '../../lib/AuthContext';
import { useState } from "react";
import { useRouter } from 'next/router'
import Header from "../elements/Header";
import IconWithButton from "../elements/IconWithButton"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import AddchartRoundedIcon from '@mui/icons-material/AddchartRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import { UseLayoutOpen } from "../../context/LayoutContext";
import Card from "../elements/Card";
import NavMobile from '../elements/NavMobile';
import { getTokenFromLocalCookie, getTokenFromServerCookie } from '../../lib/auth';
import axios from 'axios';
import Link from 'next/link';


const Layout = ({ user, loading = false, children }) => {


    const router = useRouter()
    const { open } = UseLayoutOpen()
    const { setOpenBar } = UseLayoutOpen()
    const Menus = [
        { title: "Inicio", src: <HomeRoundedIcon fontSize={'large'} />, always: true, href: '/' },
        { title: "Buscar", src: <SearchRoundedIcon fontSize={'large'} />, always: true, href: '/buscar' },
        { title: "Mi Perfil", src: <PersonRoundedIcon fontSize={'large'} />, always: user ? true : false, gap: true, href: '/profile' },
        { title: "Guardado (proximamente)", src: <BookmarkOutlinedIcon color="disabled" fontSize={'large'} />, always: user ? true : false },
        { title: "Mis Trabajos (proximamente)", src: <WorkRoundedIcon color="disabled" fontSize={'large'} />, always: user ? true : false },
        { title: "Horario y Agenda (proximamente)", src: <EventAvailableRoundedIcon color="disabled" fontSize={'large'} />, always: user ? true : false },
        { title: "Ayuda (proximamente)", src: <HelpRoundedIcon color="disabled" fontSize={'large'} />, always: true },
        { title: "Ganancias (proximamente)", src: <AddchartRoundedIcon color="disabled" fontSize={'large'} />, always: user ? true : false, gap: true },
        { title: "Estadisticas (proximamente)", src: <TrendingUpRoundedIcon color="disabled" fontSize={'large'} />, always: user ? true : false },

    ];
    return (
        <UserProvider value={{ user, loading }}>

            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <link width="50" rel="icon" type="image/svg+xml" href="/Lavorar-logo-negativo.svg" />
                <title>Lavorar</title>
            </Head>


            <main>
                <div className="flex md:flex-row min-h-screen  h-auto">
                    <div
                        className={` w-24 xl:w-64
                                 hidden md:flex z-40  flex-col bg-transparent border-0  text-gray-900 dark:text-white-ghost h-full p-3  fixed pt-8  duration-500 `}
                    >
                        {/* <div
                            className={`absolute bg-gray-900 hidden xl:block cursor-pointer group -right-5 top-12
                            rounded-full duration-300  ${!open && "rotate-180"}`}>
                            <IconWithButton
                                onClick={setOpenBar}
                            >
                                <ArrowBackIosNewRoundedIcon fontSize="small" />
                            </IconWithButton>
                        </div> */}
                        <Link href={'/'}>
                            <a
                                className=" cursor-pointer flex flex-row gap-x-2 justify-start items-center ">
                                <img
                                    src="/Lavorar-logo-negativo.svg"
                                    className={` duration-500 w-16  "
                                    `}
                                />

                                <h1
                                    className={`text-orange-brand origin-left hidden xl:block font-medium text-xl duration-200 ${!open && "scale-0"
                                        }`}
                                >
                                    LavorAr
                                </h1>
                            </a>
                        </Link>
                        <ul className="pt-6">
                            {Menus.map((Menu, index) => (
                                Menu.always ?
                                    <Link href={Menu.href ? Menu.href : ''}>
                                        <a>
                                            <li
                                                key={index}
                                                className={`flex rounded-md p-2 ${open ? '' : ''} group cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white-ghost text-md items-center gap-x-2
                                            ${Menu.gap ? "mt-9" : "mt-2"}
                                } `}
                                            >
                                                <div

                                                    className={`cursor-pointer  duration-300  text-gray-900  dark:text-white-ghost`}>
                                                    <IconWithButton
                                                    >
                                                        {Menu.src}
                                                    </IconWithButton>
                                                </div>

                                                <span className={`${open ? 'block' : "hidden"} overflow-hidden whitespace-nowrap origin-left duration-700`}>
                                                    {Menu.title}
                                                </span>

                                            </li>
                                        </a>
                                    </Link>
                                    :
                                    <div key={index}>
                                    </div>
                            ))}
                        </ul>
                        <p className="text-center space-x-1 mt-2">
                            <span className="text-gray-700 dark:text-gray-300 text-sm font-semibold">Apoya nuestro trabajo! </span>
                            <a className="text-orange-high text-center cursor-pointer text-sm font-semibold"
                                onClick={() => router.replace('/donate')}
                            >Donar</a>
                        </p>
                    </div>
                    <div className={`${open ? 'md:pl-24 xl:pl-64' : 'md:pl-24 xl:pl-64'}  z-10  h-auto flex flex-row justify-center   duration-500 w-full   md:flex-1  `}>
                        <div className="w-[1200px] border-opacity-10 dark:border-opacity-10  border-r border-l  border-gray-500 dark:border-gray-100  ">
                            <Header user={user} >

                            </Header>
                            <div className='pt-5  mb-20 p-4  md:mb-0 '>

                                {children}
                            </div>

                        </div>
                        {/* <AppHeader /> */}
                        <div className={'xl:w-[400px]  xl:flex-col hidden xl:flex  xl:justify-center xl:items-center h-screen right-0 bg-transparent ml-2 p-1 '} >
                            <div className='flex flex-col w-full items-center justify-center pt-64' >
                                <Card lender={user} authUser={user} />
                                <Card lender={user} authUser={user} />
                                <Card lender={user} authUser={user} />
                            </div>
                        </div>
                    </div>

                </div >
                <NavMobile user={user} />
            </main>
        </UserProvider>
    );
};
export default Layout;



