import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import Card from "../components/elements/Card";
import HomeSearchBar from "../components/elements/HomeSearchBar";
import Layout from "../components/Layouts/mainLayout";
import { fetcher } from "../lib/api";
import { getTokenFromServerCookie } from "../lib/auth";
import { useFetchUser, useUser } from "../lib/authContext";

export default function Home({user, users}) {
  // const { user, loading } = useFetchUser();
  // const qs = require('qs');
  // const query = qs.stringify({
  //   filters: {
  //     role: {
  //       id: {
  //         $eq: 3,
  //       }
  //     },

  //   },
  //   populate: '*',
  // }, {
  //   encodeValuesOnly: true, // prettify URL
  // });
  // const [userslender, setuserslender] = useState([])
  // // const users = async () => {
  // //   const { data } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users?${query}`)
  // //   //  .then((data) => {      
  // //   //    setuserslender(data.data.splice(0,6))
  // //   //   }).catch((data) => {
  // //   //     setuserslender(data.data)
  // //   //   })
  // //   return data
  // // }

  // const queryusers = useQuery(['users'], users, {
  //   onSettled: (data) => {
  //     setuserslender(data.splice(0, 5))
  //   },

  //   staleTime: Infinity
  // })

  // console.log(queryusers)
  // console.log(userslender)
  // console.log(user)
  return (
    <Layout user={user} >
      <div className="flex flex-col  items-center w-full p-1 text-black">
        <HomeSearchBar />
        <div className="mt-10 flex flex-wrap  justify-evenly  gap-4 lg:gap-8 w-full lg:px-5">
          {
            users?.map((user) => (
              <Card key={user.id} user={user} />
            ))
          }
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <div className="hidden xl:block">
            <Card />
          </div>
          <div className="hidden xl:block">
            <Card />
          </div> */}

        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const us = true
  const qs = require('qs');
  let users
  let user
  const jwt = getTokenFromServerCookie(req);
  if (jwt) {
    user = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
  }
  const query = qs.stringify({
    filters: {
      role: {
        id: {
          $eq: 3,
        }
      },

    },
    populate: '*',
  }, {
    encodeValuesOnly: true, // prettify URL
  });
  await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users?${query}`).then((data) => {
    users = data.data.splice(0, 6)
  }).catch((data) => {
    users = null
  })

  if (user) {
    return {
      props: {
        users, user
      },
    };
  }
  else {
    return {
      props: {
        users
      },
    };
  }

}