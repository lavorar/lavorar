import Link from 'next/link'
import React, { useState } from 'react'
import { getTokenFromLocalCookie } from '../../lib/auth'
import HoverRating from '../elements/Rating'
import ModalEditRating from './ModalEditRating'

const Review = ({ review, user, setReviewUserAuth }) => {
    let [isOpen, setIsOpen] = useState(false)

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
        <div className=" items-start w-full">
            <div className="pb-1">

                <div className="flex justify-between md:justify-start ">
                    <div>
                        <p
                            className=" font-bold text-gray-900 dark:text-orange-pastel mb-1 cursor-pointer">
                            {review.author ? review.author.name : "User"}
                        </p>
                    </div>
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
            {user && (

                <div className="flex absolute top-1 right-1 items-center">
                    <button
                        onClick={openModal}
                        type="button"
                        className="py-2 px-3 mr-2 my-2 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-gray-100 hover:text-blue-700  dark:bg-gray-800 dark:text-gray-400  dark:hover:text-white dark:hover:bg-gray-600"
                    >
                        Editar
                    </button>
                    <ModalEditRating user={user} setReviewUserAuth={setReviewUserAuth} isOpen={isOpen} review={review} setIsOpen={setIsOpen} closeModal={closeModal} />
                </div>
            )}

        </div>
    )
}

export default Review