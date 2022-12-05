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

const ProfileComponent = ({ user, authUser, review }) => {
    let today = moment(new Date())
    let years = today.diff(moment(user?.birth), 'years')
    const handleHire = async () => {

    }
    return (
        <div className='flex flex-col mt-16 '>
            {user ?

                <div className='flex flex-col  rounded-md bg-gray-300 dark:bg-gray-700 ' >
                    <div className='flex flex-col items-center lg:items-baseline relative gap-2 border-b dark:border-gray-400  p-2'>

                        <div>
                            <BasicRating
                                hover={-1}
                                counts={review?.reviewsCount}
                                value={review?.averageScore}
                                readOnly={true} />
                        </div>
                        <span className="  pt-2 mx-2  mb-1 px-1 text-base font-medium ">
                            {user.aboutme ? user.aboutme : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumend    laboriosam, quod aut officiis ea deleniti repellat nisi delectus magnam reiciendis?'}
                        </span>
                    </div>

                    <div className='flex p-5 flex-col '>
                        <div className='flex flex-row gap-20  py-3 justify-start items-center'>
                            <span>
                                Skills
                            </span>
                            <div className='flex flex-wrap'>
                                {user.categories ?
                                    user.categories.map((categorie) => (
                                        <ButtonCard key={categorie.id} href={'/buscar/' + categorie?.Slug} text={categorie.name} />
                                    ))
                                    :
                                    <>
                                    </>}
                                {/* <ButtonCard text="Categoria" />
                                        <ButtonCard text="Categoria" />
                                        <ButtonCard text="Categoria" /> */}
                            </div>
                        </div>
                        <div className='flex flex-row gap-20  py-3 justify-start items-center'>
                            <span>
                                Edad
                            </span>
                            <div className='flex'>
                                {years > 17 ? years : 18}
                            </div>
                        </div>
                    </div>

                </div>

                :
                <>
                </>}

        </div>
    )
}

export default ProfileComponent