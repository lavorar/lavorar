import React from "react";
import { useState } from "react";
import locations from "../../city.json";
import Select from "react-select";


const HomeSearchBar = (props) => {
  const handleSubmitSearch = (e) => {
    e.preventDefault();
  };


  

  console.log(locations);

  return (
    <form
      onSubmit={(e) => handleSubmitSearch(e)}
      className="max-w-5xl mt-8 h-40 md:h-auto w-full"
    >
      <div className="inline-flex md:flex-row gap-y-2 flex-col items-center text-gray-300 justify-between p-5 md:pl-5 md:pr-1 shadow md:border-2 h-full md:h-16 w-full py-1 md:rounded-full border-gray-900 dark:border-gray-200">
        <div className="flex justify-center w-full md:w-1/2 h-full md:h-[60%] border-gray-900 rounded-full dark:border-white-ghost border md:border-0 md:rounded-none md:border-r md:mr-2 text-black dark:text-white-ghost">
          <input
            className="w-11/12 overflow-clip h-full  bg-transparent outline-none "
            placeholder="Categoria"
          />
        </div>
        <div className="flex justify-center md:border-0 md:rounded-none w-full md:w-1/2 h-full md:h-[60%] border-gray-900 rounded-full dark:border-white-ghost border md:mr-2 text-black dark:text-white-ghost">
          <input
            id="searchLocation"
            type="text"
            className="w-11/12 overflow-clip h-full  bg-transparent outline-none "
            placeholder="Ubicacion"
          />
        </div>
        <div className="flex space-x-12 items-center w-2/3 justify-center h-full ml-2 md:w-52 bg-orange-brand rounded-full">
          <button type="submit" className=" text-3xl font-medium text-white">
            Buscar
          </button>
        </div>
      </div>
    </form>
  );
};

export default HomeSearchBar;
