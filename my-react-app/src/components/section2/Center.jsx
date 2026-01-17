



const Center = ({users}) =>{
    
    
    console.log(users)
    return(
<div  className="  w-ful md:h-full sm:h-full  py-10 px-5 gap-6 flex  overflow-hidden mt-10 flex-wrap ">
    {users.map((elem,index) =>(
    <div  key ={index} className=" relative bg-zinc-400 h-[40vh] w-[30vh] transiction-transform-150 hover:scale-110 ">
         <img src={elem.img} className = " h-full w-full object-cover absolute "/>
      <div className="absolute  uppercase flex px-7 gap-5 py-55 font-bold text-white">
        <h1>{elem.price}</h1>
        <button className=" text-white transition-transform duration-150  active:scale-95 uppercase">buy now</button>
    
</div>

</div>
    ))}
</div>



    )
}
export default Center