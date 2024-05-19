import Dessert from "./Dessert";
import MenuBanner from "./MenuBanner";
import Offer from "./Offer";
import Pizza from "./Pizza";
import Salad from "./Salad";
import Soup from "./Soup";

const OurMenu = () => {
    return (
        <div>

            <MenuBanner></MenuBanner>
            <Offer></Offer>
            <Dessert></Dessert>
            <Pizza></Pizza>
            <Salad></Salad>
            <Soup></Soup>
            
        </div>
    );
};

export default OurMenu;