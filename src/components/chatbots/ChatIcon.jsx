import { useState } from 'react';
import {BsRobot} from 'react-icons/bs';
import ChatBot from './Chatbot'; 
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
            <BsRobot/>
          </span>
        </button>
      )}
      {showChat && <ChatBot closeChat={toggleChat} />}
    </div>
  );
}

export default ChatbotIcon;
