import React from 'react';
import { HiX } from 'react-icons/hi'; // Import the close icon from a relevant icon library
import { FiSend } from 'react-icons/fi'; // Import the send icon from a relevant icon library

function ChatBot({ closeChat }) {
  // ...

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-col1 border-2 border-col7 shadow-lg rounded-lg p-4 w-72 h-96 overflow-hidden">
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-bold text-col7">I am T-Bot</h4>
        <button onClick={closeChat} className="text-col7 text-lg hover:text-gray-700">
          <HiX />
        </button>
      </div>

      {/* Chat conversation container */}
      <div className="overflow-y-auto h-72 mb-1 rounded-md">
        {/* chat conversation components here */}
      </div>

      {/* Input field and send button */}
      <div className="flex">
        <input
          type="text"
          placeholder="Type your message..."
          className=" bg-col1  rounded-l p-2 flex-grow" // Use "flex-grow" to make the input fit
        />
        <button className=" text-white rounded-r p-2">
          <FiSend /> 
        </button>
      </div>
    </div>
  );
}

export default ChatBot;
