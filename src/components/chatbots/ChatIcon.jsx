import { useState } from "react";
import { BsRobot } from "react-icons/bs";
import { HiX } from "react-icons/hi";
import ChatBot from "react-simple-chatbot";

function ChatbotIcon() {
  const [showChat, setShowChat] = useState(false);
  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const steps = [
    {
      id: "Greeting",
      message: "Hello👋, My name is Leap Chanvuthy. Welcome to my portfolio where I showcase my skills.",
      trigger: "Ask name",
    },
    {
      id: "Ask name",
      message: "May I know your name?",
      trigger: "waiting",
    },
    {
      id: "waiting",
      user: true,
      trigger: "name",
    },
    {
      id: "name",
      message: "Hello, ${previousValue}. What do you want to know about me?",
      trigger: "issue",
    },
    {
      id: "issue",
      message: "What do you want to know about me?",
      options: [
        {
          value: "Projects",
          trigger: "Projects",
        },
        {
          value: "Knowledge",
          trigger: "Knowledge",
        },
        {
          value: "Skills",
          trigger: "Skills",
        },
      ],
    },
    {
      id: "Projects",
      message: "I'm glad that you want to know about my projects. I have experience with various types of projects, including the MERN Stack. I'm proficient in JavaScript.",
      trigger: "ask_more_about_projects",
    },
    {
      id: "Knowledge",
      message: "I'm currently a third-year Software Engineering student at the Cambodia Academy of Digital Technology.",
      trigger: "ask_more_about_projects",
    },
    {
      id: "Skills",
      message: "I'm a MERN Stack developer with experience in building and maintaining complex web applications. I'm a quick learner and always eager to take on new challenges.",
      trigger: "ask_more_about_projects",
    },
    {
      id: "ask_more_about_projects",
      message: "Do you want to know more about a specific project?",
      options: [
        {
          value: "Yes",
          trigger: "projects_list",
        },
        {
          value: "No",
          trigger: "end",
        },
      ],
    },
    {
      id: "projects_list",
      message: "I have worked on a variety of projects, including:",
      options: [
        {
          value: "MERN Stack website",
          trigger: "project_mern_stack_website",
        },
        {
          value: "E-commerce website",
          trigger: "project_e_commerce_website",
        },
        {
          value: "Social media platform",
          trigger: "project_social_media_platform",
        },
      ],
    },
    {
      id: "project_mern_stack_website",
      message: "Information about your MERN Stack website project goes here.",
      trigger: "end",
    },
    {
      id: "project_e_commerce_website",
      message: "Information about your e-commerce website project goes here.",
      trigger: "end",
    },
    {
      id: "project_social_media_platform",
      message: "Information about your social media platform project goes here.",
      trigger: "end",
    },
    {
      id: "end",
      message: "Thank you for chatting with me. If you have any more questions, feel free to ask!",
      end: true,
    }
  ];

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
        <div className="fixed bottom-10 right-4 z-50 shadow-lg rounded-lg p-4 w-[22.4rem] h-[35.1rem]">
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
