import { Link } from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi';
import {BiCodeAlt} from 'react-icons/bi';
import { useState } from "react";
import {HiX} from 'react-icons/hi';
const Navbar = () => {
    const [openNavBar , setOpenNavBar] = useState(false);
    const toggleNav = () => {
        setOpenNavBar(!openNavBar);
    }

    return (
        <div>
            <div class="navbar lg:flex justify-center gap-28 px-10 py-10 hidden sm:hidden md:hidden">
                <div className="flex justify-between items-center gap-5">
                    <Link to='/'><h3 className="text-2xl text-col3">Elon Thy</h3></Link>
                    <BiCodeAlt className="text-col3 text-4xl" />
                </div>
                <ul className="text-col7 text-lg">
                    <Link to="/" className="px-5 hover:text-col6 hover:border-b-2">Home</Link>
                    <Link to="/blog" className="px-5 hover:text-col6 hover:border-b-2">Blogs</Link>
                    <Link to="contact" className="px-5 hover:text-col6 hover:border-b-2">Contact</Link>
                    <Link to="/project" className="px-5 hover:text-col6 hover:border-b-2">Projects</Link>
                    <Link to="/achievement" className="px-5 hover:text-col6 hover:border-b-2">Achievements</Link>
                </ul>
            </div>
            {/* 2nd navbar */}
            <div className="lg:hidden navbar pb-10">
                <div className=" flex justify-between px-5 py-8 items-center">
                    <div className="flex justify-between items-center gap-5">
                        <Link to='/'><h3 className="text-2xl text-col3">Elon Thy</h3></Link>
                        <BiCodeAlt className="text-col3 text-3xl font-bold " />
                    </div>
                    {openNavBar ? (
                    <HiX
                        className="text-col7 text-3xl cursor-pointer"
                        onClick={toggleNav}
                    />
                    ) : (
                    <GiHamburgerMenu
                        className="text-col7 text-3xl cursor-pointer"
                        onClick={toggleNav}
                    />
                    )}
                </div>
                <ul className={`${openNavBar ? 'grid grid-cols-1' : 'hidden '} text-col3 text-lg justify-items-center bg-col7 px-2 py-4 gap-3 transition duration-1000 ease-in-out`}>
                    <Link to="/" className="px-5 hover:text-col6 hover:border-b-2">Home</Link>
                    <Link to="/blog" className="px-5 hover:text-col6 hover:border-b-2"> Blogs</Link>
                    <Link to="contact" className="px-5 hover:text-col6 hover:border-b-2">Contact</Link>
                    <Link to="/project" className="px-5 hover:text-col6 hover:border-b-2">Projects</Link>
                    <Link to="/achievement" className="px-5 hover:text-col6 hover:border-b-2">Achievements</Link>
                </ul>
            </div>
        </div> 

     );
}
 
export default Navbar;