


const FishDetails = ({fish}) => {
      
    const {name, recipe, image, price} = fish


    return (
        <div>

            <div className="card w-96 h-[550px] bg-base-100 shadow-xl border-[1px] border-yellow-800 ">
            <figure className="px-10 pt-10">
             <img src={image} alt="Shoes" className="rounded-xl h-[200px] w-[300px] " />
            </figure>
            <div className="card-body items-center text-center">
             <h2 className="card-title text-2xl"> Name: {name} </h2>
             <p className=" text-slate-400"> {recipe} </p>
             <p className=" text-2xl "> Price: {price} </p>
             <div className="card-actions">
               <button className="btn  text-white bg-yellow-700 ">Add Cart</button>
             </div>
            </div>
            </div>
            
        </div>
    );
};

export default FishDetails;