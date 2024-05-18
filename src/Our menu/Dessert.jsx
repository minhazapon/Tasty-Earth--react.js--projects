import { useEffect, useState } from "react";
import DessertDetails from "./DessertDetails";





const Dessert = () => {

    const [des, setDes] = useState([])

    useEffect( () => {

      fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        
      
        const dessert = data.filter( items => items.category === 'dessert' )
        
        setDes(dessert)})


    } , [])



    return (
        <div className=" mb-10 mt-10 mr-10 ml-10">
             
             <div className=" flex-col md:flex-row lg:flex-row text-white  bg-fixed text-center bg-no-repeat bg-cover p-44 " 
              style={{backgroundImage: 'url(  https://img.freepik.com/premium-photo/chocolate-dessert-with-fruit-top_777078-19332.jpg?w=826   '}}   >
                 
                <div className=" flex-col md:flex-row lg:flex-row bg-gradient-to-r  from-black p-5"  >
                <h1 className=" text-3xl  font-bold">DESSERTS </h1>
                <p className=" mt-3 text-2xl ">Desserts are a diverse category of sweet foods that conclude a meal. </p>
                </div>
             </div>
             

             <div className=" flex justify-center items-center gap-5 border-[1px] border-yellow-700 p-2 rounded-xl mt-10 ">

             <div className=" grid  md:grid-cols-2 mt-5 ">

               {
                 des.map( des => <DessertDetails des={des} ></DessertDetails> )

               }

             </div>

             </div>

        </div>
    );
};

export default Dessert;