import { useEffect, useState } from "react";
import SoupDetails from "./SoupDetails";


const Soup = () => {

    const [soup, setSoup] = useState([])


    useEffect( () => {
      
       fetch('soup.json')
       .then(res => res.json())
       .then(data => setSoup(data))

    } , [])


    return (
        <div>

            <div className=" flex justify-center mb-10 mt-10 ">
                <div className=" grid  md:grid-cols-3 gap-5">

                    {
                        soup.map( soup => <SoupDetails soup={soup} ></SoupDetails> ) 
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Soup;