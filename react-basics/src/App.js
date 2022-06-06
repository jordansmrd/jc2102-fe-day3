import logo from "./logo.svg";
import "./App.css";
import "./css/styles.css";
import TitleSection from "./components/TitleSection";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React Purwadhika
    //     </a>
    //   </header>
    // </div>
    <div>
      <TitleSection />
      <TitleSection />

      <TitleSection />

      <div>
        <h1>
          belajar <span className="red">react</span>
        </h1>
      </div>
      <div></div>
    </div>
  );
}

export default App;
