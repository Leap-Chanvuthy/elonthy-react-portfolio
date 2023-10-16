import { useState } from "react";
import { BsRobot } from "react-icons/bs";
import { HiX } from "react-icons/hi";
import ChatBot from "react-simple-chatbot";
import { steps } from "./data";

function ChatbotIcon() {
  const [showChat, setShowChat] = useState(false);
  const toggleChat = () => {
    setShowChat(!showChat);
  };

  
  return (
    <div className="fixed bottom-10 right-10 z-50">
      {!showChat && (
        <button
          onClick={toggleChat}
          className="bg-col7 text-col1 hover:bg-col1 hover:text-col7 border-2  border-col7 font-semibold rounded-full h-12 w-12 flex items-center justify-center"
        >
          <span className="text-xl">
            <BsRobot />
          </span>
        </button>
      )}
      {showChat && (
        <div className="fixed bottom-10 right-4 z-50 shadow-lg rounded-lg p-4 w-[22.4rem] h-[33rem]">
          <div className="flex justify-end relative">
            <button
              onClick={toggleChat}
              className="text-col7 text-lg hover:text-gray-700 flex justify-end"
            >
              <HiX />
            </button>
          </div>
          {/* Chat conversation container */}
          <div className="flex justify-center">
            <ChatBot steps={steps} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatbotIcon;
