import { Link } from "react-router-dom";
import {SiJavascript} from 'react-icons/si'
const Navbar = () => {
    return ( 
        <div className="navbar flex justify-between px-40 py-5 font-extrabold">
            <h3 className="text-2xl gap-4 text-col3">Elon Thy</h3>
            <ul className="text-col7 text-lg">
            <Link to="/" className="px-5">Home</Link>
            <Link to="/blog" className="px-5">Blogs</Link>
            <Link to="contact" className="px-5">Contact</Link>
            <Link to="/project" className="px-5">Projects</Link>
            <Link to="/achievement" className="px-5">Achievements</Link>
            </ul>
        </div>
     );
}
 
export default Navbar;