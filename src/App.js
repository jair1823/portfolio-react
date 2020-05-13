import React from "react";
import Header from "./components/header";
import PersonalInfo from "./components/personalInfo";
import Hello from "./components/hello";
import Resume from "./components/resume";

function App() {
  return (
    <div className="App">
      <Header />
      <PersonalInfo />
      <Hello />
      <hr />
      <Resume />
      <hr />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
