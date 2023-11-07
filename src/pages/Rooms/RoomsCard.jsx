import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const RoomsCard = ({room}) => {

    const { image, title, description, price} = room;

    return (
        <div>
            <Card className="w-full max-w-[26rem] shadow-lg rounded-none">
                <CardHeader floated={false} color="blue-gray" className="rounded-none">
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
                     Price: ${price}
                    </Typography>
                </CardBody>
                
            </Card>
        </div>
    );
};

export default RoomsCard;