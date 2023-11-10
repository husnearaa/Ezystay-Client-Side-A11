import { Helmet } from "react-helmet";
import AddReview from "../../components/AddReview/AddReview";

const AboutUs = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>AboutUs - Ezystay</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>


            <AddReview></AddReview>
        </div>
    );
};

export default AboutUs;