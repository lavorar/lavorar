import React from "react";
import { useState } from "react";
import dataJson from "../../city.json";
import Select from "react-select";
import SelectList from "./SelectList";

const HomeSearchBar = (props) => {
  const handleSubmitSearch = (e) => {
    e.preventDefault();
  };
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [subUrb, setSubUrb] = useState("");

  let availableTags = new Array();
  dataJson.forEach((a) => {
    if (a.id == state) {
      availableTags.push(a.ciudades);
    }
  });
  console.log(availableTags);

  console.log(dataJson);

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
        <SelectList
        title="Provincia"
        data={dataJson}
        handleChange={(e) => {
          setState(e.target.value);
        }}

      />     
          {/* <input
            id="searchLocation"
            type="text"
            className="w-11/12 overflow-clip h-full  bg-transparent outline-none "
            placeholder="Ubicacion"
          /> */}
          {/* <select
            className="w-11/12 overflow-clip h-full  bg-transparent outline-none"
            name=""
            placeholder="ubicacion"
          >
            <option
              className="text-slate-800 disabled selected"
              value="outline-none"
            >
              Provicia
            </option>

            {dataJson.map((getCountry, index) => (
              <option
                key={index}
                className="bg-slate-600 text-left hover:bg-slate-800"
                value="1"
              >
                {" "}
                {getCountry.nombre}{" "}
              </option>
            ))}
          </select> */}
        </div>
        <div className="flex justify-center md:border-0 md:rounded-none w-full md:w-1/2 h-full md:h-[60%] border-gray-900 rounded-full dark:border-white-ghost border md:mr-2 text-black dark:text-white-ghost">
          
        {state && <SelectList
      title="Ciudad"
      data={availableTags[0]}
      handleChange={(e) => {
        setTown(e.target.value);
      }}
      
      
      />}
          
          
          {/* <input

            id="searchLocation"
            type="text"
            className="w-11/12 overflow-clip h-full  bg-transparent outline-none "
            placeholder="Ubicacion"
          /> */}
          {/* <select
            className="w-11/12 overflow-clip h-full  bg-transparent outline-none"
            name=""
            placeholder="ubicacion"
          >
            <option
              className="text-slate-800 disabled selected"
              value="outline-none"
            >
              ciudad-localidad
            </option>

            {dataJson.map((getCountry, index) => (
              <option
                key={index}
                className="bg-slate-600 text-left hover:bg-slate-800"
                value="1"
              >
                {" "}
                {getCountry.nombre}{" "}
              </option>
            ))}
          </select> */}
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
