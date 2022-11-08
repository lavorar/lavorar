import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useQuery } from 'react-query';
import ProfileComponent from '../../components/profile/ProfileComponent';
import { useFetchUser } from '../../lib/authContext';
import Card from "/components/elements/Card";
import HomeSearchBar from "/components/elements/HomeSearchBar";
import Layout from "/components/Layouts/mainLayout";
const Search = ({ users }) => {

    console.log(users)
    return (
        <Layout>            
            <ProfileComponent user={users[0]} />
        </Layout>
    )
}

export default Search

export async function getServerSideProps(context) {
    const { userSlug } = context.query
    const us = true
    const qs = require('qs');
    let users

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
    await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users?${query}`).then((data) => {
        users = data.data
    }).catch((data) => {
        users = null
    })

    return {
        props: {
            users,
        },
    };

}