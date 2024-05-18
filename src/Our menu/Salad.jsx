import { useEffect, useState } from "react";
import SaladDeatils from "./SaladDeatils";


const Salad = () => {

      const [salad, setSalad] = useState([])


      useEffect( () => {

      fetch('menu.json')
      .then(res => res.json())
      .then( data => {
        
        const salad = data.filter( items => items.category === 'salad' )
 
        
        setSalad(salad)})


      } , [])


    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">


            <div>

            <div className=" flex-col md:flex-row lg:flex-row text-white  bg-fixed text-center bg-no-repeat bg-cover p-44 " 
              style={{backgroundImage: 'url(  https://img.freepik.com/premium-photo/vibrant-plate-mixed-organic-salad-symbolizing-wholesome-natural-healthy-eating_466739-16365.jpg?w=740   '}}   >
                 
                <div className=" flex-col md:flex-row lg:flex-row bg-gradient-to-r  from-black p-5"  >
                <h1 className=" text-3xl  font-bold">Salad</h1>
                <p className=" mt-3 text-2xl ">salad are a diverse category of sweet foods that conclude a meal. </p>
                </div>
             </div>
    





{/* -------------------------------------------------------------- */}


            

            <div className=" flex justify-center items-center mt-5 border-[1px]  border-yellow-700 p-2 rounded-xl">

            <div className=" grid  md:grid-cols-2 gap-5" >
               {
                salad.map( salad => <SaladDeatils salad={salad} ></SaladDeatils> )
               }
            </div>



            </div>







            </div>
            
        </div>
    );
};

export default Salad;