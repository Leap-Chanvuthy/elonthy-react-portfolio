import Footer from '../components/footer';
import { useTypewriter , Cursor} from "react-simple-typewriter";
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
              <p className="text-col2 text-base overflow-hidden overflow-ellipsis h-16">
              React.JS is JavaScript library for building user interfaces (UIs). It was developed and is maintained by Facebook and a community of developers. React is widely used for creating dynamic and interactive web applications, especially single-page applications (SPAs).
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
              <p className="text-col2 text-base overflow-hidden overflow-ellipsis h-16">
              Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser. It was developed by Ryan Dahl and is built on the V8 JavaScript engine, which is the same engine that powers Google Chrome's JavaScript execution.
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
              <p className="text-col2 text-base overflow-hidden overflow-ellipsis h-16">
              The MERN stack is a popular technology stack used for building modern web applications. It consists of four main components: MongoDB, Express.js, React.js, and Node.js. Each of these technologies plays a specific role in the development process, collectively providing a full-stack framework for building robust and dynamic web applications.
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
