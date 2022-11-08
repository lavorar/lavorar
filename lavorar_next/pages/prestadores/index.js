import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useFetchUser } from '../../lib/authContext';
import Card from "/components/elements/Card";
import HomeSearchBar from "/components/elements/HomeSearchBar";
import Layout from "/components/Layouts/mainLayout";
const Search = ({ users }) => {

    console.log(users)
    return (
        <Layout>
            <div className="flex flex-col  items-center w-full p-1 text-black">                
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

export default Search

export async function getServerSideProps({ req }) {
    const us = true
    const qs = require('qs');
    let users

    const query = qs.stringify({
        filters: {
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