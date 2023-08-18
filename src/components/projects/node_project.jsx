const NodeProjects = () => {
    return ( 
        <div >
            <div className="max-w-sm mx-auto  border-2 border-col7 shadow-md rounded-lg overflow-hidden cursor-pointer">
            <img
              src="../DeepInsight.png"
              alt="Technology 1"
              className="w-full h-40 object-cover"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-col7 navbar">
               DeepInsight (Node.js Authentication)
              </div>
              <p className="text-col2 text-base overflow-hidden overflow-ellipsis h-20">
              Incorporating EJS for dynamic views, Node.js for server-side functionality, and Express for routing, I've designed an authentication flow that ensures user data privacy and access control. Through encrypted passwords, session management, and validation checks, my project portfolio showcases a comprehensive approach to user authentication.
              </p>
            </div>
            <div className="flex justify-start gap-4 px-4 py-3">
                <button className="text-col7 hover:text-col3 px-2 py-1 rounded-md border-2 border-col7 hover:border-col3"><a href="https://github.com/Leap-Chanvuthy/Node-Express-BlogMedia">Github</a></button>
            </div>
          </div>
        </div>
     );
}
 
export default NodeProjects;