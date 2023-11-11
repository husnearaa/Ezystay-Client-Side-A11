import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import { Helmet } from "react-helmet";





const Gallery = () => {

    useEffect(() =>{
        Aos.init();
    },[])

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Gallery - Ezystay</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h2 className="lg:text-5xl text-2xl mt-15 py-10 text-center dark:text-white">Our Gallery</h2>
            <div>
                <section className=" ">
                    <div className="container flex flex-col justify-center mx-auto mb-10">
                        <div className="grid grid-cols-1 gap-0 lg:grid-cols-3 sm:grid-cols-2" >
                            <img className="object-cover w-full  aspect-square" data-aos ="fade-up" src={"https://i.ibb.co/VYk3pkR/room1.png"} />
                            <img className="object-cover w-full  aspect-square" data-aos ="fade-up" src={"https://i.ibb.co/5Wh9T18/room2.png"} />
                            <img className="object-cover w-full  aspect-square" data-aos ="fade-up" src={"https://i.ibb.co/fD0X04K/room3.png"} />
                            <img className="object-cover w-full  aspect-square" data-aos ="fade-down" src={"https://i.ibb.co/4spddQW/room6.png"} />
                            <img className="object-cover w-full  aspect-square" data-aos ="fade-down" src={"https://i.ibb.co/fD0X04K/room3.png"} />
                            <img className="object-cover w-full  aspect-square" data-aos ="fade-down" src={"https://i.ibb.co/4spddQW/room6.png"} />
                        </div>
                    </div>
                </section>
            </div>
        </div>

    );
};

export default Gallery;