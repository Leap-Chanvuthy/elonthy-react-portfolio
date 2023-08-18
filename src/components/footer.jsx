import {FaFacebookSquare , FaInstagramSquare , FaTelegramPlane , FaGithubSquare , FaLinkedin} from 'react-icons/fa'
import { FaHome} from 'react-icons/fa';


const Footer = () => {
    return ( 
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 bg-col2 py-5 mt-10 border-t-2 rounded-xl border-col2 justify-items-center">
                <div>
                    <h3 className=" text-col3 font-bold uppercase">Get in touch</h3>
                    <div className="grid grid-cols-3  gap-5 pt-2 items-center text-col3">
                        <a href="https://t.me/Elon_Thy"><FaTelegramPlane /></a>
                        <a href="https://github.com/Leap-Chanvuthy"><FaGithubSquare/></a>
                        <a href="https://www.linkedin.com/in/leap-chanvuthy-9402b8282/"><FaLinkedin/></a>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 justify-items-center text-center text-col3">
                    <div>
                        <h3 className="font-bold"> Copyright © 2023</h3>
                        <h4>Leap Chanvuthy , All right reserved</h4>
                        <div className="flex justify-center items-center gap-4">
                            <FaHome /> Phnom Penh , Cambodia
                        </div>
                    </div> 
                </div> 
            </div>      
     );
}
  
export default Footer;