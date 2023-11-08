import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import Rooms from "../Rooms/Rooms";
import Footer from "../../components/Footer/Footer";




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
            <Footer></Footer>
        </div>
    );
};

export default Home;