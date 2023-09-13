class ActionProvider {

  constructor(createChatBotMessage, setStateFunc, history) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.history = history;
  }
  
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.");
    this.updateChatbotState(greetingMessage);
  }

  handleProductList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've got the following resources for you ",
      {
        widget: "BuyProducts",
      }
    );

    this.updateChatbotState(message);
  };

  handleNearbyStore = () => {

    const userLatitude = 40.7128; // User's latitude
    const userLongitude = -74.0060; // User's longitude

    // Construct the URL for locating nearby Reliance stores based on user's location
    const nearbyStoresUrl = `https://www.google.com/maps/search/Reliance+stores/@${userLatitude},${userLongitude},15z`;

    // Open the nearby stores link in a new tab/window
    window.open(nearbyStoresUrl, "_blank");
  };

  handlelivechat = () => {
    // Use history.push to navigate to the desired route
    //this.history.push('/ChatWithSalesExpert'); // Replace '/livechat' with your desired route
  };
  

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
