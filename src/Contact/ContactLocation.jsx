


const ContactLocation = () => {
    return (
        <div className=" mb-10 mt-10 ml-10 mr-10">

            <div>


                <div className=" flex-col md:flex-row lg:flex-row p-10 text-center">
                    <h1 className=" text-xl text-yellow-600">------Visit Us------</h1>
                    <div className=" flex justify-center mt-5">
                    <p className=" bg-black w-[400px] h-[1px] text-center "></p>
                    </div>
                    <p className=" text-black text-5xl mt-3">OUR LOCATION</p>
                    <div className=" flex justify-center mt-5">
                    <p className=" bg-black w-[400px] h-[1px] text-center "></p>
                    </div>
                </div>

{/* -------------------------------------------------- */}
           
             <div className=" flex justify-center">

                
            <div className=" grid  md:grid-cols-3  gap-10 ">

<div className=" border-[1px] border-yellow-700  bg-yellow-100 p-5  rounded-xl ">
 <p className=" bg-yellow-700 w-[200px] p-3 flex justify-center ">
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
 <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
 </svg>
 </p>
 <p className="  text-xl font-bold mt-3 ">Call Us</p>
 <p className=" mt-1 text-xl font-bold">01950000000</p>
</div>


<div className="  border-[1px] border-yellow-700  bg-yellow-100 p-5  rounded-xl ">
 <p className=" bg-yellow-700 w-[200px] p-3 flex justify-center ">
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

 </p>
 <p className="  text-xl font-bold mt-3 ">ADDRESS</p>
 <p className=" mt-1 text-xl font-bold">New London, <br></br> street 5001, England</p>
</div>


<div className="  border-[1px] border-yellow-700  bg-yellow-100 p-5  rounded-xl ">
 <p className=" bg-yellow-700 w-[200px] p-3 flex justify-center ">
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

 </p>
 <p className="  text-xl font-bold mt-3 ">WORKING HOURS</p>
 <p className=" mt-1  font-bold">Mon - Fri: 08:00 - 22:00 <br></br>
Sat - Sun: 10:00 - 23:00</p>
</div>



</div>






             </div>



            </div>
            
        </div>
    );
};

export default ContactLocation;