

const SoupDetails = ({soup}) => {


    const { name, recipe, image, price } = soup


    return (
        <div>


                 <div className=" mt-3 flex items-center gap-3">
                 <img className=" h-[100px] w-[100px] rounded-full border-[5px] border-yellow-600 " src={image} alt="" />
                 <div>
                  <h1 className=" text-xl font-bold">{name}---------------</h1>
                  <p className="  text-slate-400"> {recipe} <br></br> </p>
                  <p className=" text-yellow-600"> Price: {price}$ </p>
                 </div>
                 </div>

            
        </div>
    );
};

export default SoupDetails;