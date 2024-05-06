import reactLogo from "./React-icon.png";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <MainContent />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <div>
        <img src={reactLogo} alt="react-logo" className="react-logo" />{" "}
        <h3>ReactFacts</h3>
      </div>
      <h2>React Course - Project 1</h2>
    </div>
  );
}

function MainContent() {
  return (
    <div className="main">
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was orginally created by Jordan Walke</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Power thousands of entreprise apps, including mobile Apps</li>
      </ul>
    </div>
  );
}

export default App;
