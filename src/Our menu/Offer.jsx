import { useEffect, useState } from "react";
import OfferDetails from "./OfferDetails";





const Offer = () => {


     const [offer, setOffer] = useState([])


     useEffect( () => {

      fetch('offer.json')
      .then(res => res.json())
      .then(data => setOffer(data))

     } , [])



    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">

            <div>

            <div className=" flex-col md:flex-row lg:flex-row p-10 text-center  ">
                    <h1 className=" text-xl text-yellow-600">---Don't miss---</h1>
                    
                    <div className=" flex justify-center mt-5">
                    <p className=" bg-black w-[400px] h-[1px] text-center "></p>
                    </div>

                    <p className=" text-black text-5xl mt-3">TODAY'S OFFER</p>

                    <div className=" flex justify-center mt-5">
                    <p className=" bg-black w-[400px] h-[1px] text-center "></p>
                    </div>
                     
                </div>

                  <hr></hr>


{/* ------------------------------------------------------------------------------- */}
            

            <div className=" flex justify-center items-center">

            <div className=" grid  md:grid-cols-2 gap-5">
               {

                   offer.map( offer => <OfferDetails offer={offer} ></OfferDetails> )

               }
            </div>



            </div>
 
           

            </div>
            
        </div>
    );
};

export default Offer;