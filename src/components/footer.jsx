import {FaFacebookSquare , FaInstagramSquare , FaTelegramPlane , FaGithubSquare , FaLinkedin} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa';


const Footer = () => {
    return ( 
        <div className="footer py-10 bg-col3">
            <ul className="icons flex justify-center">
                <li className="pr-6 py-4" > <FaFacebookSquare className="text-3xl  text-col7" />  </li>
                <li className="pr-6 py-4"> <FaTelegramPlane  className="text-3xl  text-col7"/></li>
                <li className="pr-6 py-4"> <FaInstagramSquare className="text-3xl  text-col7"/></li>
                <li className="pr-6 py-4"> <FaGithubSquare className="text-3xl  text-col7" /></li>
                <li className="pr-6 py-4"> <FaLinkedin className="text-3xl  text-col7" /></li>
                <li className="pr-6 py-4"> <FaTwitterSquare className="text-3xl  text-col7"/></li>
            </ul>
            <p className='text-white text-center'><strong>Terms of Use ~ Privacy Policy</strong></p>
            <p className='text-white text-center'>Copyright reserved © <strong>Leap Chanvuthy</strong></p>
            
        </div>
     );
}
  
export default Footer;