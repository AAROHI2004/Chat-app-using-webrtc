import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    { text: "Buy products", handler: props.actionProvider.handleProductList, id: 1 },
    { text: "Locate Nearby store", handler: props.actionProvider.handleNearbyStore, id: 2 },
    { text: "Query about my Order", handler: () => {}, id: 3 },
    { text: "Track my order", handler: () => {}, id: 4 },
    { text: "Other Services", handler: () => {}, id: 5 },
    { text: "Chat live with a sales expert", handler: openLiveChatWindow, id: 6 },
  ];

  // Function to open the local software in a new window
  function openLiveChatWindow() {
    // Open the local software in a new window
    window.open("http://127.0.0.1:5502/", '_blank');
  }

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
