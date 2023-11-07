import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const RoomsCard = () => {
    return (
        <div>
            <Card className="w-full max-w-[26rem] shadow-lg">
                <CardHeader floated={false} color="blue-gray" className="rounded-none">
                    <img
                        src={'https://i.ibb.co/nzGhJnM/room6.png'}
                    />
                </CardHeader>
                <CardBody>
                    <div className="mb-3 flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray" className="font-bold">
                        Mountain View Chalet
                        </Typography>
                    </div>
                    <Typography color="gray">
                    A rustic retreat with breathtaking mountain vistas.
                    </Typography>
                </CardBody>
                <CardFooter className="pt-3">
                    <Button size="lg" fullWidth={true} className="bg-[#C2A973] text-black" >
                        Book Now
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default RoomsCard;