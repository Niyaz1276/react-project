import { useState } from 'react'
import './App.css'
import Top from './components/section1/Top'
import Navbar from './components/Navbar'
import Section from './components/section1/Section'
import Border from './components/section2/Border'
import Center from './components/section2/Center'
import { BrowserRouter } from 'react-router-dom'
import {Route , Routes}from 'react-router-dom'

import grop from "./assets/grop.jpg"
import now from "./assets/now.jpg"
import ee from "./assets/ee.jpg"

function App() {



const users = [{img:ee,
    price:"$180",
    
},{

img:grop,
price:"$200",

},{
img:now,
price:"$400"

},
{img:ee,
price:"$300"
},{img:grop,
price:"$100"},
{img:grop,
price:"$90"},
{img:ee,
price:"$40"},{img:now,
price:"$20"},{img:ee,
price:"$40"},{img:grop,
price:"$10"},{img:ee,
price:"$40"},{img:grop,
price:"$201"}]

  return (
    <>
    <div className="bg-zinc-200 md:h-screen sm:h-screen xl:h-screen md:w-screen sm:w-screen xl:w-screen">
    
     
  
      <Top/>
      <Navbar/>
      <Section/>
      <Border/>
      <Center users={users} />
      </div>
    </>
  )
}

export default App
