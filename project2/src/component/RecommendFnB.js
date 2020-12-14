import SampleFnB from "./SampleFnB";
import { useEffect, useState } from "react";
import axios from "axios";
import { Popover, Button, OverlayTrigger } from "react-bootstrap";

const RecommendFnB = (props) => {
  console.log("recommend fnb is called");
  const [dataFetched, setDataFetched] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const location = props.location;
  const baseUrl = `https://tih-api.stb.gov.sg/map/v1/search/multidataset?`;
  const apiKey = `apikey=GU90VyGGLI6njuy2Hago4nT1wEPKCGrY`;
  const url = `${baseUrl}location=${location}&radius=1000&dataset=food_beverages&${apiKey}`;

  useEffect(() => {
    console.log("Axios is fetching data with url: ", url);
    axios
      .get(url)
      .then((response) => {
        setDataFetched(response.data.data);
        console.log("response", response.data.data);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.status.errorDetail);
        console.log("error:", error.response.data.status.errorDetail);
      });
  }, [url]);

  const showRecommendation = dataFetched.slice(0, 5).map((recommendation) => {
    console.log("show recommendation is called. Name: ", recommendation.name);
    const address = recommendation.address;
    const popover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Address</Popover.Title>
        <Popover.Content>{`${address.block} ${address.streetName} ${
          address.floorNumber !== ""
            ? `#${address.floorNumber}-${address.unitNumber}`
            : ""
        } Singapore ${address.postalCode}`}</Popover.Content>
      </Popover>
    );
    const setOverlay = (recommendation) => {
      return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button variant="light">{recommendation.name}</Button>
        </OverlayTrigger>
      );
    };
    return <p>{setOverlay(recommendation)}</p>;
  });

  return (
    <div>
      {errorMessage !== "" ? <p>{errorMessage}</p> : showRecommendation}
    </div>
  );
};

export default RecommendFnB;
