import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { getTokenFromLocalCookie } from '../../lib/auth'

const HireLender = ({ authUser, lender }) => {
    const jwt = getTokenFromLocalCookie()
    const qs = require('qs');
    const queryRequest = qs.stringify({
        filters: {
            user: {
                id: {
                    $eq: lender.id
                }
            },
            user_request: {
                id: {
                    $eq: authUser.id,
                }
            },
            type: 'Hire'
        },
        populate: '*',
    }, {
        encodeValuesOnly: true, // prettify URL
    });
    const { io } = require("socket.io-client");
    const SERVER_URL = "http://localhost:1337";

    // token will be verified, connection will be rejected if not a valid JWT
    const socket = io(SERVER_URL, {
        auth: {
            token: jwt
        },
    });

    //  wait until socket connects before adding event listeners



    const notificationsrequest = async () => {
        if (jwt) {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/notifications?${queryRequest}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            }).then(({ data }) => {
                if (data.data?.length) {
                    setrequestHire(data.data[0])
                }

                return data
            }).catch((response) => {
                console.log(response)
                return
            })
            return response
        }
    }





    const contract = authUser.service_recruiters?.filter(function (service) {
        return service.lender.id === lender.id
    })
    const [requestHire, setrequestHire] = useState()
    const [serviceHire, setserviceHire] = useState(contract)
    const hireLender = async (e) => {
        if (requestHire?.length) {
            return
        }
        else {
            await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/notifications`, {
                data: {
                    user: lender,
                    user_request: authUser,
                    type: 'Hire',
                    review_updatedAt: new Date()
                }
            }, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            }).then(({ data }) => {
                setrequestHire(data.data)
            })
        }

    }

    const deleteRequestHire = async (e) => {

        await axios.delete(`${process.env.NEXT_PUBLIC_STRAPI_URL}/notifications/${requestHire.id}`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        }).then(({ data }) => {
            setrequestHire(null)
        }).catch(error => console.log(error))



    }
    useEffect(() => {
        notificationsrequest()
    }, [])
    return (
        <div>
            {serviceHire?.length ?
                <button
                    type="button"
                    className="py-2 px-3 mr-2 my-2 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                    Contratado
                </button>
                :
                requestHire ?
                    <button
                        onClick={deleteRequestHire}
                        type="button"
                        className="py-2 px-3 mr-2 my-2 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                        Pendiente
                    </button>
                    :
                    <button
                        onClick={hireLender}
                        type="button"
                        className="py-2 px-3 mr-2 my-2 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                        Contratar
                    </button>
            }



        </div>
    )
}

export default HireLender