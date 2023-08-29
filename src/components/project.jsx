import Footer from "./footer";
import NodeProjects from "./projects/node_project";
import { useTypewriter , Cursor} from "react-simple-typewriter";
const Project = () => {
  const [text] = useTypewriter({
    words: ["All About My Projects"],
    loop: {},
    typeSpeed: 200,
    deleteSpeed : 200
  })

  return (
    <div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1  justify-items-center lg:px-40 lg:py-10 sm:px-20 sm:py-3">
        <div class="max-w-xs mx-auto bg-white border-2 border-col7 shadow-md rounded-full overflow-hidden">
          <img
            src="../avatar4.png"
            alt="Image"
            class="w-full h-full object-cover"
          />
        </div>
        <div className="py-[25%]">
          <h2 className="text-col7 navbar text-2xl font-bold uppercase text-center">
            {text}<Cursor/>
          </h2>
          <p className="text-col3 text-center  px-2 navbar">
             Welcome to my Tech Stack Portfolio Showcase, where I proudly present
            a collection of innovative projects that showcase my expertise in
            cutting-edge technologies. As a passionate developer with a penchant
            for problem-solving, I've leveraged a diverse array of tools and
            frameworks to bring these projects to life.
          </p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 px-5 py-8">
          {/* Card 1 */}
          <div className="max-w-sm mx-auto  border-2 border-col7 shadow-md rounded-lg overflow-hidden cursor-pointer">
            <img
              src="../Thymovies.png"
              alt="Technology 1"
              className="w-full h-40 object-cover"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-col7 navbar">
                Thy Movies
              </div>
              <p className="text-col2 text-base overflow-hidden overflow-ellipsis h-20">
                A static website that's fetch movie's data from API using vanilla Javascript
              </p>
            </div>
            <div className="flex justify-start gap-4 px-4 py-3">
                <button className="text-col7 hover:text-col3 px-2 py-1 rounded-md border-2 border-col7 hover:border-col3"><a href="https://github.com/Leap-Chanvuthy/thymovies.github.io">Github</a></button>
                <button className="text-col7 hover:text-col3 px-2 py-1 rounded-md border-2 border-col7 hover:border-col3"><a href="https://thymovies.vercel.app/">Website</a></button>
            </div>
          </div>


          {/* Card 2 */}

          <div className="max-w-sm mx-auto  border-2 border-col7 shadow-md rounded-lg overflow-hidden cursor-pointer">
            <img
              src="../BestfriendFT.png"
              alt="Technology 1"
              className="w-full h-40 object-cover"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-col7 navbar">
               BESTFRIEND FT
              </div>
              <p className="text-col2 text-base overflow-hidden overflow-ellipsis h-20">
               BestfriendFT is a static football portfolio website  that's built uisng html css and vanilla JavaScript.
              </p>
            </div>
            <div className="flex justify-start gap-4 px-4 py-3">
                <button className="text-col7 hover:text-col3 px-2 py-1 rounded-md border-2 border-col7 hover:border-col3"><a href="https://github.com/Leap-Chanvuthy/BestfriendFT.github.io">Github</a></button>
                <button className="text-col7 hover:text-col3 px-2 py-1 rounded-md border-2 border-col7 hover:border-col3"><a href="https://bestfriendft.vercel.app/">Website</a></button>
            </div>
          </div>

          {/* Card 3 */}

          <div className="max-w-sm mx-auto  border-2 border-col7 shadow-md rounded-lg overflow-hidden cursor-pointer">
            <img
              src="../Thyclothes.png"
              alt="Technology 1"
              className="w-full h-40 object-cover"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-col7 navbar">
               BESTFRIEND FT
              </div>
              <p className="text-col2 text-base overflow-hidden overflow-ellipsis h-20">
              Dive into the world of online shopping with my HTML, CSS, and JavaScript project. Experience a static shopping cart that showcases the basics of e-commerce design. From adding products to the cart to simulating a checkout process, this project offers a glimpse into the essential elements of a user-friendly shopping experience. Get a taste of web development magic as I combine HTML, CSS, and JavaScript to bring this virtual shopping journey to life.
              </p>
            </div>
            <div className="flex justify-start gap-4 px-4 py-3">
                <button className="text-col7 hover:text-col3 px-2 py-1 rounded-md border-2 border-col7 hover:border-col3"><a href="https://github.com/Leap-Chanvuthy/THYCLOTH">Github</a></button>
                <button className="text-col7 hover:text-col3 px-2 py-1 rounded-md border-2 border-col7 hover:border-col3"><a href="https://thycloth.vercel.app/index.html">Website</a></button>
            </div>
          </div>
          {/* cart 4 */}
          <div className="max-w-sm mx-auto  border-2 border-col7 shadow-md rounded-lg overflow-hidden cursor-pointer">
            <img
              src="../Skoolio.png"
              alt="Technology 1"
              className="w-full h-40 object-cover"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-col7 navbar">
               Skoolio (MERN Stack App)
              </div>
              <p className="text-col2 text-base overflow-hidden overflow-ellipsis h-20">
              Skoolio is an e-commerce platform; it's a technological marvel that merges convenience, efficiency, and innovation. Witness the harmony of the MERN stack as it brings to life an online shopping haven, where products are just a click away. Explore Skoolio and indulge in a world of online shopping like never before.
              </p>
            </div>
            <div className="flex justify-start gap-4 px-4 py-3">
                <button className="text-col7 hover:text-col3 px-2 py-1 rounded-md border-2 border-col7 hover:border-col3"><a href="https://github.com/Leap-Chanvuthy/Skoolio">Github</a></button>
            </div>
          </div>
            <NodeProjects/>
          {/* card 5 */}
          <div className="max-w-sm mx-auto  border-2 border-col7 shadow-md rounded-lg overflow-hidden cursor-pointer">
            <img
              src="../Vuthy_workout.png"
              alt="Technology 1"
              className="w-full h-40 object-cover"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-col7 navbar">
               Workout Planner (MERN Stack Authentication)
              </div>
              <p className="text-col2 text-base overflow-hidden overflow-ellipsis h-20">
              A web application powered by the MERN (MongoDB, Express.js, React.js, Node.js) stack, complete with robust authentication features. Embark on your fitness journey with confidence as you plan, track, and achieve your workout goals.
              </p>
            </div>
            <div className="flex justify-start gap-4 px-4 py-3">
                <button className="text-col7 hover:text-col3 px-2 py-1 rounded-md border-2 border-col7 hover:border-col3"><a href="https://github.com/Leap-Chanvuthy/Skoolio">Github</a></button>
            </div>
          </div>

        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Project;
