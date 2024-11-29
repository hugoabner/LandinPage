import { Banner } from "./components/Banner"
import { Banner2 } from "./components/Banner2"
import { Banner3 } from "./components/Banner3"
import { BannerFinnally } from "./components/BannerFinnally"
import { Card1 } from "./components/Card1"
import { Card2 } from "./components/Card2"
import { Card3 } from "./components/Card3"
import WhatTheySay from "./components/Cards4"
import { Footer } from "./components/Footer"
import Navbar from "./components/Navbar"
import { Navbar2 } from "./components/Navbar2"
import { Navbar3 } from "./components/Navbar3"

function App() {

  return (
    <>
      <div >
        <Navbar />
        
      </div>
      <div className="px-16">
          <Banner />
          <div>
              <Card1  />
              
          </div>
      </div>
      <div className="mt-10">
        <Navbar3 />
      </div>
      <div className="px-16">
        <Banner2 /> 
      </div> 
      <div className="px-32 mt-10">
      <h1 className="text-xl font-bold text-green-500">| The marketing toolkit</h1>
      <h1 className="text-5xl font-bold py-10 pr-16">Navigating  the markenting landspace: your roadmanp to succes</h1>
      </div>
      <Card2  />
      <div className="px-16">
      <Banner3  />
      </div>
      <Navbar2 />
      <div className="px-32 mt-10">
      <h1 className="text-xl font-bold text-green-500">| The marketing toolkit</h1>
      <h1 className="text-5xl font-bold py-10 pr-16">Navigatiyour roadm to succes</h1>
      </div>

      <div className="">
      <Card3  />
      </div>
      <div>
        <WhatTheySay />
      </div>
      <div className="">
         <BannerFinnally />  
      </div>
   
      <Footer />
    </>
  )
}

export default App
