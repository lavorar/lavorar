import Head from 'next/head';

import { UserProvider } from '../../lib/authContext';
import { useState } from "react";
import { useRouter } from 'next/router'
import Header from "../elements/Header";
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
import Card from "../elements/Card";
import NavMobile from '../elements/NavMobile';

const Layout = ({ user, loading = false, children }) => {
    const navigate = useRouter()
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
                <div className="flex md:flex-row h-auto ">
                    <div
                        className={` ${open ? "w-64" : "w-24 "
                            } hidden md:flex z-50  flex-col bg-transparent border-0 border-r border-gray-500 dark:border-gray-100  text-gray-900 dark:text-white-ghost h-full p-3  fixed pt-8  duration-300`}
                    >
                        <div
                            className={`absolute  cursor-pointer group -right-5 top-5
                            rounded-full duration-300  ${!open && "rotate-180"}`}>
                            <IconWithButton
                                onClick={() => setOpen(!open)}
                            >
                                <ArrowBackIosNewRoundedIcon fontSize="small" />
                            </IconWithButton>
                        </div>
                        <div className="flex mt-10 flex-row gap-x-2 justify-start items-center ">
                            <img
                                src="/Lavorar-logo-negativo.svg"
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
                                            onClick={() => { Menu.href ? navigate.push(Menu.href) : '' }}
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
                    <div className={`${open ? 'md:pl-64' : 'md:pl-24'} z-10 lg:mr-[310px] h-auto flex flex-around p-2 md:p-0  duration-500 w-full md:ml-2   md:flex-1 `}>
                        <div className="w-full ">
                            <Header>

                            </Header>
                            {children}

                        </div>
                        {/* <AppHeader /> */}
                    </div>
                    <div className={'lg:w-[310px] float-right overflow-auto lg:flex-col hidden lg:flex lg:fixed h-screen right-0 bg-transparent text-white-ghost ml-2 p-1 border-l  border-gray-500 dark:border-gray-100'} >

                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div >
                <NavMobile />
            </main>


        </UserProvider>
    );
};
export default Layout;



// const SideBar = (props) => {

//     return (
//         <div className="flex md:flex-row h-auto  bg-gray-100 dark:bg-gray-900">
//             <div
//                 className={` ${open ? "w-64" : "w-24 "
//                     } overflow-y-auto hidden md:flex  flex-col bg-transparent border-0 border-r border-gray-500 dark:border-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white-ghost h-full p-3 z-20 fixed pt-8  duration-300`}
//             >
//                 <div
//                     className={`absolute  cursor-pointer group -right-5 top-11
//                             rounded-full  ${!open && "rotate-180"}`}>
//                     <IconWithButton
//                         onClick={() => setOpen(!open)}
//                     >
//                         <ArrowBackIosNewRoundedIcon fontSize="small" />
//                     </IconWithButton>
//                 </div>
//                 <div className="flex flex-row gap-x-2 justify-start items-center ">
//                     <img
//                         src="./src/assets/Lavorar-logo-negativo.svg"
//                         className={`cursor-pointer duration-500 ${open ? "w-20" : "w-14 ml-1 "
//                             } ${open && "rotate-[360deg] "
//                             }`}
//                     />

//                     <h1
//                         className={`text-orange-brand origin-left font-medium text-xl duration-200 ${!open && "scale-0"
//                             }`}
//                     >
//                         Lavorar
//                     </h1>
//                 </div>
//                 <ul className="pt-6">
//                     {Menus.map((Menu, index) => (
//                         Menu.always ?
//                             <li
//                                 key={index}
//                                 className={`flex rounded-md p-2 ${open ? '' : ''} group cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white-ghost text-md items-center gap-x-2
//                         ${Menu.gap ? "mt-9" : "mt-2"}
//                                 } `}
//                             >
//                                 <div
//                                     onClick={() => { Menu.href ? navigate(Menu.href) : '' }}
//                                     className={`cursor-pointer  duration-300  text-gray-900  dark:text-white-ghost`}>
//                                     <IconWithButton
//                                     >
//                                         {Menu.src}
//                                     </IconWithButton>
//                                 </div>

//                                 <span className={`${open ? 'block' : "hidden"} whitespace-nowrap origin-left duration-700`}>
//                                     {Menu.title}
//                                 </span>

//                             </li>
//                             :
//                             <div key={index}>
//                             </div>
//                     ))}
//                 </ul>
//             </div>
//             <div className={`${open ? 'md:pl-64' : 'md:pl-24'} lg:mr-[310px] h-auto flex flex-around p-2 md:p-0  duration-500 w-full md:ml-2   md:flex-1 `}>
//                 <div className="w-full lg:px-20">
//                     <Header>

//                     </Header>
//                     <App> </App>

//                 </div>
//                 {/* <AppHeader /> */}
//             </div>
//             <div className={'lg:w-[310px] float-right overflow-auto lg:flex-col hidden lg:flex lg:fixed h-screen right-0 bg-transparent text-white-ghost ml-2 p-1 border-l dark:bg-gray-900  border-gray-500 dark:border-gray-100'} >

//                 <Card />
//                 <Card />
//                 <Card />
//                 <Card />
//             </div>
//         </div >
//     );
// };