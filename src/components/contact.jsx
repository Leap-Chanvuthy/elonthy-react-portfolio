import { useState } from 'react';
import Footer from '../components/footer';
import emailjs from 'emailjs-com';
import {FaTelegramPlane , FaGithubSquare , FaLinkedin} from 'react-icons/fa';
import { useTypewriter , Cursor} from "react-simple-typewriter";

const Contact = () => {
    const [text] = useTypewriter({
        words: ["Contact me "],
        loop: {},
        typeSpeed: 200,
        deleteSpeed : 200
    })

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [message , setMessage] = useState('');
    const handleSend = (e) => {
        e.preventDefault();
        emailjs.sendForm ('service_a8ecrg2' , 'template_3x9274k' , e.target , 'AGTWVwMYfFNJ5mnoJ')
            .then ((respone) => {
                console.log ('Email send : ' , respone);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.log ('Failed sending email : ' , error);
            })
    }
 
  return (
    <div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1  justify-items-center lg:px-40 lg:py-10 sm:px-20 sm:py-3">
            <div class="max-w-xs mx-auto bg-white border-2 border-col7 shadow-md rounded-full overflow-hidden">
            <img
                src="../avatar2.jpg"
                alt="Image"
                class="w-full h-full object-cover"
            />
            </div>
            <div className="py-[25%]">
                <h2 className="text-col7 navbar text-2xl font-bold uppercase text-center">
                    {text} <Cursor/>
                </h2>
                <p className="text-col3 text-center  px-2 navbar py-8">
                Feel free to reach out to me using the contact form below or via the provided contact information. I'd love to hear about your goals, dreams, and aspirations, and explore how I can be a part of turning them into reality.
                </p>
                <div>
                    <h3 className=" text-col7 font-bold uppercase text-center">Get in touch</h3>
                    <div className="flex justify-center  gap-5 pt-2 items-center text-col3 text-xl">
                        <a href="https://t.me/Elon_Thy"><FaTelegramPlane /></a>
                        <a href="https://github.com/Leap-Chanvuthy"><FaGithubSquare/></a>
                        <a href="https://www.linkedin.com/in/leap-chanvuthy-9402b8282/"><FaLinkedin/></a>
                    </div>
                </div>
            </div>
      </div>
      <div className=" lg:px-40 sm:px-20 py-10">
            <form className=" shadow-md rounded-lg px-10 py-10 gap-6" onSubmit={handleSend}>
                <div className="flex flex-col">
                <label htmlFor="name" className="text-col7 font-semibold mb-1 ">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-col3"
                    onChange={(e) => setName(e.target.value)}
                />
                </div>
                <div className="flex flex-col">
                <label htmlFor="email" className="text-col7 font-semibold mb-1">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-col3"
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <div className="flex flex-col">
                <label htmlFor="message" className="text-col7 font-semibold mb-1 ">Write a message ...</label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-col3"
                    onChange={(e) => setMessage(e.target.value)}
                />
                </div>
                <div className="pt-5">
                    <button type="submit" className=" text-col7 py-2 px-6 border-2 rounded-lg border-col7 hover:text-col3 hover:bg-col7">Send Email</button>
                </div>
            </form>
        </div>
        <Footer/>
    </div>
  );
};

export default Contact;
