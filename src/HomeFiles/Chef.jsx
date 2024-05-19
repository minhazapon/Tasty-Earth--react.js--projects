import { useEffect, useState } from "react";
import ChefDetails from "./ChefDetails";



const Chef = () => {

     const [chef, setChef] = useState([]);


     useEffect( () => {
       
        fetch('chef.json')
        .then(res => res.json())
        .then(data => setChef(data))

     } , [])






    return (
        <div className=" mb-10 mt-10 ml-10  mr-10">

            <div>


                <div> 

                <div className=" flex-col md:flex-row lg:flex-row p-10 text-center">
                    <h1 className=" text-xl text-yellow-600">---Should Try---</h1>
                    <div className=" flex justify-center mt-5">
                    <p className=" bg-black w-[400px] h-[1px] text-center "></p>
                    </div>
                    <p className=" text-black text-5xl mt-3">CHEF RECOMMENDS   </p>
                    <div className=" flex justify-center mt-5">
                    <p className=" bg-black w-[400px] h-[1px] text-center "></p>
                    </div>
                </div>





                </div>

{/* -----------------------------------------------------------------------------              */}
               
            <div className=" flex justify-center">

            <div className=" grid  md:grid-cols-3 gap-5">

             {
                chef.map( chef => <ChefDetails key={chef._id} chef={chef} ></ChefDetails> )

             }

               

            </div>

            </div>





            </div>
            
        </div>
    );
};

export default Chef;