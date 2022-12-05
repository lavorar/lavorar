import axios from 'axios';
import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import BackgroundLetterAvatars from '../../components/elements/AvatarInitials';
import RatingsComponent from '../../components/profile/RatingsComponent';
import TabsProfile from '../../components/profile/TabsProfile';
import { fetcher } from '../../lib/api';
import { getTokenFromServerCookie } from '../../lib/auth';
import Layout from "/components/Layouts/mainLayout";
import HireLender from '../../components/elements/HireLender';
import Link from 'next/link';
import HoverRating from '../../components/elements/Rating';
const Search = ({ users, user, userReview, review }) => {
    const [lender, setlender] = useState(users[0]);
    return (
        <Layout user={user}>
            <div className='flex flex-col  mt-16 p-2 rounded-md relative bg-gray-300 dark:bg-gray-700 ' >
                <div className="flex flex-col  items-center lg:flex-row mt-8 gap-2 lg:justify-between ">
                    <div className='flex flex-col  items-center lg:flex-row  gap-4 '>
                        {
                            lender.avatar ?

                                <div className="-mt-28  self-center w-[150px] h-[150px] relative aspect-square cursor-pointer"
                                // onClick={router.replace( '/prestadores/' + user?.Slug )}
                                >
                                    <Image
                                        src={`/f_auto,q_auto,w_150,h_150/v${lender.avatar}`}
                                        alt={"Picture of the user " + lender?.name}
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
                                    <BackgroundLetterAvatars fontSize='xxx-large' firtsName={lender?.firstName} lastName={lender?.lastName} />
                                </div>

                        }
                        <div className="lg:-mt-8 flex flex-col justify-self-start">
                            <div className="text-3xl text-center lg:text-left ">
                                {lender.name}
                                <VerifiedIcon sx={{ fontSize: 30 }} className="ml-2" />
                            </div>
                            <div className="flex justify-center text-md text-center lg:justify-start items-center  lg:items-start pt-2">
                                <LocationOnIcon sx={{ fontSize: 20 }} />{(lender.provincia ? lender.provincia.name + ', ' : 'Provincia , ') + (lender.localidad ? lender.localidad.name : 'Ciudad')} <div className=" pl-1">
                                </div>
                            </div>
                            <div className='flex self-center lg:self-start mt-2'>
                                <HoverRating
                                    hover={-1}
                                    counts={review?.reviewsCount}
                                    value={review?.averageScore}
                                    readOnly={true} />
                            </div>
                        </div>
                    </div>

                    <div className="flex lg:justify-end py-2 items-center">
                        {user ?
                            user.id === lender.id ?
                                <></>
                                :
                                <HireLender authUser={user} lender={lender} />
                            :
                            <></>}
                        {lender.phone &&
                            <Link href={'https://api.whatsapp.com/send?phone=' + lender?.phone} >
                                <button
                                    type="button"
                                    className="focus:outline-none text-gray-900 bg-orange-brand hover:bg-yellow-500 focus:ring-2 focus:ring-orange-high dark:focus:ring-orange-high font-medium rounded-lg text-base px-3 py-2 mr-2 my-2 "
                                >
                                    Mensaje
                                </button>
                            </Link>
                        }
                    </div>

                </div>

            </div>
            <TabsProfile user={lender} authUser={user} userReview={userReview} review={review} />


            {/* <ProfileComponent user={lender} authUser={user} review={review} /> */}

            {/* <RatingsComponent user={user} profileUser={lender} userReview={userReview} /> */}
        </Layout>
    )
}

export default Search

export async function getServerSideProps(context) {
    const { userSlug } = context.query
    const us = true
    const qs = require('qs');
    let users
    const jwt = getTokenFromServerCookie(context.req);
    let user
    let userReview
    let review
    await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/ratings/reviews/${userSlug}/stats`)
        .then(({ data }) => {
            review = data
        }).catch((error) => {
            review = null
        })
    if (jwt) {
        const queryuser = qs.stringify({
            populate: {
                notifications: {
                    sort: ['review_updatedAt:desc'],
                    limit: 10,
                    populate: '*'
                },
                notifications_requested: {
                    sort: ['review_updatedAt:desc'],
                    populate: '*'
                },
                service_recruiters: {
                    populate: {
                        lender: true
                    }
                },
            }
        }, {
            encodeValuesOnly: true, // prettify URL
        });
        user = await fetcher(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me?${queryuser}`,
            {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            }
        );
        user = { ...user, jwt: jwt }
        await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/ratings/reviews/${userSlug}`)
            .then(({ data }) => {
                let filters = data.reviews?.filter(function (reviews) {
                    return reviews.author.id === user.id;
                });
                if (filters.length > 0) {
                    userReview = filters[0]
                }
                else {
                    userReview = null
                }
            }).catch((error) => {
                review = null
                userReview = null
            })
    }

    const query = qs.stringify({
        filters: {
            Slug: {
                $eq: userSlug,
            },
            role: {
                id: {
                    $eq: 3,
                }
            },

        },
        populate: '*',
    }, {
        encodeValuesOnly: true, // prettify URL
    });
    await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users?${query}`)
        .then((data) => {
            users = data.data
        }).catch((data) => {
            users = null
        })

    if (user) {
        return {
            props: {
                users, user, userReview, review
            },
        };
    }
    else {
        return {
            props: {
                users, review
            },
        };
    }

}