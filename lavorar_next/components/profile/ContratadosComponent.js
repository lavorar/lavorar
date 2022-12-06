import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import { useQuery } from 'react-query'
import BackgroundLetterAvatars from '../elements/AvatarInitials'
import HoverRating from '../elements/Rating'
import RatingForm from '../rating/RatingForm'
import Review from '../rating/Review'
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from 'next/image'


const ContratadosComponent = ({ authUser, user, services }) => {
    const router = useRouter()
    const [servicesClient, setservicesClient] = useState(services)
    const [reviews, setreviews] = useState([])
    const getReviewsAuthor = async () => {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/ratings/reviews?[author][id]=${user?.id}`)
        return data
    }
    const { data } = useQuery(['reviews'], getReviewsAuthor, {
        onSettled: (data) => {
            console.log('data query', data)
            setreviews(data)
            setservicesClient(servicesClient.map((serv) => {
                const review = data.find((rev) => rev.related_to.slug === serv.lender.Slug)
                return {
                    ...serv,
                    review
                }
            }))
        },
        staleTime: 1,
    })
    const handlereview = (review) => {
        setservicesClient(servicesClient.map((serv) => {
            if (serv.review) {
                if (serv.review.id === review.id) {
                    serv.review = review
                }
            }
            else {
                serv.review = review
            }
            return serv
        }))
        setreviews(reviews.map((rev) => {
            if (rev.id === review.id) {
                rev === review
            }
            return rev
        }))
    }


    console.log('asPath', servicesClient)

    return (
        <div>
            <h2 className='text-3xl font-extrabold text-center my-5'>  {router.asPath.includes('/contratados') ? 'Usuarios que contrataste'
                : 'Usuarios que contrato ' + user.name}</h2>
            <div className=" flex flex-col justify-evenly gap-9 lg:gap-10 w-full   ">
                {servicesClient.length > 0 ?
                    servicesClient.map((serv, index) => (
                        <div key={index} className={`${index < serv.length - 1 ? 'border-b' : ''} bg-gray-300 rounded-xl dark:bg-gray-700  p-5  w-full`}>

                            <div className='flex  relative flex-col lg:flex-row lg:justify-between items-center gap-4 '>
                                <div className='flex flex-col items-center lg:items-start lg:flex-row lg:justify-between  gap-4  '>
                                    {
                                        serv?.lender?.avatar ?
                                            <Link href={`/${serv.lender?.Slug}`}>
                                                <a className="   w-[80px] h-[80px] relative aspect-square cursor-pointer"
                                                // onClick={router.replace( '/' + user?.Slug )}
                                                >
                                                    <Image
                                                        src={`/f_auto,q_auto,w_80,h_80/v${serv?.lender.avatar}`}
                                                        alt={"Picture of the user " + serv?.lender?.name}
                                                        layout="fill" // required                   
                                                        objectFit="cover"// change to suit your needs
                                                        className="rounded-full w-full"
                                                        loading="eager"
                                                        priority={true}
                                                        quality={100} // just an example
                                                    />

                                                </a>
                                            </Link>
                                            :
                                            <Link href={`/${serv.lender?.Slug}`}>
                                                <a className="   w-[80px] h-[80px] aspect-square cursor-pointer"
                                                // onClick={router.replace( '/' + user?.Slug )}
                                                >
                                                    <BackgroundLetterAvatars fontSize='xxx-large' firtsName={serv?.lender?.firstName} lastName={serv?.lender?.lastName} />
                                                </a>
                                            </Link>

                                    }
                                    <div className="flex flex-col justify-self-start">
                                        <Link href={`/${serv.lender?.Slug}`}>
                                            <a className="text-xl text-center lg:text-left ">
                                                {serv?.lender.name}
                                                <VerifiedIcon sx={{ fontSize: 30 }} className="ml-2" />
                                            </a>
                                        </Link>
                                        <div className="flex justify-center text-md text-center lg:justify-start items-center  lg:items-start pt-2">
                                            <LocationOnIcon sx={{ fontSize: 20 }} />{(serv?.lender.provincia ? serv?.lender.provincia.name + ', ' : 'Provincia , ') + (serv?.lender.localidad ? serv?.lender.localidad.name : 'Ciudad')} <div className=" pl-1">
                                            </div>
                                        </div>
                                        <div className='flex self-center lg:self-start mt-2'>
                                            <HoverRating
                                                hover={-1}
                                                counts={serv?.lender?.countsReview}
                                                value={serv?.lender?.averageScore}
                                                readOnly={true} />
                                        </div>
                                        {serv?.lender?.phone &&
                                            <div className='flex justify-center lg:justify-start'>
                                                <Link href={'https://api.whatsapp.com/send?phone=' + serv.lender?.phone} >
                                                    <button
                                                        type="button"
                                                        className="focus:outline-none w-auto max-w-xs text-gray-900 bg-orange-brand hover:bg-yellow-500 focus:ring-2 focus:ring-orange-high dark:focus:ring-orange-high font-medium rounded-lg text-base px-5 py-2 mr-2 my-2 "
                                                    >
                                                        Mensaje
                                                    </button>
                                                </Link>
                                            </div>
                                        }
                                    </div>
                                </div>

                                <div className='w-full lg:w-5/12 mt-10 flex justify-center'>
                                    {
                                        serv?.review ?
                                            <Review authUser={authUser} lender={serv.lender} user={user} review={serv?.review} setReviewUserAuth={handlereview} setreviews={handlereview} />
                                            :
                                            authUser.Slug === router.query.userSlug ?
                                                <RatingForm lender={serv.lender} user={user} setreviews={handlereview} setReviewUserAuth={handlereview} />
                                                :
                                                <div className='flex justify-center'>{user.name + ' aun no ha reseñado a ' + serv.lender.name} </div>
                                    }
                                </div>
                            </div>

                        </div>
                    ))

                    :
                    <div className={` bg-gray-300 rounded-xl dark:bg-gray-700  p-5  w-full`}>
                        Este usuario aun no contrato un Servicio</div>
                }
            </div>

        </div>
    )
}

export default ContratadosComponent