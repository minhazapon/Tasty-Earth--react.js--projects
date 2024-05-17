


const MenuDetails = ({menu}) => {

    const { name, recipe, image, category, price } = menu


    return (
        <div>



            <div className=" flex items-center gap-3">
                <img className=" h-[100px] w-[100px] rounded-full border-[5px] border-yellow-600 " src={image} alt="" />
                <div>
                  <h1 className=" text-xl font-bold">{name}---------------</h1>
                  <p className="  text-slate-400"> {recipe} <br></br> </p>
                </div>
                <div>
                   <p className=" text-yellow-600"> {price} </p>

                </div>
            </div>



            
        </div>
    );
};

export default MenuDetails;