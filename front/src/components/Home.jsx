import Card from "./layout/elements/Card";
import { useContext, useEffect, useState } from "react";
// import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { authContext, useAuth } from "../context/authContext";
import HomeSearchBar from "./layout/elements/HomeSearchBar";
import axios from 'axios';

export function Home() {
  const { user, loading } = useAuth();
  const navigate = useNavigate("/");
  const [categories, setcategories] = useState(false);
  const endpoint = 'http://localhost:1337/api/users'

  useEffect(() => {
    getAllCategories()
  }, []);

  const getAllCategories = async () => {
    await axios.get(endpoint)
      .then(function (response) {
        console.log(response.data);
        setcategories(response.data)
      })
      .catch(function (error) {
        console.error('error', error.response);
      });
  }



  console.log(categories);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="flex flex-col  items-center w-full p-1 bg-gray-50 dark:bg-gray-700 text-black">
      <HomeSearchBar />
      <div className="mt-10 flex flex-wrap justify-evenly gap-4 lg:gap-8 w-full lg:px-5">
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
        <Card />
        <div className="hidden xl:block">
          <Card />
        </div>
        <div className="hidden xl:block">
          <Card />
        </div>

      </div>
    </div>
  );
}
