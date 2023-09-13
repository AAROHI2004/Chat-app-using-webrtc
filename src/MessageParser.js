class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase()
    
    if (lowerCaseMessage.includes("hello")|| lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hey")) {
      this.actionProvider.greet()
    }
    if (lowerCaseMessage.includes("buy products")) {
      this.actionProvider.handleProductList();
    }
    if (lowerCaseMessage.includes("locate nearby store")) {
      this.actionProvider.handleNearbyStore();
    }
    if (lowerCaseMessage.includes("chat live with a sale expert")) {
      this.actionProvider.handleChatWithSalesExpert();
    }
  }
}

export default MessageParser