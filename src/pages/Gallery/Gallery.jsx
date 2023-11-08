import { Helmet } from "react-helmet";
import DetailsGallery from "../../components/DetailsGallery/Detailsgallery";



const Gallery = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Gallery - Ezystay</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h2 className="text-5xl mt-15 py-10 text-center">Our Gallery</h2>
            <DetailsGallery></DetailsGallery>

            <div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img  className="py-8" src={"https://i.ibb.co/gg0N3BL/room1.png"} /></figure>
                    <div className="flex justify-between items-center  w-full pr-4">
                        <div className="">
                            <h2 className="card-title">Name:  Deluxe Suite</h2>
                            <p>Price per Night: $140</p>
                            <p>Booking: 9 1 dec 2023</p>
                        </div>
                        <div className="card-actions items-center justify-end">
                            <div className="btn-group btn-group-vertical space-y-4">
                                <button className="btn">your review</button>
                                <button className="btn">update date</button>
                                <button className="btn bg-orange-500">cancel booking</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Gallery;