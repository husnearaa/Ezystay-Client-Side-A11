import { Helmet } from "react-helmet";





const Gallery = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Gallery - Ezystay</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h2 className="text-5xl mt-15 py-10 text-center">Our Gallery</h2>
            <div>
                <section className=" ">
                    <div className="container flex flex-col justify-center mx-auto mb-10">
                        <div className="grid grid-cols-1 gap-0 lg:grid-cols-3 sm:grid-cols-2">
                            <img className="object-cover w-full  aspect-square" src={"https://i.ibb.co/VYk3pkR/room1.png"} />
                            <img className="object-cover w-full  aspect-square" src={"https://i.ibb.co/5Wh9T18/room2.png"} />
                            <img className="object-cover w-full  aspect-square" src={"https://i.ibb.co/fD0X04K/room3.png"} />
                            <img className="object-cover w-full  aspect-square" src={"https://i.ibb.co/4spddQW/room6.png"} />
                            <img className="object-cover w-full  aspect-square" src={"https://i.ibb.co/fD0X04K/room3.png"} />
                            <img className="object-cover w-full  aspect-square" src={"https://i.ibb.co/4spddQW/room6.png"} />
                        </div>
                    </div>
                </section>
            </div>
        </div>

    );
};

export default Gallery;