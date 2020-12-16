import { useEffect, useState } from "react";
import { Popover, Button, OverlayTrigger } from "react-bootstrap";
import axios from "axios";

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

  const showRecommendation = () => {
    const isSameItem = (item) => item.name === props.name;
    const index = dataFetched.findIndex(isSameItem);
    if (index >= 0) {
      dataFetched.splice(index, 1);
    }

    const showRecommendation = dataFetched.slice(0, 5).map((recommendation) => {
      const address = recommendation.address;
      let floorNumber = address.floorNumber;
      let unitNumber = address.unitNumber;
      if (floorNumber.length === 1) {
        floorNumber = "0" + floorNumber;
      }
      if (unitNumber.length === 1) {
        unitNumber = "0" + unitNumber;
      }
      const fullAddress = `${address.block} ${address.streetName} ${
        address.floorNumber !== "" ? `#${floorNumber}-${unitNumber}` : ""
      } Singapore ${address.postalCode}`;

      const mapLink = `https://www.google.com.sg/maps/?q=${fullAddress}`;

      const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Address</Popover.Title>
          <Popover.Content>
            <a href={mapLink} target="_blank" rel="noreferrer">
              {fullAddress}
            </a>
          </Popover.Content>
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

    return showRecommendation;
  };

  return (
    <div>
      {errorMessage !== "" ? <p>No Info Available</p> : showRecommendation()}
    </div>
  );
};

export default RecommendFnB;
