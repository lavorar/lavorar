import axios from 'axios';
import React, { useState } from 'react'
import Layout from '../../components/Layouts/mainLayout';
import { fetcher } from '../../lib/api';
import { getTokenFromServerCookie } from '../../lib/auth'
import ContratadosComponent from '../../components/profile/ContratadosComponent';
import PendingComponent from '../../components/profile/PendingComponent';


const Contratados = ({ user }) => {
    console.log('user', user)
    const [requestpending, setRequestPending] = useState(user.notifications_requested.filter((notification) => notification.type === 'Hire' && !notification.acepted))
    console.log('requestpending', requestpending)
    return (
        <Layout user={user}>
            <PendingComponent user={user} pendingHire={requestpending} />
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
                notifications_requested: {
                    sort: ['review_updatedAt:desc'],
                    limit: 10,
                    populate: '*'
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
        return {
            props: {
                user
            },
        };
    }
}