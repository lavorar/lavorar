import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'
import { useQuery } from 'react-query';
import { ReviewsConfigContext } from 'strapi-ratings-client';
import { getTokenFromLocalCookie } from '../../lib/auth';
import HoverRating from '../elements/Rating'

const RatingForm = ({ user, review }) => {
    const [comment, setComment] = useState(review ? review.comment : "")
    const [value, setValue] = useState(5 || review?.score);
    const [hover, setHover] = useState(5);

    const router = useRouter()
    let slug = router.query.userSlug
    const onChange = (event, newValue) => {
        setValue(newValue);
    }
    const onChangeActive = (event, newHover) => {
        setHover(newHover);
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const jwt = getTokenFromLocalCookie();
        if (review) {
            axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/ratings/reviews/updateReview/${slug}`,
                { comment: comment, score: value }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`,
                }
            }).then((data) => router.reload())
        }
        else {
            axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/ratings/reviews/${slug}`,
                { comment: comment, score: value }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`,
                }
            }).then((data) => router.reload())
        }
    }

    const handleInputComment = (e) => {
        setComment(e.currentTarget.value)
    }
    return (

        <form
            onSubmit={onSubmit}
        >
            <h1 className="flex justify-start text-xl md:text-xl font-bold leading-tighter mb-2">
                <span className="bg-clip-text text-center text-transparent bg-gray-700  dark:bg-gray-100 py-2">
                    {'Escribe una Reseña'}
                </span>
            </h1>
            <HoverRating
                onChange={onChange}
                onChangeActive={onChangeActive}
                value={value}
                hover={hover}
            />
            <div className={'flex-col mt-1'}>
                <div className="flex flex-col mb-2 ">
                    <label className="font-bold text-lg mb-2" htmlFor="comment">
                        Comentario
                    </label>
                    <textarea
                        className={`border-2 py-1 px-2 w-3/5 rounded-md outline-none focus:border-blue-500 bg-transparent`}
                        type="comment"
                        name="comment"
                        onChange={handleInputComment}
                        value={comment}
                        placeholder="Escribe un comentario acá"
                    />
                </div>

                <button
                    className='block  mt-6 text-gray-900 bg-orange-pastel text-lg rounded py-2 w-1/2 md:w-1/3'
                    type="submit"
                >
                    Enviar Reseña
                </button>
            </div>
        </form>
    )
}

export default RatingForm