import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { fetcher } from '../../lib/api';
import { getTokenFromServerCookie } from '../../lib/auth';
import Card from "/components/elements/Card";
import HomeSearchBar from "/components/elements/HomeSearchBar";
import Layout from "/components/Layouts/mainLayout";
import InfiniteScroll from 'react-infinite-scroll-component';
const Search = ({ users, user, numberOfLenders }) => {
    const [lenders, setlenders] = useState(users)
    const [hasMore, sethasMore] = useState(true)    
    const qs = require('qs');
    const query = qs.stringify({
        sort: ['countsReview:desc', 'averageScore:desc'],
        filters: {
            role: {
                id: {
                    $eq: 3,
                }
            },

        },
        populate: {
            ratings_reviews: '*',
            categories: '*',
        },
        start: lenders.length,
        limit: 4,
    }, {
        encodeValuesOnly: true, // prettify URL
    });
    const getMoreLenders = async () => {
        await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users?${query}`).then(({ data }) => {
            setlenders(lenders => [...lenders, ...data])
        }).catch((error) => {
            console.error(error)
        })
    }
    useEffect(() => {
        sethasMore(numberOfLenders > lenders.length ? true : false)
    }, [lenders])



    return (
        <Layout user={user}>
            <h2 className="text-center text-gray-900 dark:text-gray-100 font-bold text-4xl pt-5">
                {'BUSCAR PRESTADORES DE SERVICIOS'}
            </h2>
            <div className="flex flex-col   items-center w-full p-1 text-black">
                <HomeSearchBar />
                <div className='min-h-screen'>
                    <InfiniteScroll
                        dataLength={lenders.length}
                        next={getMoreLenders}
                        hasMore={hasMore}
                        loader={<h4 className='text-gray-900 dark:text-gray-50 text-center pt-10'
                        >Cargando...
                        </h4>}
                        endMessage={
                            <p className=" text-gray-900 dark:text-gray-50 text-center pt-10">
                                <b>Ya viste todos los prestadores de esta pagina!</b>
                            </p>
                        }>
                        <div className="mt-10 flex flex-wrap   justify-evenly  gap-4 lg:gap-8 w-full lg:px-5">
                            {
                                lenders.map((lender) => (
                                    <Card key={lender.id} authUser={user} lender={lender} slug={lender.Slug}
                                    />
                                ))
                            }
                        </div>
                    </InfiniteScroll>
                </div>
            </div>
        </Layout >
    )
}

export default Search

export async function getServerSideProps({ req }) {
    const us = true
    const qs = require('qs');
    let users
    const jwt = getTokenFromServerCookie(req);
    let user
    if (jwt) {
        const queryuser = qs.stringify({
            populate: {
                role: true,
                notifications: {
                    sort: ['review_updatedAt:desc'],
                    limit: 10,
                    populate: '*'
                },
                notifications_requested: {
                    sort: ['review_updatedAt:desc'],
                    populate: '*'
                },
                // lenders: {
                //     populate: '*'
                // },
                service_recruiters: {
                    populate: {
                        lender : true
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
    }

    const query = qs.stringify({
        sort: ['countsReview:desc', 'averageScore:desc'],
        filters: {
            role: {
                id: {
                    $eq: 3,
                }
            },

        },
        populate: '*',
        limit: 6,
    }, {
        encodeValuesOnly: true, // prettify URL
    });
    await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users?${query}`).then((data) => {
        users = data.data
    }).catch((data) => {
        users = null
    })
    let numberOfLenders
    await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/count?role=3`).then(({ data }) => {
        numberOfLenders = data
    }).catch((data) => {
        numberOfLenders = null
    })
    if (user) {
        return {
            props: {
                users, user, numberOfLenders
            },
        };
    }
    else {
        return {
            props: {
                users, numberOfLenders
            },
        };
    }



}