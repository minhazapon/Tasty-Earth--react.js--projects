import { useEffect, useState } from "react";
import MenuDetails from "./MenuDetails";
import { Link } from "react-router-dom";



const Menu = () => {

     
     const [ menu, setMenu ] = useState([]);

     useEffect( () => {

        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            
            const popular = data.filter( item => item.category === 'popular' )
            
             
            setMenu(popular)})

     } , [])




    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">

            <div>

               <div>
                    

               <div className=" flex-col md:flex-row lg:flex-row p-10 text-center">
                    <h1 className=" text-xl text-yellow-600">---Check it out---</h1>
                    
                    <div className=" flex justify-center mt-5">
                    <p className=" bg-black w-[400px] h-[1px] text-center "></p>
                    </div>

                    <p className=" text-black text-5xl mt-3">FROM OUR MENU</p>

                    <div className=" flex justify-center mt-5">
                    <p className=" bg-black w-[400px] h-[1px] text-center "></p>
                    </div>
                     
                </div>

               </div>



{/* ----------------------------------------------------------------------- */}

              <div className=" flex justify-center">
             
              <div className=" grid  md:grid-cols-2 gap-4">

                  {
                    
                    menu.map( menu => <MenuDetails key={menu._id} menu={menu} ></MenuDetails> )


                  }

              </div>

              </div>





            </div>

            <div className=" flex justify-center mt-5">
             
             <Link to="/ourmenu" >
            <button className=" text-center btn bg-yellow-700 text-white ">View Full Menu</button>
            </Link>


            </div>

            
        </div>
    );
};

export default Menu;