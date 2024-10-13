import { useState } from 'react'

function App() {
  const [colour,setColour]= useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: colour}} 
      >
      </div>
    </>
  )
}

export default App
