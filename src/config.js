// config.js
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./components/LearningOptions";
import LinkList from "./components/LinkList";


const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help you get to the right place."),
    createChatBotMessage("What would you like to do?", {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "BuyProducts",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Phone",
            url: "https://www.jiomart.com/search/phone",
            id: 1,
          },
          {
            text: "Laptop",
            url: "https://www.jiomart.com/search/laptop/in/prod_mart_master_vertical",
            id: 2,
          },
          {
            text: "Headphones",
            url: "https://www.jiomart.com/search/headphones",
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;
