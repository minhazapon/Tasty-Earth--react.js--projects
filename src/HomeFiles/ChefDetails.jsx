

const ChefDetails = ({chef}) => {

     const {name, recipe, image, category,  price} = chef



    return (
        <div>

            <div className=" bg-slate-200 p-3 rounded-xl ">

                <img className=" h-[200px] w-[300px] rounded-xl " src={image} alt="" />
                <h1 className=" text-xl mt-2"> Name: {name} </h1>
                <p className=" text-slate-600"> {recipe} </p>
                <p className=" text-xl">Price: {price}$ </p>

                <button className=" btn  mt-2 bg-yellow-600 text-white" >Add Cart</button>  

            </div>
            
        </div>
    );
};

export default ChefDetails;