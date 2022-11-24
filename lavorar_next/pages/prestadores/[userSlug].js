import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useQuery } from 'react-query';
import ProfileComponent from '../../components/profile/ProfileComponent';
import RatingsComponent from '../../components/profile/RatingsComponent';
import RegisterComponent from '../../components/SingUp/RegisterComponent';
import { fetcher } from '../../lib/api';
import { getTokenFromServerCookie } from '../../lib/auth';
import { useFetchUser } from '../../lib/AuthContext';
import Card from "/components/elements/Card";
import HomeSearchBar from "/components/elements/HomeSearchBar";
import Layout from "/components/Layouts/mainLayout";
const Search = ({ users, user, userReview, review }) => {
    return (
        <Layout user={user}>
            <ProfileComponent user={users[0]} review={review} />
            <RatingsComponent user={user} userReview={userReview} />
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
        user = await fetcher(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me`,
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