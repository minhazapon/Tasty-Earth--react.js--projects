


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Salad from './Salad';
import Pizzas from './Pizzas';
import Soup from './Soup';
import Desserts from './Desserts';
import Fish from './Fish';





const Order = () => {
    return (
        <div className=" flex justify-center mb-10 mt-10 ml-10 mr-10 ">

            <div className=' flex-col md:flex-row lg:flex-row'>

              

            <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
              <TabList>
                <Tab> Salad </Tab>
                <Tab> Pizza </Tab>
                <Tab>  Soup </Tab>
                <Tab> Desserts </Tab>
                <Tab> Fish </Tab>
              </TabList>
              <TabPanel>
                <Salad></Salad>
              </TabPanel>
              <TabPanel>
                <Pizzas></Pizzas>
              </TabPanel>
              <TabPanel>
                <Soup></Soup>
              </TabPanel>
              <TabPanel>
                <Desserts></Desserts>
              </TabPanel>
              <TabPanel>
                <Fish></Fish>
              </TabPanel>
            </Tabs>

            </div>
            
        </div>
    );
};

export default Order;