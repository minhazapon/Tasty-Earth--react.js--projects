



const Form = () => {
    return (
        <div className=" flex-col md:flex-row lg:flex-row mb-10 mt-20 ml-10 mr-10">

            <div className=" flex-col md:flex-row lg:flex-row bg-no-repeat bg-cover h-[800px] rounded-xl "
             style={{backgroundImage: 'url(https://img.freepik.com/free-photo/mixed-fried-meat-with-pomegranate-sauce_140725-3461.jpg?t=st=1715879452~exp=1715883052~hmac=5c9e74ec0f9c17f909ad1b0628577f846635bf00ec5b9a21e13e3a08e38dd0bb&w=740)'}} >
                

                <div className=" flex-col md:flex-row lg:flex-row bg-gradient-to-r from-black rounded-xl p-5">

                <div className=" flex-col md:flex-row lg:flex-row p-10 text-center">
                    <h1 className=" text-xl text-yellow-600">---Check it out---</h1>
                    
                    <div className=" flex justify-center mt-5">
                    <p className=" bg-white w-[400px] h-[1px] text-center "></p>
                    </div>

                    <p className=" text-white text-5xl mt-3">FROM OUR MENU</p>

                    <div className=" flex justify-center mt-5">
                    <p className=" bg-white w-[400px] h-[1px] text-center "></p>
                    </div>
                     
                </div>


                <div className=" flex-col md:flex-row lg:flex-row flex justify-center mt-10 gap-5 items-center">
                  


                  <div>
                    <img className=" h-[200px] w-[300px] rounded-xl " src="https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?t=st=1715878355~exp=1715881955~hmac=8a3dcd4c81227dfdd176cdea39db603a1aa663079e98757860e9592e3a679bcc&w=826" alt="" />
                  
                  </div>

                  <div className="  font-bold text-white">
                     
                     <p>March 20, 2023
                        <br></br>
                       <span className=" text-xl">WHERE CAN I GET SOME?</span>
                       <p className=" text-xl">
                       Good food is a treasure trove of sensory<br></br> delight, a fusion of<br></br> flavors, textures.
                       </p>
                     </p>


                  </div>





                </div>



            </div>


            </div>
            
        </div>
    );
};

export default Form;