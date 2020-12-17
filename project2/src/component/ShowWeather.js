import { useState, useEffect } from "react";
import axios from "axios";

const ShowWeather = () => {
  const [weather, setWeather] = useState({});

  const dateFormat = () => {
    let d = new Date();
    let date = "" + d.getDate();
    let month = "" + (d.getMonth() + 1);
    let year = d.getFullYear();

    if (month.length < 2) {
      month = "0" + month;
    }
    if (date.length < 2) {
      date = "0" + date;
    }

    return [year, month, date].join("-");
  };

  const url = `https://api.data.gov.sg/v1/environment/24-hour-weather-forecast?date=${dateFormat()}`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setWeather(response.data.items[1].general);
    });
  }, [url]);

  const checkWeather = () => {
    const degree = (
      <span>
        <sup>o</sup>C
      </span>
    );
    if (weather.forecast === undefined) {
      return <p>Loading..</p>;
    } else {
      return (
        <>
          <p>Forecast: {weather.forecast}</p>
          <p>
            {`Temperature: ${weather.temperature.low}`} {degree} -{" "}
            {`${weather.temperature.high}`} {degree}
          </p>
        </>
      );
    }
  };
  return (
    <div>
      <hr />
      <h3>Heading down? Why not check the weather for today</h3>
      {checkWeather()}
      <p>
        For more information, please visit{" "}
        <a
          href="https://www.nea.gov.sg/weather"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
      </p>
    </div>
  );
};

export default ShowWeather;
