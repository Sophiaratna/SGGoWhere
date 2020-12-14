import { useState, useEffect } from "react";
import axios from "axios";

const ShowWeather = (props) => {
  const [general, setGeneral] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const formatDate = () => {
    let d = new Date(),
      day = "" + d.getDate(),
      month = "" + (d.getMonth() + 1),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    console.log(day, month, year);

    return [year, month, day].join("-");
  };

  const url = `https://api.data.gov.sg/v1/environment/24-hour-weather-forecast?date=${formatDate()}`;

  useEffect(() => {
    console.log("Axios is fetching data with url: ", url);
    axios
      .get(url)
      .then((response) => {
        setGeneral(response.data.items[1].general);
        console.log("response", response.data.items);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.status.errorDetail);
        console.log("error:", error.response.data.status.errorDetail);
      });
  }, [url]);
  console.log(general);
  return (
    <div>
      <hr />
      <h3>Heading down? Why not check the weather today</h3>
      <p>{general.forecast}</p>
      <p>{`Temperature: ${general.temperature.low}-${general.temperature.high}`}</p>
    </div>
  );
};

export default ShowWeather;
