

const MenuBanner = () => {
    return (
        <div>
              
            <div className=" flex-col md:flex-row lg:flex-row text-center bg-no-repeat bg-cover  p-48 "
             style={{backgroundImage: 'url( https://img.freepik.com/premium-photo/restaurant-menu-book-healthy-food_1047722-2318.jpg?w=826 )'}} >
                
                <div className=" bg-gradient-to-r from-black p-5 ">
                <h1 className=" flex-col md:flex-row lg:flex-row text-6xl  font-bold text-white ">OUR MENU</h1>
                <p className=" text-2xl font-bold text-white  my-5">Would you like to try a dish?</p>
                </div> 
            </div>
            
        </div>
    );
};

export default MenuBanner;