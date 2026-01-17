import {useGSAP} from '@gsap/react';
import gsap from 'gsap';

const Top = () => {
useGSAP(() => {
    gsap.from('.gsap-top', 
      { y:-50,
        duration: 1,
        delay: 0.5,
        
            }
    )
  })

return(

<div className="">
<div className="  md:w-full sm:w-full lg:w-full md:h-[5vh] bg-black  text-white flex items-center justify-center uppercase font-bold   ">

<p className="gsap-top">fuck you</p>


</div>
</div>
)}
export default Top