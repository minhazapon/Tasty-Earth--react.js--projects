import { useEffect, useState } from "react";
import PizzaDetails from "./PizzaDetails";





const Pizza = () => {


   const [pizza, setPizza] = useState([])


   useEffect( () => {
     fetch('menu.json')
     .then(res => res.json())
     .then(data => {
        
        const pizza = data.filter( items => items.category === 'pizza' )
        
        setPizza(pizza)})


   } , [])





    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">


            <div>

            <div className=" flex-col md:flex-row lg:flex-row text-white  bg-fixed text-center bg-no-repeat bg-cover  p-44 " 
              style={{backgroundImage: 'url(  https://img.freepik.com/premium-photo/redfish-platter-sharing-high-quality-redfish-picture-photography_1020697-108551.jpg?w=740   '}}   >
                 
                <div className=" flex-col md:flex-row lg:flex-row bg-gradient-to-r  from-black p-5"  >
                <h1 className=" text-3xl  font-bold">fish</h1>
                <p className=" mt-3 text-2xl ">Fish is a popular dish that originated in Italy and has since become a global favorite.  </p>
                </div>

            

             </div>


{/* ------------------------------------------------------- */}


            

            <div className=" flex justify-center mt-10 border-[1px] border-yellow-700 p-2 rounded-xl ">


            <div className=" grid   md:grid-cols-2 gap-5 "> 
               {
                   pizza.map( pizza => <PizzaDetails pizza={pizza} ></PizzaDetails> )
               }
            </div>


            </div>










            </div>
            
        </div>
    );
};

export default Pizza;