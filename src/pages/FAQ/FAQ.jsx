import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet";


const FAQ = () => {


    useEffect(() => {
        Aos.init();
    },[])

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>FAQ - Ezystay</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="bg-zinc-100 dark:bg-zinc-700">
                <h2 className="text-center lg:text-4xl text-black text-2xl py-10 dark:text-white">FAQ</h2>
                <div className=" w-4/5 rounded border px-4 py-10 mt-10 mb-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                    <div className="grid md:grid-cols-5 gap-10">
                        <div className="md:col-span-2">
                            <div className="" data-aos = "zoom-in">
                                <img className="h-[90vh]" src={"https://i.ibb.co/3f22s9C/13330330-Feb-Business-9.jpg"} alt="" />
                            </div>
                        </div>
                        <div className="md:col-span-3">
                            <section className="">
                                <div className="container flex flex-col justify-center px-4 mx-auto md:p-8" data-aos="zoom-out-up">
                                    <h2 className="text-2xl font-semibold sm:text-2xl dark:text-white">Frequently Asked Questions</h2>
                                    <p className="mt-4 mb-8 dark:text-white">Here has given most asked questions answer. It will help to know about Ezystay.</p>
                                    <div className="space-y-4">
                                        <details className="w-full border rounded-lg">
                                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri dark:text-white">How can I book a hotel room online?</summary>
                                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-white">Visit our website, enter details, choose a room, and follow the prompts to complete the booking. </p>
                                        </details>
                                        <details className="w-full border rounded-lg">
                                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri dark:text-white">What payment methods are accepted?</summary>
                                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-white">We accept credit/debit cards (Visa, MasterCard, Amex) and other secure online payment options.</p>
                                        </details>
                                        <details className="w-full border rounded-lg">
                                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri dark:text-white">Can I make changes or cancel my reservation?</summary>
                                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-white">Yes, check your booking's terms for details on modification or cancellation policies.</p>
                                        </details>
                                        <details className="w-full border rounded-lg">
                                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri dark:text-white"> Are there additional fees or taxes?</summary>
                                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-white"> Total price usually includes taxes and fees, but check booking details for any additional charges.</p>
                                        </details>
                                        <details className="w-full border rounded-lg">
                                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri dark:text-white">Can I request special amenities or preferences?</summary>
                                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-white">Yes, during booking, you can make requests, subject to availability.</p>
                                        </details>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;