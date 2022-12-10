import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import ProfileComponent from './ProfileComponent'
import moment from 'moment'
import HoverRating from '../elements/Rating'
import RatingsComponent from './RatingsComponent'
import ButtonCard from '../elements/ButtonCard'
import DescriptionProfile from './DescriptionProfile'
import ContratadosComponent from './ContratadosComponent'
import { useRouter } from 'next/router'
import { fetcher } from '../../lib/api'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function TabsProfile({ authUser, review, lender, userReview, user, selectedIndex, setselectedIndex }) {
    const router = useRouter()
    let today = moment(new Date())
    let years = today.diff(moment(user?.birth), 'years')

    let [isOpen, setIsOpen] = useState(false)
    // function closeModal() {
    //     setIsOpen(false)
    // }

    function openModal() {
        setIsOpen(true)
    }

    const qs = require('qs');

    const queryuser = qs.stringify({
        filters: {
            slug: {
                $eq: router.query.userSlug,
            }
        },
        populate: {
            categories: true,
            role: true,
            localidad: true,
            lenders: {
                populate: {
                    user_recruiter: true,
                }
            },
            service_recruiters: {
                populate: {
                    lender: true,
                }
            },
            provincia: true,
            notifications: {
                sort: ['review_updatedAt:desc'],
                limit: 10,
                populate: '*'
            },
        }
    }, {
        encodeValuesOnly: true, // prettify URL
    });
    const getUserQuery = async () => {
        let userProfile = await fetcher(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/users?${queryuser}`
        );
        setuserClient(userProfile[0]);
    }

    // useEffect(() => {
    //     getUserQuery()
    //     if (selectedIndex !== 0) {
    //         setSelectedIndex(0)
    //     }
    // }, [user])

    // useEffect(() => {
    //     getUserQuery()
    //     if (selectedIndex !== 0) {
    //         setSelectedIndex(0)
    //     }
    // }, [router.query])


    console.log('selectedIndex tabs', selectedIndex)

    return (
        <div className="w-full py-4 sm:px-0 ">
            <Tab.Group selectedIndex={selectedIndex} onChange={setselectedIndex} >
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                    <Tab className={({ selected }) =>
                        classNames(
                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 ',
                            'ring-white   focus:outline-none ',
                            selected
                                ? 'bg-gray-100 dark:bg-gray-700 shadow text-blue-700 dark:text-orange-dark'
                                : 'text-gray-900 dark:text-gray-100 hover:bg-white/[0.12] hover:text-blue-700 dark:hover:text-orange-dark'
                        )
                    } >Mas Informacion</Tab>
                    {user.role.id === 3 && <Tab className={({ selected }) =>
                        classNames(
                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                            'ring-white   focus:outline-none ',
                            selected
                                ? 'bg-gray-100 dark:bg-gray-700 shadow text-blue-700 dark:text-orange-dark'
                                : 'text-gray-900 dark:text-gray-100 hover:bg-white/[0.12] hover:text-blue-700 dark:hover:text-orange-dark'
                        )
                    } >Opiniones</Tab>}
                    {<Tab className={({ selected }) =>
                        classNames(
                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 ',
                            'ring-white   focus:outline-none ',
                            selected
                                ? 'bg-gray-100 dark:bg-gray-700 shadow text-blue-700 dark:text-orange-dark'
                                : 'text-gray-900 dark:text-gray-100 hover:bg-white/[0.12] hover:text-blue-700 dark:hover:text-orange-dark'
                        )
                    } >Contratados</Tab>}

                </Tab.List>
                <Tab.Panels className="mt-1 ">
                    <Tab.Panel className={classNames(
                        'rounded-xl bg-gray-50 h-auto  dark:bg-gray-700  ',
                        'ring-white focus:outline-none '
                    )}>
                        <div className='flex flex-col mt-4'>
                            {user ?

                                <div className='flex flex-col rounded-t-xl bg-gray-300 dark:bg-gray-700  ' >
                                    <div className='flex flex-col items-center lg:items-baseline relative gap-2 border-b dark:border-gray-400 border-gray-500 p-2'>


                                        <span className="  pt-2 mx-2  mb-1 px-1 text-base font-medium ">
                                            {user.aboutme ? user.aboutme : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumend    laboriosam, quod aut officiis ea deleniti repellat nisi delectus magnam reiciendis?'}
                                        </span>
                                    </div>

                                    <div className='flex p-5 flex-col '>
                                        {user?.role.id === 3 &&
                                            <div className='flex flex-row gap-20  py-3 justify-start items-center'>
                                                <span>
                                                    Categoria
                                                </span>
                                                <div className='flex flex-wrap'>
                                                    {user.categories ?
                                                        user.categories.map((categorie) => (
                                                            <ButtonCard key={categorie.id} href={'/buscar/' + categorie?.Slug} text={categorie.name} />
                                                        ))
                                                        :
                                                        <>
                                                        </>}
                                                    {/* <ButtonCard text="Categoria" />
                                        <ButtonCard text="Categoria" />
                                        <ButtonCard text="Categoria" /> */}
                                                </div>
                                            </div>
                                        }
                                        <div className='flex flex-row gap-20  py-3 justify-start items-center'>
                                            <span>
                                                Edad
                                            </span>
                                            <div className='flex'>
                                                {years > 17 ? years : 18}
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                :
                                <>
                                </>}

                        </div>
                        {<DescriptionProfile authUser={authUser} user={user} lender={lender} />}
                    </Tab.Panel>
                    {user.role.id === 3 && <Tab.Panel className={classNames(
                        'rounded-xl ',
                        'ring-white focus:outline-none '
                    )}> <RatingsComponent authUser={authUser} user={user} userReview={userReview} />
                    </Tab.Panel>}
                    <Tab.Panel className={classNames(
                        '  ',
                        'ring-white focus:outline-none '
                    )}>
                        <ContratadosComponent authUser={authUser} services={user.service_recruiters} user={user} />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
