import React from "react";
import {BiLogoJavascript , BiLogoReact , BiLogoHtml5 , BiLogoTailwindCss} from 'react-icons/bi';
import {FaNode} from 'react-icons/fa';
import {SiExpress} from 'react-icons/si';
import {BiLogoMongodb} from 'react-icons/bi';
import { useTypewriter , Cursor} from "react-simple-typewriter";
import Footer from "./footer";
const Home = () => {
    const [text] = useTypewriter({
        words: ["Software Developer" , "Frontend Developer" , "Backend Developer" , "Fullstack Developer"],
        loop: {},
        typeSpeed: 200,
        deleteSpeed : 200
    })
    return ( 
        
        <div className="home-container">
            <div className="home lg:grid grid-cols-2  md:grid-cols-2 sm:grid-cols-1 justify-items-center px-10">
                <div className="">
                    <div className="photo border-x-4 border-y-4 border-col7 py-10 flex justify-center">
                        <div className="avatar flex justify-center items-center">
                            <img src="../avatar3.png" className=" max-w-sm overflow-hidden object-cover" alt="avatar" />
                        </div>
                    </div>
                </div>
                
                <div className="context py-5">
                    <h1 className="text-4xl text-col6 py-4">Hi 👋, I am <span className="rounded-lg px-4">Leap Chanvuthy</span></h1>
                    <h2 className="text-4xl text-col6 pt-4">I am a </h2>
                    <span ><h2 className="text-4xl text-col7 pt-2">{text}<Cursor/></h2></span>
                    <h2 className="pt-16 text-col3 text-3xl">My Tech Stacks</h2>
                    <ul className="icons flex justify-start gap-3 py-4 ">
                        <li className=" text-col7 text-4xl"><BiLogoTailwindCss/></li>
                        <li className=" text-col7 text-4xl"><BiLogoJavascript/></li>
                        <li className=" text-col7 text-4xl"><BiLogoReact/></li>
                        <li className=" text-col7 text-4xl"><FaNode/></li>
                        <li className=" text-col7 text-4xl"><SiExpress/></li>
                        <li className=" text-col7 text-4xl"><BiLogoMongodb/></li>
                    </ul>
                    <ul className="py-4 flex gap-4">
                        <li><a href="https://t.me/Elon_Thy" className="text-col1 bg-col7 px-7 rounded-md">HIRE ME</a></li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
     );
}
 
export default Home;