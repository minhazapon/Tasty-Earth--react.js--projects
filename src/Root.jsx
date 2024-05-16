import { Outlet } from "react-router-dom";
import Nav from "./compo/Nav";
import Footer from "./compo/Footer";




const Root = () => {
    return (
        <div>
               
               <Nav></Nav>
               <Outlet></Outlet>
               <Footer></Footer>


            
        </div>
    );
};

export default Root;