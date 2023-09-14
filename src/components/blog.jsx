import Footer from '../components/footer';
import { useTypewriter , Cursor} from "react-simple-typewriter";
import { Scrollbar } from 'react-scrollbars-custom';
const Blog = () => {

  const [text] = useTypewriter({
    words: ["Exploring the Technological Landscape, A Journey Through My Tech Stack Portfolio"],
    loop: {},
    typeSpeed: 50,
    deleteSpeed : 50
})

  return (
    <div className="pt-10 ">
      <div className="pt-2 pb-20">
        <h1 className="text-col7 text-center text-2xl font-bold hover:text-col3 navbar">
          All about my blogs
        </h1>
        <p className="text-col3 text-center navbar px-4">{text} <Cursor /></p>
      </div>
      <div className='pb-16'>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 px-5">
          {/* Card 1 */}
          <div className="max-w-sm mx-auto  border-2 border-col7 shadow-md rounded-lg overflow-hidden cursor-pointer">
            <img
              src="https://i.pinimg.com/564x/b8/b0/94/b8b094d897ac458e6bb1bb1e04c7fc6d.jpg"
              alt="Technology 1"
              className="w-full h-40 object-cover"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-col7 navbar">React.JS</div>
              <p className="text-col2 text-base overflow-y-scroll overflow-ellipsis h-40">
              React.js is a JavaScript library for building user interfaces. It is declarative, efficient, and flexible, and it is used by millions of developers around the world to build websites, web applications, and even mobile applications using React Native.
              I have extensive experience with React.js. I have used it to build a variety of projects, including my own portfolio website, a web application for managing a team's workload, and a mobile application for displaying real-time data from a database. I have also used React.js to build reusable components that can be shared across different projects.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="max-w-sm mx-auto border-2 border-col7 shadow-md rounded-lg overflow-hidden cursor-pointer">
            <img
              src="https://i.pinimg.com/564x/30/50/a5/3050a56ba33ff757c6fa4872a4a672f2.jpg"
              alt="Technology 2"
              className="w-full h-40 object-cover"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-col7 navbar">Node.JS</div>
              <p className="text-col2 text-base overflow-y-scroll overflow-ellipsis h-40">
              Node.js REST APIs with JWT are a secure and efficient way to build and deploy web applications. Node.js is a lightweight and scalable JavaScript runtime environment, and REST APIs are a popular style of API that is easy to use and understand. JWT, or JSON Web Tokens, are a secure way to authenticate users and authorize access to resources.
              I have experience with building and deploying Node.js REST APIs with JWT in a variety of settings. I have used this technology to build APIs for user authentication and authorization, as well as APIs for managing data and business logic. I have also used Node.js REST APIs with JWT to integrate with other systems, such as databases and payment processors.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="max-w-sm mx-auto border-2 border-col7 shadow-md rounded-lg overflow-hidden cursor-pointer">
            <img
              src="https://i.pinimg.com/564x/93/44/9a/93449acdf489fad3d205bb76583608cb.jpg"
              alt="Technology 3"
              className="w-full h-40 object-cover"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-col7 navbar">MERN Stack</div>
              <p className="text-col2 text-base overflow-y-scroll overflow-ellipsis h-40">
              The MERN Stack is a popular choice for web development because it is fast, scalable, and easy to use. It is also a good choice for beginners because all of the technologies in the MERN Stack are JavaScript-based, which means that developers only need to learn one language.
              I have experience with building and deploying MERN Stack applications in a variety of settings. I have used this technology to build websites, web applications, and even mobile applications using React Native. I have also used the MERN Stack to integrate with other systems, such as databases and payment processors.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Blog;
