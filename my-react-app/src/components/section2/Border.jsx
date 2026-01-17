
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import { use } from 'react';

const Border = () => {
  useGSAP(() => {
    gsap.from('.gsap-border', 
      { x: 1500,
        duration: 3,
        repeat:-1,
        yoyo:true,
        delay: 0.5,
        
          }
    )
  })
    return(

<div className=" relative py-3">
<div className=" absolute md:w-full sm:w-full lg:w-full md:h-[10vh] bg-black  text-white flex items-center justify-between px-3 uppercase font-bold  font-underline ">
<span className=" gsap-border flex gap-20">
<h1>faisal fayaz</h1>
<h1>kamran bashie</h1>
<h1>danish wazir</h1>
<h1>niyaz ali</h1>
<h1>imtyaz ali</h1>
<h1>shabbir hussain</h1>
<h1>niyaz</h1>

</span>

</div>
</div>



)



} 
export default Border