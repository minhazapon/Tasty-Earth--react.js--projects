import Banner from "./HomeFiles/Banner";
import Banner2 from "./HomeFiles/Banner2";
import Call from "./HomeFiles/Call";
import Chef from "./HomeFiles/Chef";
import Form from "./HomeFiles/Form";
import Menu from "./HomeFiles/Menu";
import Order from "./HomeFiles/Order";


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Order></Order>
            <Banner2></Banner2>
            <Menu></Menu>
            <Call></Call>
            <Chef></Chef>
            <Form></Form>



        </div>
    );
};

export default Home;