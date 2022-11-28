import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { fetcher } from '../../../lib/api';
import { getTokenFromServerCookie } from '../../../lib/auth';
import Card from "/components/elements/Card";
import HomeSearchBar from "/components/elements/HomeSearchBar";
import Layout from "/components/Layouts/mainLayout";
import InfiniteScroll from 'react-infinite-scroll-component';
const SearchCategorie = ({ users, user, numberOfLenders }) => {
    const router = useRouter()
    const [lenders, setlenders] = useState(users)
    const [hasMore, sethasMore] = useState(true)
    const qs = require('qs');
    const query = qs.stringify({
        sort: ['countsReview:desc', 'averageScore:desc'],
        filters: {
            categories: {
                Slug: {
                    $eq: router.query.categorieSlug
                }
            },
            role: {
                id: {
                    $eq: 3,
                }
            },

        },
        populate: '*',
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
            <div className="flex flex-col  items-center w-full p-1 text-black">
                <h2 className="text-center text-gray-900 dark:text-gray-100 font-bold text-4xl pt-5">
                    {'BUSCAR SERVICIOS DE' + ' ' + router.query.categorieSlug?.toUpperCase()}
                </h2>
                <HomeSearchBar />
                {lenders ?
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
                    :
                    <div className='min-h-screen  text-gray-900 dark:text-gray-50 text-center pt-10 text-xl '>
                        Aun no hay prestadores en esta categoria en la aplicación
                    </div>
                }
            </div>
        </Layout>
    )
}

export default SearchCategorie

export async function getServerSideProps(context) {

    const { categorieSlug } = context.query
    const us = true
    const qs = require('qs');
    let users
    const jwt = getTokenFromServerCookie(context.req);
    let user
    if (jwt) {
        const queryuser = qs.stringify({
            populate: {
                notifications_requested: {
                    sort: ['review_updatedAt:desc'],
                    populate: '*'
                },
                notifications: {
                    sort: ['review_updatedAt:desc'],
                    limit: 10,
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
    }
    const query = qs.stringify({
        sort: ['countsReview:desc', 'averageScore:desc'],
        filters: {
            categories: {
                Slug: {
                    $eq: categorieSlug
                }
            },
            role: {
                id: {
                    $eq: 3,
                }
            },
        },
        limit: 6,
        populate: '*',
    }, {
        encodeValuesOnly: true, // prettify URL
    });
    await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users?${query}`).then((data) => {
        users = data.data
    }).catch((error) => {
        users = null
    })
    const querycount = qs.stringify({
        categories: {
            Slug: {
                $eq: categorieSlug
            }
        },
        role: {
            id: {
                $eq: 3,
            }
        },
    }, {
        encodeValuesOnly: true, // prettify URL
    });
    let numberOfLenders
    await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/count?${querycount}`).then(({ data }) => {
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