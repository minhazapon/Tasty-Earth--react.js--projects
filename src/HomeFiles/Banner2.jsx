



const Banner2 = () => {
    return (
        <div className=" flex-col md:flex-row lg:flex-row mb-10 mt-10 ml-10 mr-10">

            <div className=" bg-no-repeat bg-cover h-[700px] rounded-xl " 
             style={{backgroundImage: 'url(https://img.freepik.com/premium-photo/grilled-kebabs-with-vegetables-skewers-black-background_124507-43175.jpg?w=740)'}} >

                 
                 <div className=" flex-col md:flex-row lg:flex-row text-2xl p-20 bg-gradient-to-r from-black text-white text-center">
                     <h1>Tasty Earth</h1>
                     <p>Good food can be found in every corner of the globe, <br></br> each culture offering its own unique culinary heritage. </p>
                 </div>


            </div>
            
        </div>
    );
};

export default Banner2;