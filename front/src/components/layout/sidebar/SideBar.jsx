import { useState } from "react";
import App from "../../../App";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import AppHeader from "../header/AppHeader"
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import IconWithButton from "../elements/IconWithButton"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import AddchartRoundedIcon from '@mui/icons-material/AddchartRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import { useAuth } from '../../../context/authContext';
import { useNavigate } from 'react-router-dom';
import Card from "../elements/Card";


const SideBar = (props) => {
    const { user, logout, loading } = useAuth();
    const navigate = useNavigate('/')
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Inicio", src: <HomeRoundedIcon fontSize={'large'} />, always: true, href: '/' },
        { title: "Explorar", src: <ExploreRoundedIcon fontSize={'large'} />, always: true },
        { title: "Mi Perfil", src: <PersonRoundedIcon fontSize={'large'} />, always: user ? true : false, gap: true },
        { title: "Guardado", src: <BookmarkOutlinedIcon fontSize={'large'} />, always: user ? true : false },
        { title: "Mis Trabajos", src: <WorkRoundedIcon fontSize={'large'} />, always: user ? true : false },
        { title: "Horario y Agenda", src: <EventAvailableRoundedIcon fontSize={'large'} />, always: user ? true : false },
        { title: "Ayuda", src: <HelpRoundedIcon fontSize={'large'} />, always: true },
        { title: "Ganancias", src: <AddchartRoundedIcon fontSize={'large'} />, always: user ? true : false, gap: true },
        { title: "Estadisticas", src: <TrendingUpRoundedIcon fontSize={'large'} />, always: user ? true : false },

    ];

    return (
        <div className="flex md:flex-row h-auto  bg-gray-100 dark:bg-gray-900">
            <div
                className={` ${open ? "w-64" : "w-24 "
                    } hidden md:flex  flex-col bg-transparent border-0 border-r border-gray-500 dark:border-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white-ghost h-full p-3 z-20 fixed pt-8  duration-300`}
            >
                <div
                    className={`absolute cursor-pointer group -right-5 top-11
                            rounded-full  ${!open && "rotate-180"}`}>
                    <IconWithButton
                        onClick={() => setOpen(!open)}
                    >
                        <ArrowBackIosNewRoundedIcon fontSize="small" />
                    </IconWithButton>
                </div>
                <div className="flex flex-row gap-x-2 justify-start items-center ">
                    <img
                        src="./src/assets/Lavorar-logo-negativo.svg"
                        className={`cursor-pointer duration-500 ${open ? "w-20" : "w-14 ml-1 "
                            } ${open && "rotate-[360deg] "
                            }`}
                    />

                    <h1
                        className={`text-orange-brand origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        Lavorar
                    </h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        Menu.always ?
                            <li
                                key={index}
                                className={`flex rounded-md p-2 ${open ? '' : ''} group cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white-ghost text-md items-center gap-x-2
                        ${Menu.gap ? "mt-9" : "mt-2"}
                                } `}
                            >
                                <div
                                    
                                    onClick={() => { Menu.href ? navigate(Menu.href) : '' }}
                                    className={`cursor-pointer  duration-300  text-gray-900  dark:text-white-ghost`}>
                                    <IconWithButton
                                    >
                                        {Menu.src}
                                    </IconWithButton>
                                </div>

                                <span className={`${open ? 'block' : "hidden"} whitespace-nowrap origin-left duration-700`}>
                                    {Menu.title}
                                </span>

                            </li>
                            :
                            <div key={index}>
                            </div>
                    ))}
                </ul>
            </div>
            <div className={`${open ? 'md:pl-64' : 'md:pl-24'} lg:mr-[310px] h-auto flex flex-around p-2 md:p-0  duration-300 w-full md:ml-2   md:flex-1 `}>
                <div className="w-full lg:px-10">
                    <Header>

                    </Header>
                    <App> </App>

                </div>
                {/* <AppHeader /> */}
            </div>
            <div className={'lg:w-[310px] float-right overflow-auto lg:flex-col hidden lg:flex lg:fixed h-screen right-0 bg-gray-700 text-white-ghost ml-2 p-1 border-l border-gray-100'} >

                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div >
    );
};
export default SideBar;
