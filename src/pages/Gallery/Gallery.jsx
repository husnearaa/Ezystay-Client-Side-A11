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
        </div>

    );
};

export default Gallery;