
import { ShoppingCart } from 'lucide-react'
import { Users } from 'lucide-react';
import eleate from '../assets/eleate.jfif'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';

const Navbar = () =>{
  useGSAP(() => {
    gsap.from('h3', 
      { y: -50,
        duration: 1,
        delay: 0.5,
        stagger: {
          each: 0.3,
          from: 'start',

       }       }
    )
  })

  return (
    <header>
    <div className=" ">
    <div className="md:h-20 md:w-full bg-zinc-300  flex items-center gap-4 justify-between rounded-2xl  px-5 uppercase font-bold overflow-hidden">
      <h3 className="active:scale-105">shop</h3>
      <h3 className="active:scale-105">bundel&save</h3>

      <div className="object-cover flex items-center justify-center w-1/3 h-2 hover:scale-95">
      <img src= {eleate}/>
  
      </div>
     

       <h3 className="active:scale-90">reviews</h3>
      <h3 className="active:scale-80">more
</h3>
<Users className="active:scale-80 hover:text-blue-400" />
     <ShoppingCart className="active:scale-80 hover:text-blue-400"/>
    </div>
    </div>
    </header>
  )
}
export default Navbar;