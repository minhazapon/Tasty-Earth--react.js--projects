import { useEffect, useState } from "react";
import DesDetails from "./DesDetails";


const Desserts = () => {

    const [des, setDes] = useState([])

    useEffect( () => {

      fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        
      
        const dessert = data.filter( items => items.category === 'dessert' )
        
        setDes(dessert)})


    } , [])


    return (
        <div>

            <div className=" flex justify-center mb-10 mt-10">
                <div className=" grid  md:grid-cols-3 gap-5">

                    {

                        des.map( des => <DesDetails des={des} ></DesDetails> )
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Desserts;