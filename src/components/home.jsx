import React from "react";
import {FaFacebookSquare , FaInstagramSquare , FaTelegramPlane , FaGithubSquare , FaLinkedin} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa';
import Footer from './footer';
import { useTypewriter , Cursor} from "react-simple-typewriter";
const Home = () => {
    const [text] = useTypewriter({
        words: ["Software Developer" , "Frontend Developer" , "Backend Developer" , "Fullstack Developer"],
        loop: {},
        typeSpeed: 200,
        deleteSpeed : 200
    })
    return ( 
        
        <div className="home-container ">
            <div className="home flex justify-center px-10 md:grid-cols-2 sm:grid-cols-2">
                <div className="context py-5">
                    <h1 className="text-4xl text-col6 py-4">Hi 👋, I am <span className="rounded-lg px-4">Leap Chanvuthy</span></h1>
                    <h2 className="text-4xl text-col6 pt-4">I am a </h2>
                    <span ><h2 className="text-4xl text-col7 pt-2">{text}<Cursor/></h2></span>
                    
                    <h2 className="pt-16 text-col3 text-3xl">Contact me</h2>
                    <ul className="icons flex justify-start">
                        <li className="pr-6 py-4"> <FaFacebookSquare className="text-3xl  text-col3" />  </li>
                        <li className="pr-6 py-4"> <FaTelegramPlane  className="text-3xl  text-col3"/></li>
                        <li className="pr-6 py-4"> <FaInstagramSquare className="text-3xl  text-col3"/></li>
                        <li className="pr-6 py-4"> <FaGithubSquare className="text-3xl  text-col3" /></li>
                        <li className="pr-6 py-4"> <FaLinkedin className="text-3xl  text-col3" /></li>
                        <li className="pr-6 py-4"> <FaTwitterSquare className="text-3xl  text-col3"/></li>
                    </ul>
                    <ul className="py-4 flex gap-4">
                        <li><a href="http://t.me/Elon_Thy" className="text-col1 bg-col7 px-7 rounded-md">HIRE ME</a></li>
                    </ul>
                </div>

                <div className="photo border-x-4 border-y-4 border-col7 py-5 flex justify-center">
                    <div className="avatar flex justify-center items-center">
                        <img src="../avatar2.jpg" className="overflow-hidden object-cover" alt="avatar" />
                    </div>
                </div>
            </div>

            {/* about me layout */}

            <div className="about_me flex justify-between px-10 py-20">

            </div>

           
        </div>
     );
}
 
export default Home;