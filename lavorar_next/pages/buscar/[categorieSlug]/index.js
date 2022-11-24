import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react'
import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetcher } from '../../../lib/api';
import { getTokenFromServerCookie } from '../../../lib/auth';
import Card from "/components/elements/Card";
import HomeSearchBar from "/components/elements/HomeSearchBar";
import Layout from "/components/Layouts/mainLayout";
const SearchCategorie = ({ users , user}) => {
    const router = useRouter()
    console.log(users)
    return (
        <Layout user={user}>
            <div className="flex flex-col  items-center w-full p-1 text-black">
                <h1 className="text-center text-gray-900 dark:text-gray-100 font-bold text-4xl pt-5">
                    {'BUSCAR SERVICIOS DE' + ' ' + router.query.categorieSlug?.toUpperCase()}
                </h1>
                <HomeSearchBar />
                <div className="mt-10 flex flex-wrap  justify-evenly  gap-4 lg:gap-8 w-full lg:px-5">
                    {
                        users.map((user) => (
                            <Card key={user.id} user={user} />
                        ))
                    }

                </div>
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
        user = await fetcher(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me`,
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
        populate: '*',
    }, {
        encodeValuesOnly: true, // prettify URL
    });
    await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users?${query}`).then((data) => {
        users = data.data
    }).catch((error) => {
        users = null
    })

    if (user) {
        return {
            props: {
                users, user
            },
        };
    }
    else {
        return {
            props: {
                users
            },
        };
    }

}