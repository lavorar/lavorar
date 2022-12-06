import React, { useState } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HoverRating from "./Rating";
import ButtonCard from "./ButtonCard";
import Link from 'next/link'
import BackgroundLetterAvatars from "./AvatarInitials";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import axios from "axios";
import HireLender from "./HireLender";

const Card = ({ lender, authUser, slug }) => {

  return (
    <div className="inline-block mt-3 text-gray-900  overflow-ellipsis w-72 bg-gray-200 rounded-lg border border-gray-200 shadow-md ">

      <div className="flex flex-col  mx-1 pb-2 mt-3">
        <div className="flex h-24 justify-between  mx-2">
          <div className="flex flex-row">
            {
              lender?.avatar ?
                <Link href={{
                  pathname: '/[userSlug]',
                  query: { userSlug: lender?.Slug, },
                }} >
                  <a className="h-16 w-16 relative aspect-square cursor-pointer"
                  // onClick={router.replace( '/prestadores/' + lender?.Slug )}
                  >
                    <Image
                      src={`/v${lender.avatar}`}
                      alt={"Picture of the lender " + lender?.name}
                      layout="fill" // required                   
                      objectFit="cover" // change to suit your needs
                      className="rounded-full w-full" // just an example
                    />
                  </a>
                </Link>
                :
                <>
                  {
                    lender ?
                      <Link href={{
                        pathname: '/[userSlug]',
                        query: { userSlug: lender?.Slug, },
                      }} >
                        <a className="h-16 w-16 cursor-pointer aspect-square"
                        // onClick={router.replace( '/prestadores/' + lender?.Slug )}
                        >
                          <BackgroundLetterAvatars fontSize='large' firtsName={lender?.firstName} lastName={lender?.lastName} />
                        </a>
                      </Link>
                      :

                      <> </>
                  }
                </>

            }

            <div className="flex flex-col ml-1">
              <Link href={{
                pathname: '/[userSlug]',
                query: { userSlug: lender?.Slug, },
              }} >
                <a>
                  <div className="flex justify-between text-sm ml-1">
                    {lender?.name}
                    <VerifiedIcon fontSize="small" className="pl-1" />
                  </div>
                </a>
              </Link>

              <div className="flex justify-between pt-2">
                <LocationOnIcon fontSize="small" /> <div className="text-sm">{(lender?.provincia ? lender.provincia.name + ', ' : 'Provincia , ') + (lender?.localidad ? lender.localidad.name : 'Ciudad')}</div>
              </div>
            </div>
          </div>
          <div className="flex pb-2 text-orange-brand ">
            $1500/hr
          </div>
        </div>

        <HoverRating
          counts={lender?.countsReview ? lender?.countsReview : 0}
          value={lender?.averageScore}
          readOnly={true} />
        <div className="flex flex-col justify-between my-2 h-28">
          <span className=" border-0 pt-2 border-t mx-2  border-gray-500 overflow-clip  mb-1 px-1 text-base font-medium text-gray-900 dark">
            {lender?.aboutme ? lender.aboutme : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumend    laboriosam, quod aut officiis ea deleniti repellat nisi delectus magnam reiciendis?'}
          </span>
          <div>
            {
              lender?.categories?.map((categorie) => (
                <ButtonCard key={categorie.id + lender.id} href={'/buscar/' + categorie?.Slug} text={categorie.name} />
              ))
            }

          </div>
        </div>
        <div className="flex flex-wrap mx-2 border-0 pt-2 border-t  border-gray-500 justify-end space-x-3 ">
          {authUser ?
            authUser.id === lender.id ?
              <></>
              :
              <HireLender authUser={authUser} lender={lender} />
            :
            <></>}
          {lender?.phone &&
            <Link href={'https://api.whatsapp.com/send?phone=' + lender.phone} >
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
    </div>
  );
};

export default Card;
