import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import { useQuery } from 'react-query'
import HoverRating from '../elements/Rating'
import RatingForm from '../rating/RatingForm'
import Review from '../rating/Review'


const RatingsComponent = ({ user, userReview }) => {
    const router = useRouter()
    let slug = router.query.userSlug
    const [reviews, setreviews] = useState([])
    const getRatings = async () => {
        await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/ratings/reviews/${slug}`)
            .then(({ data }) => {
                setreviews(data.reviews)
            }).catch((error) => {
                console.log(error)
            })
    }
    const queryRatings = useQuery(['ratings'], getRatings, {
        staleTime: 1
    })
    return (
        <div>
            <div className={'bg-gray-300 relative dark:bg-gray-700 mt-10 p-5 rounded-md'}>
                {
                    user ?
                        slug === user.Slug ?
                            <div>
                                No puedes Reseñarte a vos mismo
                            </div>
                            :
                            userReview ?
                                <Review review={userReview} user={user} />
                                :
                                <RatingForm user={user} />

                        :
                        <div className="py-2 flex items-center gap-2 flex-row">
                            <Link href={'/login'} >
                                <p className="text-xl text-orange-high cursor-pointer">Inicia Sesion</p>
                            </Link>
                            <p className="text-xl">para publicar una reseña!</p>

                        </div>
                }
            </div>
            <div className={'bg-gray-300  dark:bg-gray-700 mt-10 p-5 rounded-md flex flex-col gap-7'}>

                {reviews.length > 0 ?
                    reviews.map((review, index) => (
                        <Review key={index} counts={0} review={review} />
                    ))
                    :
                    <div>Aun no hay reseñas</div>
                }
            </div>

        </div>
    )
}

export default RatingsComponent