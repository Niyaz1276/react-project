import now from "../../assets/now.jpg"

const Section = () => {


return(

    <div className="relative h-100 md:w-screen bg-zinc-100 shrink-0 rounded-2xl ">

    <img src={now} alt="logo" className="h-full w-full object-cover trasition-transform duration-150 active:scale-105 hover:scale-95"/>
    <div className="absolute uppercase bg-white-300 top-20 left-15 p-6 font-bold flex  flex-col gap-5 text-black text-size:sm md:text-size:lg lg:text-size:xl trasition-transform duration-200 hover:scale-110">
        <h1 className="trasition-transform duration-200 hover:scale-110">tasty high protein<br/>breakfast in 20<br/>second</h1>
        <p>subcribe & save 20% + free gift</p>
       <div className="flex gap-5 py-10  ">
         <button className="bg-white rounded-2xl py-2 px-3 uppercase active:scale-103">shop all</button>
        <button className="bg-white rounded-2xl py-2 px-3 uppercase active:scale-103" >bundle & save</button>
        </div>
    </div>
        

    


    </div>
)

}
export default Section