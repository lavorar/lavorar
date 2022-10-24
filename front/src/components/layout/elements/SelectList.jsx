import React from "react";

const SelectList = ({ title, data, handleChange }) => {
  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);
  let options = data;
  return (
    <>
      <div>
        {/* <label htmlFor={id} >{label} </label> */}

        <select  className="w-11/12 overflow-clip h-full  bg-transparent outline-none" id={id} name={id} onChange = {handleChange}>
          <option value="" className="text-slate-800 disabled selected">  { title}</option>
          
          {options && options.map((el)=> <option className="text-slate-800 disabled selected" key={el.id * el.id} value={el.id}>{el.nombre}</option>
          ) }
        </select>
      </div>
    </>
  );
};

export default SelectList;
