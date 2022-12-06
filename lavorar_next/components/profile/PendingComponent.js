import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import { useQuery } from 'react-query'
import BackgroundLetterAvatars from '../elements/AvatarInitials'
import HoverRating from '../elements/Rating'
import RatingForm from '../rating/RatingForm'
import Review from '../rating/Review'
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from 'next/image'
import { info } from 'autoprefixer'
import HireLender from '../elements/HireLender'

const PendingComponent = ({ user, pendingHire }) => {
    const [pendingHireClient, setpendingHireClient] = useState(pendingHire)


    console.log('pendingHireClient', pendingHireClient)
    const router = useRouter()

    return (
        <div className="flex flex-col  items-center w-full p-1 ">
            <h2 className='text-3xl font-extrabold text-center my-5'>  Usuarios con solicitud de contratacion pendiente</h2>
            <div className=" mt-10 flex flex-wrap  justify-evenly  gap-4 lg:gap-8 w-full lg:px-5   ">
                {pendingHireClient.length > 0 ?
                    pendingHireClient.map((hire, index) => (
                        <div key={index} className={`${index < hire.length - 1 ? 'border-b' : ''} inline-block bg-gray-300 rounded-xl dark:bg-gray-700 w-full lg:w-96 p-5 lg:h-48 shadow-xl`}>

                            <div className='flex  relative flex-col lg:flex-row lg:justify-between items-center gap-4 '>
                                <div className='flex flex-col items-center lg:items-start lg:flex-row lg:justify-between  gap-4  '>
                                    {
                                        hire?.user?.avatar ?
                                            <Link href={`/prestadores/${hire.user?.Slug}`}>
                                                <a className="  r w-[80px] h-[80px] relative aspect-square cursor-pointer"
                                                // onClick={router.replace( '/prestadores/' + user?.Slug )}
                                                >
                                                    <Image
                                                        src={`/f_auto,q_auto,w_80,h_80/v${hire?.user.avatar}`}
                                                        alt={"Picture of the user " + hire?.user?.name}
                                                        layout="fill" // required                   
                                                        objectFit="cover"// change to suit your needs
                                                        className="rounded-full w-full"
                                                        loading="eager"
                                                        priority={true}
                                                        quality={100} // just an example
                                                    />

                                                </a>
                                            </Link>
                                            :
                                            <Link href={`/prestadores/${hire.user?.Slug}`}>
                                                <a className="  w-[80px] h-[80px] aspect-square cursor-pointer"
                                                // onClick={router.replace( '/prestadores/' + user?.Slug )}
                                                >
                                                    <BackgroundLetterAvatars fontSize='xxx-large' firtsName={hire?.user?.firstName} lastName={hire?.user?.lastName} />
                                                </a>
                                            </Link>

                                    }
                                    <div className=" flex flex-col justify-self-start">
                                        <Link href={`/prestadores/${hire.user?.Slug}`}>
                                            <a className="text-xl text-center lg:text-left ">
                                                {hire?.user.name}
                                                <VerifiedIcon sx={{ fontSize: 30 }} className="ml-2" />
                                            </a>
                                        </Link>
                                        <div className="flex justify-center text-md text-center lg:justify-start items-center  lg:items-start pt-2">
                                            <LocationOnIcon sx={{ fontSize: 20 }} />{(hire?.user.provincia ? hire?.user.provincia.name + ', ' : 'Provincia , ') + (hire?.user.localidad ? hire?.user.localidad.name : 'Ciudad')} <div className=" pl-1">
                                            </div>
                                        </div>
                                        <div className='flex self-center lg:self-start mt-2'>
                                            <HoverRating
                                                hover={-1}
                                                counts={hire?.user?.countsReview}
                                                value={hire?.user?.averageScore}
                                                readOnly={true} />
                                        </div>
                                        <div className='flex justify-center lg:justify-start'>
                                            <HireLender authUser={user} lender={hire?.user} />
                                            {hire?.user?.phone &&

                                                <Link href={'https://api.whatsapp.com/send?phone=' + hire.user?.phone} >
                                                    <button
                                                        type="button"
                                                        className="focus:outline-none w-auto max-w-xs text-gray-900 bg-orange-brand hover:bg-yellow-500 focus:ring-2 focus:ring-orange-high dark:focus:ring-orange-high font-medium rounded-lg text-base px-5 py-2 mr-2 my-2 "
                                                    >
                                                        Mensaje
                                                    </button>
                                                </Link>

                                            }
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    ))

                    :
                    <div>Aun no has Solicitado contratar a un usuario</div>
                }
            </div>

        </div>
    )
}

export default PendingComponent