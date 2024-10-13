import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  let myObject={
    name:"dhrv",
    age:21
  }  
  let newArr=[1,2,4]

  return (
    <>
      <h1 className='bg-green-400 text-blue p-4 rounded-xl' >Tailwind test</h1>
      <Card channel="chai aur code" someobj={myObject} btnText="clickMe" arr={newArr} username="dangis" />
      <Card username="dhruv dangi" btnText="visitMe" />
    </>
  )
  
}

export default App
