import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import RatingForm from './RatingForm'
import IconWithButton from '../elements/IconWithButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function MyModal({ isOpen, setIsOpen, closeModal, review, user, setReviewUserAuth, lender, setreviews }) {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-100  dark:bg-gray-700 p-6 text-left align-middle shadow-xl transition-all">
                                    <div
                                        className='group absolute top-2 right-2 cursor-pointer  duration-300  text-gray-900  dark:text-white-ghost'>
                                        <IconWithButton onClick={closeModal}>
                                            <CloseRoundedIcon sx={{ fontSize: '25px' }} />
                                        </IconWithButton>

                                    </div>
                                    <RatingForm lender={lender} closeModal={closeModal} user={user} setReviewUserAuth={setReviewUserAuth} review={review} setreviews={setreviews} />

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}