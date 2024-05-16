


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';



const Order = () => {
    return (
        <div className="  mt-36 mb-10 ml-10 mr-10">



            <div className=' mb-10 mt-10 text-center'>
               <h1 className=' text-yellow-500'>---From 11:00am to 10:00pm---</h1>

               <h1 className=' text-5xl font-bold mt-5' >ORDER ONLINE</h1>



            </div>


            <div>

            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          
          <img className=' h-[500px] w-[500px] rounded-2xl ' src="https://img.freepik.com/free-photo/slice-crispy-pizza-with-meat-cheese_140725-6974.jpg?t=st=1715867285~exp=1715870885~hmac=31102de449f692596f529b1c716b213f2cb69b28b512527af039d7e02a409b5f&w=740" />
          <h1 className='  ml-10 -mt-16 text-5xl text-white font-bold'>Pizza</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[500px] w-[500px] rounded-2xl' 
          src="https://img.freepik.com/free-photo/painting-sushi-plate-with-picture-fish-it_188544-12221.jpg?t=st=1715867313~exp=1715870913~hmac=ea1581dff11ae1a4cc945e4e6628cae4635661b202b34b650d626eb0d22bcebe&w=826" />
        </SwiperSlide>
        <SwiperSlide>
          <img  className='h-[500px] w-[500px] rounded-2xl' src="https://img.freepik.com/free-photo/fettucine-polo-funghi-with-vegetables_140725-8236.jpg?t=st=1715867367~exp=1715870967~hmac=cacfb43f1cdd1ae19dd45eb9ddb3ba3f1b825845454e8757a147fb7241a9deda&w=740" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=' h-[500px] w-[500px] rounded-2xl  '  src="https://img.freepik.com/free-photo/delicious-traditional-tacos-arrangement_23-2150799561.jpg?t=st=1715867402~exp=1715871002~hmac=fccf8c4082c8267a3772056475e060884bf10979047f1c1432fcee9700158f94&w=740" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=' h-[500px] w-[500px] rounded-2xl ' src="https://img.freepik.com/free-photo/top-view-vegan-salad-with-fresh-ingredients-plate-pepper-black-cutting-board_179666-47300.jpg?t=st=1715867432~exp=1715871032~hmac=822e58c9f90ad16b69e76fdf14eb26db218f8283e1f35c4d009dba1f22b76fb9&w=360" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=' h-[500px] w-[500px] rounded-2xl  ' src="https://img.freepik.com/premium-photo/front-view-yummy-meat-cheeseburger-dark-background-snack-fast-food-sandwich-burger-dinner-salad-dish_140725-159192.jpg?w=740" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=' h-[500px] w-[500px] rounded-2xl  ' src="https://img.freepik.com/free-photo/stir-fry-chicken-sweet-peppers-green-beans_2829-20110.jpg?t=st=1715867510~exp=1715871110~hmac=e5b6d53ce7c0925d87d2c2bbe78bea3562b7586af6f7f45dba5a4bf2b8b633a4&w=740" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=' h-[500px] w-[500px] rounded-2xl  ' src="https://img.freepik.com/free-photo/freshly-baked-lasagna-with-melted-mozzarella-meat-generative-ai_188544-7863.jpg?t=st=1715867548~exp=1715871148~hmac=ee75472d6cb1fc9c86f40f369f0c097c336e5bc01afef8ec00f9c277668fcd87&w=740" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=' h-[500px] w-[500px] rounded-2xl ' src="https://img.freepik.com/free-photo/gourmet-meal-steamed-basmati-rice-curry-generated-by-ai_24640-86795.jpg?t=st=1715867772~exp=1715871372~hmac=a1e37bee2fd591fc60c80704e17084f5d4e4d6dc77063d51b2d0c042425c4958&w=826" />
        </SwiperSlide>
      </Swiper>











                
            </div>
            
        </div>
    );
};

export default Order;