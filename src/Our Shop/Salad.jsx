

import { useEffect, useState } from "react";
import SalaCartDetails from "./SalaCartDetails";


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
        <div className=" mb-10 mt-10  ">
           
           
           

           <div className=" flex justify-center items-center ">

           <div className=" grid  md:grid-cols-3 gap-5">
             {
                  salad.map( salad => <SalaCartDetails salad={salad} ></SalaCartDetails> )
             }
           </div>


           </div>
                 

            
        </div>
    );
};

export default Salad;