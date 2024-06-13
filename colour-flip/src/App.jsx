import React from "react";

function App({ setcolour }) {
  const colors = [
    "bg-red-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-indigo-200",
    "bg-purple-200",
    "bg-pink-200",
    "bg-teal-200",
    "bg-orange-200",
    "bg-gray-200",
  ];

  const handleButton = () => {
    let x = Math.random();
    x = x * 10;
    x = Math.floor(x);
    // console.log(colors[x]);
    setcolour(colors[x]);
  };
  return (
    <>
      <h1 className="text-center text-4xl font-bold">Colour flipper</h1>
      <div className="min-h-screen flex justify-center items-center">
        {/* <p className="text-2xl">the color is:</p> */}
        <button
          onClick={handleButton}
          className="bg-green-100 rounded-lg border-gray-400 items-center py-5 px-10"
        >
          click me
        </button>
      </div>
    </>
  );
}

export default App;
