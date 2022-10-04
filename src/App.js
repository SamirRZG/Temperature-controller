import React, {useState} from "react";

const App = () => {

  const [temperatureValue, setTemperatureValue] = useState(15);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    if(temperatureValue === 30) return;
    const newTemperature = temperatureValue +1;

    if(newTemperature >= 22){
      setTemperatureColor("hot");
    }

    setTemperatureValue(newTemperature);

  };

  const decreasetemperature = () => {
    if(temperatureValue === 15) return;
    const newTemperature = temperatureValue -1;

    if(newTemperature < 21){
      setTemperatureColor("cold")
    }
    setTemperatureValue(newTemperature);

  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
      </div>
      <div className="button-container">
        <button onClick={() =>increaseTemperature()}>+</button>
        <button onClick={() => decreasetemperature()}>-</button>
      </div>
    </div>
  
  )
}

export default App;




