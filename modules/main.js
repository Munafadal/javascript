// Import the function from messageModule.js
import { getMessage } from "./messageModule.js";

const button = document.getElementById("showMsgBtn");
const messageBox = document.getElementById("messageBox");

button.addEventListener("click", () => {
  // Use the imported function
  messageBox.textContent = getMessage();
});
