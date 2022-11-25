import React from 'react'
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BasicRating from '/components/elements/Rating';
import ButtonCard from '/components/elements/ButtonCard';
import Image from 'next/image';
import BackgroundLetterAvatars from '../elements/AvatarInitials';
import Link from 'next/link';

const ProfileComponent = ({ user, review }) => {
    return (
        <div className='flex flex-col'>
            {user ?
                <>
                    <div className='flex flex-col rounded-md bg-gray-300 dark:bg-gray-700' >
                        <div className='flex flex-col gap-2 border-b dark:border-gray-400  p-5'>
                            <div className="flex flex-row flex-wrap justify-between">
                                <div className="flex flex-row flex-wrap">
                                    {
                                        user.avatar ?

                                            <div className="h-[100px] w-[100px] md:w-[150px] md:h-[150px] relative aspect-square cursor-pointer"
                                            // onClick={router.replace( '/prestadores/' + user?.Slug )}
                                            >
                                                <Image
                                                    src={`/v${user.avatar}`}
                                                    alt={"Picture of the user " + user?.name}
                                                    layout="fill" // required                   
                                                    objectFit="cover"// change to suit your needs
                                                    className="rounded-full w-full"
                                                    loading="eager"
                                                    priority={true}
                                                // quality={100} // just an example
                                                />

                                            </div>
                                            :
                                            <div className="h-[100px] w-[100px] md:w-[150px] md:h-[150px] aspect-square cursor-pointer"
                                            // onClick={router.replace( '/prestadores/' + user?.Slug )}
                                            >
                                                <BackgroundLetterAvatars fontSize='xxx-large' firtsName={user?.firstName} lastName={user?.lastName} />
                                            </div>
                                    }

                                    <div className="pl-5 flex flex-col">
                                        <div className="flex justify-start items-end text-3xl ">
                                            {user.name}
                                            <VerifiedIcon sx={{ fontSize: 30 }} className="ml-2" />
                                        </div>
                                        <div className="flex justify-start items-center pt-2">
                                            <LocationOnIcon sx={{ fontSize: 20 }} /> <div className="text-xl pl-1">
                                                {(user.provincia ? user.provincia.name + ', ' : 'Provincia , ') + (user.localidad ? user.localidad.name : 'Ciudad')}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex py-2 items-center">
                                    <button
                                        type="button"
                                        className="py-2 px-3 mr-2 my-2 text-base font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-gray-100 hover:text-blue-700  dark:bg-gray-800 dark:text-gray-400  dark:hover:text-white dark:hover:bg-gray-600"
                                    >
                                        Contratar
                                    </button>
                                    {user.phone &&
                                        <Link href={'https://api.whatsapp.com/send?phone=' + user.phone} >
                                            <button
                                                type="button"
                                                className="focus:outline-none text-gray-900 bg-orange-brand hover:bg-yellow-500 focus:ring-2 focus:ring-orange-high dark:focus:ring-orange-high font-medium rounded-lg text-base px-3 py-2 mr-2 my-2 "
                                            >
                                                Mensaje
                                            </button>
                                        </Link>
                                    }
                                </div>
                            </div>
                            <div>
                                <BasicRating
                                    hover={-1}
                                    counts={review?.reviewsCount}
                                    value={review?.averageScore}
                                    readOnly={true} />
                            </div>
                            <h5 className="  pt-2 mx-2  mb-1 px-1 text-base font-medium ">
                                {user.aboutme ? user.aboutme : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumend    laboriosam, quod aut officiis ea deleniti repellat nisi delectus magnam reiciendis?'}
                            </h5>
                        </div>

                        <div className='flex p-5 flex-col '>
                            <div className='flex flex-row gap-20  py-3 justify-start items-center'>
                                <span>
                                    Skills
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
                            <div className='flex flex-row gap-20  py-3 justify-start items-center'>
                                <span>
                                    Edad
                                </span>
                                <div className='flex'>
                                    {user.birth}
                                </div>
                            </div>
                        </div>

                    </div>
                </>
                :
                <>
                </>}

        </div>
    )
}

export default ProfileComponent