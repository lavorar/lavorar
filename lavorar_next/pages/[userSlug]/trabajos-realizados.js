import axios from 'axios';
import React from 'react'
import Layout from '../../components/Layouts/mainLayout';
import { fetcher } from '../../lib/api';
import { getTokenFromServerCookie } from '../../lib/auth'
import WorksComponent from '../../components/profile/WorksComponent';


const Contratados = ({ user }) => {
    console.log('user', user)
    console.log('services', user.lenders)
    return (
        <Layout user={user}>
            <WorksComponent services={user.lenders} user={user} />
        </Layout>
    )
}

export default Contratados

export async function getServerSideProps({ req }) {
    const jwt = getTokenFromServerCookie(req);

    if (!jwt) {
        return {
            redirect: {
                destination: '/',
            },
        };
    } else {
        const qs = require('qs');
        const query = qs.stringify({
            populate: {
                categories: true,
                role: true,
                localidad: true,
                provincia: true,
                services: true,
                notifications: {
                    sort: ['review_updatedAt:desc'],
                    limit: 10,
                    populate: '*'
                },
                lenders: {
                    populate: {
                        users_recruiter: true,
                    }
                },
            }
        }, {
            encodeValuesOnly: true, // prettify URL
        });

        const user = await fetcher(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me?${query}`,
            {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            }
        );
        if (user.role.id === 3) {
            return {
                props: {
                    user
                },
            };
        }
        else {
            return {
                redirect: {
                    destination: '/',
                },
            };
        }

    }
}