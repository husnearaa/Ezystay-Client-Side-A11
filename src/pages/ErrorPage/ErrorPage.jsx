import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div>
                <div className="">
                    <img className="w-70 h-60 mt-30" src="https://i.ibb.co/ypWN50s/error-404.jpg" alt="" />
                    <h2 className=" text-2xl font-semibold text-black ml-5">Oops!!! Not found the page</h2>
                </div>
                <div className="flex justify-center items-center">
                    <Link to="/"><button className="btn mt-4 bg-[#ca786c] text-white ">Go back to home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;