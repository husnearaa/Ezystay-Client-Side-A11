import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";


const RoomsCard = ({ room }) => {

    const { _id,image, title, description, price_per_night } = room || {};

    return (
        <div>
            <Link to={`/details/${_id}`} >
                <Card className="w-full max-w-[26rem] shadow-lg rounded">
                    <CardHeader floated={false} color="blue-gray" className="rounded">
                        <img
                            src={image}
                        />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography variant="h5" color="blue-gray" className="font-bold">
                                {title}
                            </Typography>
                        </div>
                        <Typography color="gray" className="flex items-center justify-between">
                            {description}
                        </Typography>
                        <Typography color="gray" className="flex items-center justify-between">
                            Price: ${price_per_night}
                        </Typography>
                    </CardBody>
                </Card>
            </Link>
        </div>
    );
};

export default RoomsCard;