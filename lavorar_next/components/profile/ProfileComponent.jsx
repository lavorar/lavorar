import React, { useEffect, useState } from 'react'
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BasicRating from '/components/elements/Rating';
import ButtonCard from '/components/elements/ButtonCard';
import Image from 'next/image';
import BackgroundLetterAvatars from '../elements/AvatarInitials';
import Link from 'next/link';
import { getTokenFromLocalCookie } from '../../lib/auth';
import axios from 'axios';
import { useQuery } from 'react-query';
import HireLender from '../elements/HireLender';
import moment from 'moment';

const ProfileComponent = ({ user, authUser, review , userClient}) => {
    let today = moment(new Date())
    let years = today.diff(moment(user?.birth), 'years')
    const handleHire = async () => {

    }
    return (
        <div className='flex flex-col mt-16 '>
            <div className='flex flex-col relative mt-16 p-2 lg:p-5 lg:h-36 rounded-md  bg-gray-300 dark:bg-gray-700 ' >
                <div className="flex flex-col  items-center lg:flex-row mt-8 gap-8 lg:justify-between ">
                    <div className='flex flex-col w-full items-center lg:flex-row lg:justify-between  gap-3 '>
                        <div className='flex flex-col w-full items-center lg:flex-row   gap-3 '>
                            {
                                image ?

                                    <div className="-mt-28  self-center w-[150px] h-[150px] relative aspect-square cursor-pointer"
                                    // onClick={router.replace( '/prestadores/' + user?.Slug )}
                                    >
                                        <Image
                                            src={image}
                                            alt={"Picture of the user " + userClient?.name}
                                            layout="fill" // required                   
                                            objectFit="cover"// change to suit your needs
                                            className="rounded-full w-full"
                                            loading="eager"
                                            priority={true}
                                            quality={100} // just an example
                                        />

                                    </div>
                                    :
                                    <div className="-mt-24  w-[150px] h-[150px] aspect-square cursor-pointer"
                                    // onClick={router.replace( '/prestadores/' + user?.Slug )}
                                    >
                                        <BackgroundLetterAvatars fontSize='xxx-large' firtsName={userClient?.firstName} lastName={userClient?.lastName} />
                                    </div>

                            }
                            <div className="lg:-mt-8 flex flex-col justify-self-start">
                                <div className="text-3xl text-center lg:text-left ">
                                    {userClient.name}
                                    <VerifiedIcon sx={{ fontSize: 30 }} className="ml-2" />
                                </div>
                                <div className="flex justify-center text-md text-center lg:justify-start items-center  lg:items-start pt-2">
                                    <LocationOnIcon sx={{ fontSize: 20 }} />{(userClient.provincia ? userClient.provincia.name + ', ' : 'Provincia , ') + (userClient.localidad ? userClient.localidad.name : 'Ciudad')} <div className=" pl-1">
                                    </div>
                                </div>
                                {userClient.role.id === 3 && <div className='flex self-center lg:self-start mt-2'>
                                    <HoverRating
                                        hover={-1}
                                        counts={userClient?.countsReview}
                                        value={userClient?.averageScore}
                                        readOnly={true} />
                                </div>}
                            </div>
                        </div>
                        <div className="flex lg:justify-end py-2 items-center">
                            {user ?
                                user.id === userClient.id ?
                                    <></>
                                    :
                                    <HireLender authUser={user} lender={userClient} />
                                :
                                <></>}
                            {userClient.phone && user?.id !== userClient.id &&
                                <div>
                                    <Link href={'https://api.whatsapp.com/send?phone=' + userClient?.phone} >
                                        <button
                                            type="button"
                                            className="focus:outline-none text-gray-900 bg-orange-brand hover:bg-yellow-500 focus:ring-2 focus:ring-orange-high dark:focus:ring-orange-high font-medium rounded-lg text-base px-3 py-2 mr-2 my-2 "
                                        >
                                            Mensaje
                                        </button>
                                    </Link>
                                </div>
                            }
                        </div>
                        {user && user.Slug === userClient.Slug && <div className="flex md:absolute my-1  top-4 right-4 items-center">
                            <ModalEditProfile isOpen={isOpen}
                                image={image}
                                setImage={setImage}
                                userClient={userClient}
                                setuserClient={handleUserChange}
                                setIsOpen={setIsOpen}
                                provincesOptions={provincesOptions}
                            // closeModal={closeModal}
                            >

                            </ModalEditProfile>
                            <button
                                type="button"
                                onClick={openModal}
                                className="py-2 px-3   text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-gray-100 hover:text-blue-700  dark:bg-gray-800 dark:text-gray-100  dark:hover:text-white dark:hover:bg-gray-600"
                            >
                                Editar Perfil
                            </button>
                        </div>}
                    </div>


                </div>

            </div>

            <TabsProfile authUser={user} user={userClient} userReview={userReview} />

        </div>
    )
}

export default ProfileComponent