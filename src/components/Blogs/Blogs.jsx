import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Blogs = () => {


    useEffect(() =>{
        Aos.init();
    },[])


    return (
        <div>
            <section className= "">
                <h2 className="text-center text-5xl font-bold py-10 dark:text-white" data-aos = "zoom-in">Latest <span className="text-[#C2A973]">Blogs</span></h2>
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12" data-aos= "zoom-in-up">
                        <img src={"https://i.ibb.co/7WpvPms/b2.png"} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 " />
                        <div className="p-6 space-y-2 lg:col-span-5" data-aos = "zoom-out-down">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline dark:text-white">5 Simple Tricks for Getting Stellar Hotel Service Wherever You Are</h3>
                            <span className="text-xs dark:text-white">October 19, 2023</span>
                            <p className="dark:text-white">Experience global graciousness with our guide to five tricks that guarantee stellar hotel service anywhere in the world.
                                 Enhance your travels with simple yet effective strategies.</p>
                        </div>
                    </a>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" >
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline " data-aos= "zoom-in-down">
                            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={"https://i.ibb.co/888j0Z5/hiot-coffee.jpg"} />
                            <div className="p-6 space-y-2" data-aos= "zoom-out-down">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline dark:text-white">Savor the Moment: A Culinary Adventure Through Exquisite Flavors</h3>
                                <span className="text-xs dark:text-white">September 21, 2023</span>
                                <p className="dark:text-white">Embark on a mouthwatering journey with our food blog, where we unravel the secrets of delectable cuisines, share tantalizing recipes, and explore culinary wonders that will satisfy your foodie soul.</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline " data-aos= "zoom-in-down">
                            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={"https://i.ibb.co/wS3npCK/b1.png" }/>
                            <div className="p-6 space-y-2" data-aos= "zoom-out-down">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline dark:text-white">How to Easily Book the Best Hotel and Get the Best Room This Season</h3>
                                <span className="text-xs dark:text-white">November 22, 2023</span>
                                <p className="dark:text-white">
                                Elevate your seasonal stay with our comprehensive guide on securing the best hotel 
                                and nabbing the perfect room. Uncover insider tips and tricks for a premium experience.
                                </p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline " data-aos= "zoom-in-down">
                            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={"https://i.ibb.co/58nHyZV/hotel-safety.jpg"} />
                            <div className="p-6 space-y-2" data-aos= "zoom-out-down">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline dark:text-white">15 Useful Hotel Safety Tips You Should Not Ignore During Your Stay</h3>
                                <span className="text-xs dark:text-white">August 23, 2023</span>
                                <p className="dark:text-white">Prioritize your well-being with our expertly curated list of 15 indispensable hotel safety tips. From safeguarding your belongings to navigating emergency exits, 
                                    empower yourself with the knowledge you need for a worry-free and secure hotel stay.
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="flex justify-center">
                        <button type="button" className="px-6 py-3 text-xl font-semibold rounded-md hover:underline dark:text-white" data-aos= "flip-left">Load more posts...</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;