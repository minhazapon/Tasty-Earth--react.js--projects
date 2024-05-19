import { useEffect, useState } from "react";
import SoupDetails from "./SoupDetails";




const Soup = () => {

   
     const [soup, setSoup] = useState([])


     useEffect( () => {

        fetch('soup.json')
        .then( res => res.json())
        .then(data => setSoup(data))
     } , [])




    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">

            <div>

            <div className=" flex-col md:flex-row lg:flex-row text-white  bg-fixed text-center bg-no-repeat bg-cover p-44 " 
              style={{backgroundImage: 'url(  https://img.freepik.com/premium-photo/soup-black-background_875722-17902.jpg?w=740   '}}   >
                 
                <div className=" flex-col md:flex-row lg:flex-row bg-gradient-to-r  from-black p-5"  >
                <h1 className=" text-3xl  font-bold">Soup</h1>
                <p className=" mt-3 text-2xl ">Soup are a diverse category of sweet foods that conclude a meal. </p>
                </div>
             </div>



{/* ----------------------------------------------------------------------------------------------------- */}


           

            <div className=" flex justify-center items-center mt-5 border-[1px] border-yellow-700 p-2 rounded-xl">

            <div className=" grid  md:grid-cols-2 gap-5">
                {
                    soup.map( soup => <SoupDetails soup={soup} ></SoupDetails> )
                }
            </div>

            </div>









            </div>
            
        </div>
    );
};

export default Soup;


