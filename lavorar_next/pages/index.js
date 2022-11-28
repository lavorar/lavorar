import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import Card from "../components/elements/Card";
import HomeSearchBar from "../components/elements/HomeSearchBar";
import Layout from "../components/Layouts/mainLayout";
import { fetcher } from "../lib/api";
import { getTokenFromServerCookie } from "../lib/auth";
import { useFetchUser, useUser } from "../lib/AuthContext";

export default function Home({ user, users }) {
  return (
    <Layout user={user} >
      <div className="flex flex-col  items-center w-full p-1 text-black">
        <HomeSearchBar />
        <div className="mt-10 flex flex-wrap  justify-evenly  gap-4 lg:gap-8 w-full lg:px-5">
          {
            users?.map((lender) => (
              <Card key={lender.id} authUser={user} lender={lender} slug={lender.Slug}
              />
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
    const queryuser = qs.stringify({
      populate: {
        notifications: {
          sort: ['review_updatedAt:desc'],
          limit: 10,
          populate: '*'
        },
        notifications_requested: {
          sort: ['review_updatedAt:desc'],
          populate: '*'
        },
        // lenders: {
        //     populate: '*'
        // },
        service_recruiters: {
          populate: {
            lender: true
          }
        },
      }
    }, {
      encodeValuesOnly: true, // prettify URL
    });
    user = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me?${queryuser}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
  }
  const query = qs.stringify({
    sort: ['countsReview:desc', 'averageScore:desc'],
    filters: {
      role: {
        id: {
          $eq: 3,
        }
      },
    },
    limit: 6,
    populate: '*',
  }, {
    encodeValuesOnly: true, // prettify URL
  });
  await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users?${query}`).then((data) => {
    users = data.data
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