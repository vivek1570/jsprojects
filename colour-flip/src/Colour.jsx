import React, { useState } from "react";
import App from "./App.jsx";

function Colour() {
  const [col, setcol] = useState("bg-red-400");
  console.log(col);
  return (
    <div className={`${col}`}>
      <App setcolour={setcol} />
    </div>
  );
}

export default Colour;
