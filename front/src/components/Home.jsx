import Card from "./layout/elements/Card";
import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { authContext, useAuth } from "../context/authContext";
import HomeSearchBar from "./layout/elements/HomeSearchBar";
import axios from 'axios';
import locations from "./city.json";

export function Home() {
  const { user, loading } = useAuth();
  const [categories, setcategories] = useState(false);
  const navigate = useNavigate("/");
  const endpoint = 'http://localhost:1337/api/categories'

  
  // useEffect(() => {
  //   getAllCategories()
  // }, [])

  // const getAllCategories = async () => {
  //   await axios.get(endpoint)
  //     .then(function (response) {
  //       //console.log("success", response.data);
  //       setcategories(response.data)
  //     })
  //     .catch(function (error) {
  //       console.error('error', error.response);
  //     });
  // }

  // console.log(locations);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="flex flex-col  items-center w-full p-1 bg-gray-50 dark:bg-gray-700 text-black">
      <HomeSearchBar />
      <div className="mt-10 flex flex-wrap justify-evenly duration-300 gap-4 lg:gap-8 w-full lg:px-5">
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
