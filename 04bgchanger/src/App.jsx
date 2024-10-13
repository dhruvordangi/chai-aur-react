import { useState } from 'react';
import './index.css';  // Import Tailwind's CSS

function App() {
  const [colour, setColour] = useState("olive");

  return (
    <>
      <div 
        className="w-screen min-h-screen duration-200"  // Ensure min height covers full screen
        style={{ backgroundColor: colour }}  // Apply dynamic inline style
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" > 
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl" >
        <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:'red'}} onClick={()=> setColour("red")} >Red </button>
        <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:'blue'}} onClick={()=> setColour("blue")}>blue </button>
        <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:'Green'}} onClick={()=> setColour("green")} >Green </button>
        <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:'brown'}} onClick={()=> setColour("brown")} >brown </button>
        <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:'olive'}} onClick={()=> setColour("olive")} >olive </button>
        <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:'violet'}} onClick={()=> setColour("purple")} >purple </button>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;

// onlclick requires a function but setColor returns a function if we write it like that{ setCOlor()}