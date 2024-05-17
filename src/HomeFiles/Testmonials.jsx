

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';


const Testmonials = () => {

    const [review, setReview] = useState([]);
    

    useEffect( () => {

      fetch('review.json')
      .then(res => res.json())
      .then(data => setReview(data))

    } , [])


    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">

            <div>

                <div className=" flex-col md:flex-row lg:flex-row p-10 text-center">
                    <h1 className=" text-xl text-yellow-600">------What Our Clients Say------</h1>
                    
                    <div className=" flex justify-center mt-5">
                    <p className=" bg-black w-[400px] h-[1px] text-center "></p>
                    </div>

                    <p className=" text-black text-5xl mt-3">TESTIMONIALS</p>

                    <div className=" flex justify-center mt-5">
                    <p className=" bg-black w-[400px] h-[1px] text-center "></p>
                    </div>
                     
                </div>

              




{/* -------------------------------------------------------- */}



             <div>


             <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
               


               {
                 
                 review.map( review =>  <SwiperSlide
                 
                 key={review._id}
                 >
                  <div className=' text-center ml-9 mr-10'>
                  <div className="rating">
                   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                 </div> 
                    
                    <h1> {review.details} </h1>
                    <p className=' text-xl font-bold text-yellow-600'> {review.name} </p>


                  </div>


                 </SwiperSlide>   )
                 

               }
        
        
      </Swiper>

























             </div>












            </div>
            
        </div>
    );
};

export default Testmonials;