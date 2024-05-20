
import { useEffect, useState } from "react";
import FishDetails from "./FishDetails";



const Fish = () => {


    
   const [Fish, setFish] = useState([])


   useEffect( () => {
     fetch('menu.json')
     .then(res => res.json())
     .then(data => {
        
        const pizza = data.filter( items => items.category === 'pizza' )
        
        setFish(pizza)})


   } , [])



    return (
        <div>

            <div className=" flex justify-center">
                <div className=" grid  md:grid-cols-3 gap-5">
                    {
                        Fish.map( fish => <FishDetails fish={fish}></FishDetails> )
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Fish;