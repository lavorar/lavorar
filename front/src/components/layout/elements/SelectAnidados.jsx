import React, { useState } from "react";

import dataJson from "./city.json";
import SelectList from "./SelectList";

function SelectAnidados() {
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
  return (
    <>
      {/* <div>SelectAnidados</div> */}
      <SelectList
        title="Provincia"
        data={dataJson}
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
      {state && 
      <SelectList
        title="estado"
        data={availableTags[0]}
        handleChange={(e) => {
          setTown(e.target.value);
        }}
      />
}

      {/* <pre>
        <code>
          {state} - {town} - {subUrb}
        </code>
      </pre> */}
    </>
  );
}

export default SelectAnidados;
