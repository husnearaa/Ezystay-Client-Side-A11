import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import RoomsCard from "./RoomsCard";
// import RoomsCard from "./RoomsCard";


const Rooms = () => {
    const [rooms, setRooms] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/rooms')
        .then(res => res.json())
        .then(data => setRooms(data));
    }, [])



    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Rooms - Ezystay</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="py-10 mt-10  text-center">
                <h1 className="text-5xl font-bold mb-8 text-black ">Our Best <span className="text-[#C2A973]">Rooms</span></h1>
                <p className="text-md font-medium pb-10">
                    Explore our rooms and discover the epitome of comfort and luxury.<br />Uncover a collection of carefully curated spaces designed to make your stay exceptional.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-10'>
                    {
                        rooms.map(room => <RoomsCard key={room._id} room={room}></RoomsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Rooms;