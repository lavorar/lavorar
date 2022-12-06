import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import { useQuery } from 'react-query'
import HoverRating from '../elements/Rating'
import RatingForm from '../rating/RatingForm'
import Review from '../rating/Review'


const RatingsComponent = ({ authUser, user, userReview }) => {
    const [userClient, setuserClient] = useState(user)
    const router = useRouter()
    let slug = user ? user.Slug : router.query?.userSlug
    const [reviews, setreviews] = useState([])
    const getRatings = async () => {
        await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/ratings/reviews/${slug}`)
            .then(({ data }) => {
                // console.log(data)
                setreviews(data.reviews)
            }).catch((error) => {
                console.log(error)
            })
    }
    const [reviewUserAuth, setReviewUserAuth] = useState(userReview)
    console.log('reviewUserAuth', reviewUserAuth)
    console.log('user', user)
    const queryRatings = useQuery(['ratings'], getRatings, {
        staleTime: 1
    })
    const contract = authUser?.service_recruiters?.filter(function (service) {
        return service.lender.id === userClient.id
    })   

    return (
        <div>

            {(slug !== authUser?.Slug) && <div className={'bg-gray-300 relative dark:bg-gray-700  mt-4 p-5 rounded-xl'}>
                {
                    authUser ?
                        reviewUserAuth ?
                            <Review review={reviewUserAuth} 
                            setreviews={setreviews} setReviewUserAuth={setReviewUserAuth} authUser={authUser} user={userClient} lender={userClient} />
                            :
                            contract?.length ?
                                <RatingForm user={userClient} setreviews={setreviews} setReviewUserAuth={setReviewUserAuth} review={reviewUserAuth} />
                                :
                                <div>
                                    <span className='font-bold'>Debes Contratar </span>
                                    a este prestador para reseñarlo
                                </div>

                        :
                        <div className="py-2 flex items-center gap-2 flex-row">
                            <Link href={{
                                pathname: '/login',
                                query: { slug: '/' + userClient.Slug }
                            }} >
                                <p className="text-xl text-orange-high cursor-pointer">Inicia Sesion</p>
                            </Link>
                            <p className="text-xl">para publicar una reseña!</p>

                        </div>
                }
            </div>}

            <div className="mt-5 p-5 flex flex-wrap justify-evenly gap-4 lg:gap-4 w-full rounded-xl bg-gray-300 relative dark:bg-gray-700 ">
                {reviews.length > 0 ?
                    reviews.map((review, index) => (
                        <div key={index} className={`${index < reviews.length - 1 ? 'border-b dark:border-gray-400 border-gray-500' : ''} bg-gray-300 dark:bg-gray-700   w-full`}>
                            <Review counts={0} review={review} />
                        </div>
                    ))

                    :
                    <div>Aun no hay reseñas</div>
                }
            </div>

        </div>
    )
}

export default RatingsComponent