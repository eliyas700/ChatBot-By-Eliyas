import logo from "./logo.svg";
import "./App.css";
import Chatbot from "react-chatbot-kit";
import Configuration from "./Chatbot/Configuration";
import ActionProvider from "./Chatbot/ActionProvider";
import MessageParser from "./Chatbot/MessageParser";
function App() {
  return (
    <div className="App">
      <div className="App">
        <div style={{ maxWidth: "300px" }}>
          <Chatbot
            config={Configuration}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
