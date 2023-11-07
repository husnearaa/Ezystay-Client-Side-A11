import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import Rooms from "../Rooms/Rooms";



const Home = () => {
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Home - Ezystay</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Banner></Banner>
            <Rooms></Rooms>
        </div>
    );
};

export default Home;