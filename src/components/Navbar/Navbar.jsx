import { NavLink } from "react-router-dom";




const Navbar = () => {





    return (



        <div>
            <nav className="flex justify-between items-center flex-col gap-3 md:flex-row py-5 px-6 text-base ">
                <h2 className="text-3xl font-extrabold">Ezy<span className="text-[#C2A973]">S</span>tay</h2>
                <ul className="flex gap-5 flex-col md:flex-row font-semibold">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#C2A973] " : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/rooms"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#C2A973] " : ""
                            }
                        >
                            Rooms
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/myBookings"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#C2A973] " : ""
                            }
                        >
                            My Bookings
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/gallery"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#C2A973]  " : ""
                            }
                        >
                            Gallery
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/faq"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#C2A973]  " : ""
                            }
                        >
                            FAQ
                        </NavLink>
                    </li>
    
                    <li>
                        <NavLink
                            to="/aboutUs"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#C2A973]  " : ""
                            }
                        >
                            AboutUs
                        </NavLink>
                    </li>
                    
                </ul>     
                 <button className="btn border-[#C2A973] text-black bg-white px-10 rounded-full">Login</button>
                 
            </nav>
        </div>
    );
};

export default Navbar;