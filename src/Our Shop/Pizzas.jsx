
import { useEffect, useState } from "react";
import PizzasDetails from "./PizzasDetails";




const Pizzas = () => {

   
    const [pizza, setPizza] = useState([])


    useEffect( () => {

    fetch('pizza.json')
    .then(res => res.json())
    .then( data => setPizza(data))
    } , [])



    return (
        <div className=" mb-10 mt-10">

           <div className=" flex justify-center">

            <div className=" grid  md:grid-cols-3 gap-5">

                {

                    pizza.map( pizza => <PizzasDetails pizza={pizza} ></PizzasDetails>)
                }
            </div>
           </div>
            
        </div>
    );
};

export default Pizzas;