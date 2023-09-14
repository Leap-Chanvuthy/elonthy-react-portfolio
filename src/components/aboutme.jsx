import {HiAcademicCap} from 'react-icons/hi';
import {BiFootball} from 'react-icons/bi';
import {IoLogoGameControllerB} from 'react-icons/io';
import {LuCode2} from 'react-icons/lu';

const AboutMe = () => {
    return ( 
        <div>
            <div className="text-center text-col3 py-10">
                <h2 className="navbar text-2xl font-bold">About Me</h2>
                <p>Hobby & Favourite</p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 text-col3 px-14">
                <div className=' hover:bg-col2 px-8 py-10 flex flex-col justify-center items-center gap-2 border-2 border-col7 rounded-md'>
                    <HiAcademicCap className='text-2xl'/>
                    <h2 className='navbar'>CADT</h2>
                    <p className='text-center'>Year 2 student of Cambodia Academy Of Digital Technology Major of Computer Science.</p>
                </div>
                <div className=' hover:bg-col2 px-8 py-10 flex flex-col justify-center items-center gap-2 border-2 border-col7 rounded-md'>
                    <BiFootball className='text-2xl'/>
                    <h2 className='navbar'>Football</h2>
                    <p className='text-center'>I always spend time playing football every single week. I'm taking care of myself to have a good healthy. </p>
                </div>
                <div className=' hover:bg-col2 px-8 py-10 flex flex-col justify-center items-center gap-2 border-2 border-col7 rounded-md'>
                    <IoLogoGameControllerB className='text-2xl'/>
                    <h2 className='navbar'>Gaming</h2>
                    <p className='text-center'>I play game in free time after I've done all my works and assignments . I use game to release stress whenever I have a bad day.</p>
                </div>
                <div className=' hover:bg-col2 px-8 py-10 flex flex-col justify-center items-center gap-2 border-2 border-col7 rounded-md'>
                    <LuCode2 className='text-2xl'/>
                    <h2 className='navbar'>Coding</h2>
                    <p className='text-center'>I spent most of my day coding from moring to evening . Coding make me challenge with problem and make me having strong problem solving skill.</p>
                </div>
            </div>

            {/* <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 text-col3 px-14 py-20'>
                code goes here
            </div> */}

        </div>
     );
}
export default AboutMe;