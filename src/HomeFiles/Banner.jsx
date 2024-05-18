

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    return (
        <div className="  ">

{/* https://img.freepik.com/premium-photo/delicious-juicy-beef-steak_919652-6651.jpg?w=740 */}

            <Carousel>
                <div>
                    <img className="" src="https://img.freepik.com/premium-photo/spicy-grilled-spare-ribs-board-dark-stone-background-top-view-flat-lay_1041103-9034.jpg?w=740" />
                  
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-photo/main-course-with-beef-steak-realistic-3d-product-showcase-food-photography_111797-1825.jpg?w=900" />
                  
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-photo/photo-is-must-everyday-work-ai-generated-best-wonderful-photo_1088224-78250.jpg?w=740" />
                  
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-photo/birthday-cake-with-candle_849761-68240.jpg?w=740" />
                    
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-photo/delicious-juicy-beef-steak_919652-6651.jpg?w=740" />
                    
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-photo/taste-magic-delicious-food-experiences-ai-generated-best-food-photo_1070043-5132.jpg?w=740" />
                   
                </div>
            </Carousel>
            
        </div>
    );
};

export default Banner;