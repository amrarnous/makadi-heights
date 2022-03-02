import React, { useState, useEffect } from "react";
import Button from "../../components/Base/Button/Button";

function Navbar() {
  const [error, setError] = useState(null);
  const [weatherIsLoaded, setWeatherIsLoaded] = useState(false);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    getWeather();
  }, []);
  const getWeather = async () => {
    await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=26.96546281915211&lon=33.883077697384714&appid=47dabdb70f29b8d91fab924df38b3def"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setWeather(result);
          setWeatherIsLoaded(true);
          console.log(result);
        },
        (error) => {
          setError(error);
          setWeatherIsLoaded(true);
          console.log(error);
        }
      );
  };
  return (
    <nav className="navbar fixed top-16 left-0 w-full">
      <div className="container max-w-[85.69%] w-full mx-auto flex justify-between items-center">
        <div className="navbar-logo">
          <img
            src="imgs/logo.svg"
            className="max-w-[100px] lg:max-w-full"
            alt=""
          />
        </div>
        <ul className="navbar-list flex items-center">
          <li className="navbar-list-item mr-4 lg:mr-8 flex items-center">
            {weatherIsLoaded ? (
              <>
                <img
                  src={`http://openweathermap.org/img/w/${weather?.weather[0]?.icon}.png`}
                  className="w-8 h-8 lg:w-auto lg:h-auto mr-2"
                  alt=""
                />
                <span className="text-sm text-white font-di-medium">
                  {weather?.main.temp} F°
                </span>
              </>
            ) : (
              ""
            )}
          </li>
          <li className="navbar-list-item mr-4 lg:mr-8">
            <a href="tel:+xxxxxxxxxxxxx">
              <img
                src="imgs/call.svg"
                className="w-8 h-8 lg:w-auto lg:h-auto"
                alt=""
              />
            </a>
          </li>
          <li className="navbar-list-item mr-10 hidden lg:block">
            <Button text="Book Now" />
          </li>
          <li className="navbar-list-item flex items-center cursor-pointer">
            <span className="mr-2 lg:mr-5 text-white font-di-medium text-sm lg:text-lg hidden md:block">
              MENU
            </span>
            <img
              src="imgs/burger-menu.svg"
              className="w-8 h-8 lg:w-auto lg:h-auto"
              alt=""
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
