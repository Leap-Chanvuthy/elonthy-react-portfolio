import React from 'react';
import { HiX } from 'react-icons/hi'; // Import the close icon from a relevant icon library
import {ChatBot} from 'react-simple-chatbot';

export function Chatbott({ closeChat }) {
  const steps = [
    {
    id: 1,
    message : 'Hi! My name is Leap Chanvuthy and I am a MERN Stack developer. I am excited to learn more about you and your projects!',
    trigger : 2,
    },
    {
    id: 2,
    message: 'What would you like to know about me?',
    trigger: 3,
    },
    {
    id: 3,
    options: [
    { value: 'Education', trigger: 4 },
    { value: 'Skills', trigger: 5 },
    { value: 'Projects', trigger: 6 },
    { value: 'Other', trigger: 7 },
    { value: 'Skills and projects', trigger: 8 },
    ],
    },
    {
    id: 4,
    message: 'I am currently a third-year Software Engineering student at the Cambodia Academy of Digital Technology.',
    trigger: 2,
    },
    {
    id: 5,
    message: 'I am a MERN Stack developer with experience in building and maintaining complex web applications. I am also a quick learner and I am always eager to take on new challenges.',
    trigger: 2,
    },
    {
    id: 6,
    message: 'You can check out my projects on my website: [link to your website]',
    trigger: 2,
    },
    {
    id: 7,
    message: 'Please feel free to ask me any other questions you have.',
    trigger: 2,
    },
    {
    id: 13,
    options: [
    { value: 'Education', trigger: 4 },
    { value: 'Skills', trigger: 5 },
    { value: 'Projects', trigger: 6 },
    { value: 'Other', trigger: 7 },
    { value: 'Skills and projects', trigger: 8 },
    ],
    },
    {
    id: 8,
    message: "Here are some of my skills and projects:",
    trigger: 9,
    },
    {
    id: 9,
    message: "Skills: HTML, CSS, JavaScript, React, Node.js, Express, MySQL, MongoDB, Git",
    trigger: 10,
    },
    {
    id: 10,
    message: "Projects: [link to your portfolio]",
    trigger: 2,
    },
    {
    id: 9,
    message: "Would you like to learn more about a specific skill or project?",
    trigger: 11,
    },
    {
    id: 11,
    options: [
    { value: 'Yes', trigger: 12 },
    { value: 'No', trigger: 2 },
    ],
    },
    ];
    
    

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
        <ChatBot steps={steps} />
      </div>
    </div>
  );
}

