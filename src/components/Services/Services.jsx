import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Services = () => {

    useEffect(() => {
        Aos.init();
    }, [])


    return (
       <div className="bg-gray-100 py-10 mb-10 dark:bg-blue-gray-700 ">
        <h2 className="text-center lg:text-5xl text-3xl font-bold " data-aos ="fade-down" >Our <span className="text-[#C2A973]">Services</span></h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-10'>
            <div className="card border  bg-base-100 hover:bg-gray-100 dark:bg-blue-gray-700" data-aos = "zoom-in">
                <figure className="">
                    <img src={"https://i.ibb.co/72zMGmF/s2.png"} alt="" className=" mt-5 h-10 w-10" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl font-bold pb-7 border-b-2 dark:text-white">Swimming Pool</h2>
                    <p className="font-medium pt-5 pb-5 dark:text-white">
                        The recreation area of our hotel includes a 
                    customly designed swimming pool under a glass vault and a bath VIP-complex for six people.</p>
                </div>
            </div>
            <div className="card border bg-base-100 hover:bg-gray-100 dark:bg-blue-gray-700" data-aos = "zoom-in" >
                <figure className="">
                    <img src={"https://i.ibb.co/tMmsRgG/s3.png"} alt="" className=" mt-5 h-10 w-10" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl font-bold pb-7 border-b-2 dark:text-white">Free Wi-Fi</h2>
                    <p className="font-medium pt-5 pb-5 dark:text-white">
                        Our free Wi-Fi internet service is available 24-hours in lobby,
                     meeting room, facilities and guest rooms to hel you stay connected wherever you are</p>
                </div>
            </div>
            <div className="card border bg-base-100 hover:bg-gray-100 dark:bg-blue-gray-700" data-aos = "zoom-in" >
                <figure className="">
                    <img src={"https://i.ibb.co/mXHWRWy/s4.png"} alt="" className=" mt-5 h-10 w-10" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl font-bold pb-7 border-b-2 dark:text-white">Restaurants</h2>
                    <p className="font-medium pt-5 pb-5 dark:text-white">
                        The restaurants of our hotel will gratify the taste 
                    of the most exacting guests.
                     Here, you can taste some culinary masterpieces by our chef.</p>
                </div>
            </div>
            <div className="card border bg-base-100 hover:bg-gray-100 dark:bg-blue-gray-700" data-aos = "zoom-in" >
                <figure className="">
                    <img src={"https://i.ibb.co/r2sjyf7/s5.png"} alt="" className=" mt-5 h-10 w-10 " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl font-bold pb-7 border-b-2 dark:text-white">Car Rentals</h2>
                    <p className="font-medium pt-5 pb-5 dark:text-white">
                        We work with the best car rental companies in United States of America, 
                    bringing you discount car rental rates and a wide variety of car rental classes.</p>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Services;