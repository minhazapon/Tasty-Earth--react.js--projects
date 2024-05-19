




const ShopBanner = () => {
    return (
        <div>

            <div className=" flex-col md:flex-row lg:flex-row text-center bg-no-repeat bg-cover  p-48  "
             style={{backgroundImage: 'url( https://img.freepik.com/premium-photo/stall-mercato-delle-erbe-indoor-food-market-bologna-city-italy_954226-199597.jpg?w=740 )'}} >
                
                <div className=" bg-gradient-to-r from-black p-5 ">
                <h1 className=" flex-col md:flex-row lg:flex-row text-6xl  font-bold text-white ">Contact Us</h1>
                <p className=" text-2xl font-bold text-white  my-5">Contact With Us and Get Tasty Foods</p>
                </div> 
            </div>
            
        </div>
    );
};

export default ShopBanner;