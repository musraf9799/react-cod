import { useState } from "react";
import clouds from "./images/clouds.png";
import Rain from "./images/rain.jpg";
import Clear from "./images/clear.png";
import Mist from "./images/mist.jpg";
const Myapp = () => {

  const [search, setsearch] = useState("");
  const [data, setdata] = useState(null);
   const [error, seterror] = useState("");

  const API_KEY = "6d83156e4e40ca97d0c6924b832fe00c";

  const handleInput = (event) => {
    setsearch(event.target.value);
  };

  const MyFun = async () => {

    if (search === "") {
      alert("Enter city name");
      
    }
    setsearch("")

    const get = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`
    );

    const jsonData = await get.json();

    console.log(jsonData);

    if (jsonData.cod === "404") {
      seterror("City not found");
      setdata(null);
    } else {
      setdata(jsonData);
      seterror("");
    }
  };

  return (
    <div className="container">

      <div className="inputs">
        <input
          placeholder="Enter city"
          value={search}
          onChange={handleInput}
        />
        <button onClick={MyFun}>Search</button>
      </div>

      {error && <h3>{error}</h3>}

      {data && data.weather && (
        <div className="weather">

          <h2 className="cityName">{data.name}</h2>

            
           <img src={data.weather[0].main == "Clouds" ? clouds : ""} /> 
         <img src={data.weather[0].main == "Rain" ? Rain : ""} />
            <img src={data.weather[0].main == "Clear" ? Clear: ""} />   
         <img src={data.weather[0].main == "Mist" ? Mist : ""} /> 

        

          <h2 className="temprature">{Math.trunc(data.main.temp)}°C</h2>

          <h2 className="Climate">{data.weather[0].description}</h2>

        </div>
      )}

    </div>
  );
};

export default Myapp;