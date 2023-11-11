import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import Rooms from "../Rooms/Rooms";
import Footer from "../../components/Footer/Footer";
import Testimonial from "../../components/Testimonial/Testimonial";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Services from "../../components/Services/Services";
import Blogs from "../../components/Blogs/Blogs";




const Home = () => {
    return (
        <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Ezystay</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Banner></Banner>
            <Rooms></Rooms>
            <Services></Services>
            <Blogs></Blogs>
            <Testimonial></Testimonial>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;