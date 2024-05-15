import React, { useState,useEffect } from "react";

const Color = () => {
  const [color, setColor] = useState('hex');
  const [colorValue, setColorValue] = useState('#000000');

useEffect(()=>{color==='rgb' ? handleGeneratergbcolor():handleGenerateHexcolor()},[color])

// random number generator
  function GenerateRandomColor(length) {
    return Math.floor(Math.random() * length);
  }

  // Function to handle generating random hex color
  function handleGenerateHexcolor() {
    let hexInitialCol = "#";
    const hexLetter = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    for (let i = 0; i < 6; i++) {
      hexInitialCol += hexLetter[GenerateRandomColor(hexLetter.length)];
    }
    setColorValue(hexInitialCol); // Update colorValue state with generated hex color
  
  }

  // Function to handle generating random RGB color
  function handleGeneratergbcolor() {

    const green = GenerateRandomColor(255)
    const red = GenerateRandomColor(255)
    const blue = GenerateRandomColor(255)
  setColorValue(`rgb(${red},${green},${blue})`)

  }


  return (
    <main style={{background:colorValue}} className={`flex flex-col min-h-screen`}>
      <div className="flex gap-7 justify-center my-[100px]">
        <button onClick={() => setColor('hex')} className="bg-white text-black px-1 py-3 sm:px-4 lg:px-4 rounded active:translate-x-2 hover:bg-red-700">Create Hex Color</button>
        <button onClick={() => setColor('rgb')} className="bg-white text-black px-1 py-3 sm:px-4 lg:px-4  rounded active:translate-x-2 hover:bg-red-700">Create RGB Color</button>
        <button onClick={() =>{color === 'hex' ? handleGenerateHexcolor() : handleGeneratergbcolor()}} className="bg-white text-black px-1 py-1 sm:px-4 lg:px-4  rounded active:translate-x-2 hover:bg-red-700">Generate Random color</button>
    
      </div>
    <div className="flex  justify-center items-center flex-col gap-7">  
<h1 className=" text-9xl uppercase my-10">{color}</h1>
<h2 className="text-4xl sm:text-6xl lg:text-6xl uppercase">{colorValue}</h2>

</div>
    </main>
  );
};

export default Color;
