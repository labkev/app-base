import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import HolaMundo from "./components/HolaMundo";
// import Saludar from "./components/Saludar";

function App() {
  // const userName = "kevin romero";
  // const edad = "100";

  // const user = {
  //   nombre: "kevin romero polanco",
  //   edad: "31",
  //   color: "green",
  // };

  // const saludarFn = (name, edad) => {
  //   console.log("Hola " + name + " tiene " + edad + " años. ");
  //   console.log(`Hola ${name}, tiene ${edad} años.`);
  // };
  const [stateCar, setSatateCar] = useState(false);
  const [contar, setContar] = useState(0);

  useEffect(() => {
    console.log("Tolal: " + { contar });
  }, [contar]);

  const power = () => {
    // setSatateCar(!stateCar);
    setSatateCar((prevValue) => !prevValue);
    setContar(contar + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>El carro esta {stateCar ? "on" : "off"}</h3>
        <h4>Clicks: {contar}</h4>
        <button onClick={power}>on / off</button>
        {/* <p>App Base test</p>
        <HolaMundo />
        <Saludar userInfo={user} saludarFn={saludarFn} /> */}
      </header>
    </div>
  );
}

export default App;
