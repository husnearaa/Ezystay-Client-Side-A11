import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'



const RoomsCard = ({ room }) => {


    useEffect(() => {
        Aos.init();
    }, [])

    const { _id, image, title, description, price_per_night, rating } = room || {};

    return (
        <div>
            <div>
                <Link to={`/details/${_id}`} >
                    <Card className="w-full max-w-[26rem] shadow-lg rounded dark:bg-blue-gray-700">
                        <CardHeader floated={false} color="blue-gray" className="rounded" data-aos="fade-right">
                            <img
                                src={image}
                            />
                        </CardHeader>
                        <CardBody>
                            <div className="mb-3 flex items-center justify-between">
                                <Typography variant="h5" color="blue-gray" className="font-bold dark:text-white">
                                    {title}
                                </Typography>
                            </div>
                            <Typography color="gray" className="flex items-center justify-between dark:text-white">
                                {description}
                            </Typography>
                            <Typography color="gray" className="flex items-center justify-between dark:text-white">
                                Price: ${price_per_night}
                            </Typography>
                            <Typography color="gray" className="flex items-center justify-between dark:text-white">
                                <p className="flex">
                                    Rating:
                                    <Rating
                                        style={{ maxWidth: 100 }}
                                        value={rating}
                                        readOnly
                                    />
                                </p>
                            </Typography>
                        </CardBody>
                    </Card>
                </Link>
            </div>
        </div>
    );
};

export default RoomsCard;