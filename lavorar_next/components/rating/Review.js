import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { getTokenFromLocalCookie } from '../../lib/auth'
import { useUser } from '../../lib/AuthContext'
import HoverRating from '../elements/Rating'
import ModalEditRating from './ModalEditRating'

const Review = ({ review, user, setReviewUserAuth, lender, authUser, setreviews }) => {
    let [reviewClient, setreviewClient] = useState(review)
    let [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    const jwt = getTokenFromLocalCookie()    
    const { user: userAuthent } = useUser()
    let [userSlug, setuserSlug] = useState(userAuthent? userAuthent.Slug : null)
    console.log('userAuthent', userAuthent)
    console.log('review', review)
    function formatMyDate(value, locale = 'en-es') {
        return new Date(value).toLocaleDateString(locale);
    }
    function closeModal() {
        setIsOpen(false)
    }
    

    function openModal() {
        setIsOpen(true)
    }
    return (
        <div className=" items-start w-auto">
            <div className="pb-1">

                <div className="flex justify-between md:justify-start ">
                    <Link href={{
                        pathname: '/[userSlug]',
                        query: { userSlug: review.author?.Slug, },
                    }} >
                        <a>
                            <p
                                className=" font-bold text-gray-900 dark:text-orange-pastel mb-1 cursor-pointer">
                                {review.author ? review.author.name : "User"}
                            </p>
                        </a>
                    </Link>
                    <div>
                        <p className="md:ml-5 mb-1">
                            {"\t"} en {formatMyDate(review.createdAt)}
                        </p>
                    </div>
                </div>
                <HoverRating
                    value={review.score}
                    hover={-1}
                    readOnly={true}
                    counts={0}
                />
            </div>
            {
                review.comment && (
                    <div className="rounded">
                        <p className="my-3">
                            {review.comment}
                        </p>
                    </div>
                )
            }
            {userAuthent ? (
                (userSlug === reviewClient.author.Slug) &&
                <div className={`md:absolute  top-1 right-1 flex  items-center justify-center`}>
                    <button
                        onClick={openModal}
                        type="button"
                        className="py-2 px-3 mr-2 my-2 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-gray-100 hover:text-blue-700  dark:bg-gray-800 dark:text-gray-400  dark:hover:text-white dark:hover:bg-gray-600"
                    >
                        Editar Review
                    </button>
                    <ModalEditRating setreviews={setreviews} lender={lender} user={authUser} setReviewUserAuth={setReviewUserAuth} isOpen={isOpen} review={review} setIsOpen={setIsOpen} closeModal={closeModal} />
                </div>
            )
        :<></>}

        </div>
    )
}

export default Review