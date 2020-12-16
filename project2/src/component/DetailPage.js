// import samplePhoto from "./image/attraction.jpg";
import loading from "./image/loading.gif";
import noImage from "./image/no-img-avail.png";
import RecommendFnB from "./RecommendFnB";
import ShowAddress from "./ShowAddress";
import ShowReview from "./ShowReview";
import ShowWeather from "./ShowWeather";
import BusinessHour from "./BusinessHour";
import Interweave from "interweave";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const pair = {
  attractions: "attractions",
  accommodation: "accommodation",
  bars_clubs: "bars-clubs",
  food_beverages: "food-beverages",
  tour: "tour",
};

const DetailPage = () => {
  console.log("Detail Page is called");
  let { category, uuid } = useParams();
  const [dataFetched, setDataFetched] = useState({});

  const baseUrl = `https://tih-api.stb.gov.sg/content/v1/`;
  const apiKey = `apikey=GU90VyGGLI6njuy2Hago4nT1wEPKCGrY`;

  const url = `${baseUrl}${pair[category]}?uuid=${uuid}&${apiKey}`;

  useEffect(() => {
    console.log("Axios is fetching data with url: ", url);
    axios
      .get(url)
      .then((response) => {
        setDataFetched(response.data.data[0]);
        console.log(response.data);
      })
      .catch((reason) => {
        console.log("error", reason);
      });
  }, [url]);

  const contactDetails = () => {
    const showWebsite = () => {
      const website = dataFetched.officialWebsite;

      const checkOfficialWebsite = () => {
        if (website.includes("https")) {
          return website;
        } else {
          return `https://${website}`;
        }
      };

      if (website !== "") {
        return (
          <>
            <p>
              Pls visit the{" "}
              <a href={checkOfficialWebsite()} target="_blank" rel="noreferrer">
                website
              </a>{" "}
              for more information
            </p>
          </>
        );
      }
    };

    if (dataFetched.contact.primaryContactNo !== undefined) {
      return (
        <>
          <hr />
          <h5>Contact Details </h5>
          <p>
            {dataFetched.contact.primaryContactNo !== "" &&
              `Primary contact No.: ${dataFetched.contact.primaryContactNo}`}
          </p>
          <p>
            {dataFetched.officialEmail !== "" &&
              `Official Email Address: ${dataFetched.officialEmail}`}
          </p>
          {showWebsite()}
        </>
      );
    }
  };

  const checkImage = (data) => {
    if (data.images === undefined) {
      return loading;
    } else if (data.images.length === 0) {
      return noImage;
    } else if (data.images[0].uuid === "") {
      return data.images[0].url;
    } else {
      return `https://tih.stb.gov.sg/bin/GetMediaByUuid?uuid=${data.images[0].uuid}&mediaType=image`;
    }
  };

  const showDetailPage = () => {
    if (dataFetched.name === undefined) {
      return <img src={loading} alt="loading" />;
    } else {
      return (
        <Container>
          <Row>
            <Col md={9}>
              <h1>
                <Interweave content={dataFetched.name} />
              </h1>
              {dataFetched.tags.length > 0 &&
                dataFetched.tags.map((tag) => (
                  <Badge pill variant="info">
                    {`#${tag}`}
                  </Badge>
                ))}
              <br />
              <Interweave content={dataFetched.body} />
              {/* <img src={samplePhoto} width="500" height="300" /> */}
              <img
                src={checkImage(dataFetched)}
                width="500"
                height="300"
                alt="body"
              />
              <hr />
              {dataFetched.nearestMrtStation !== "" && (
                <p>Nearest MRT Station: {dataFetched.nearestMrtStation}</p>
              )}
              <ShowReview
                reviews={dataFetched.reviews}
                name={dataFetched.name}
              />
              <ShowAddress
                address={dataFetched.address}
                latitude={dataFetched.location.latitude}
                longitude={dataFetched.location.longitude}
              />
              <ShowWeather />
            </Col>
            <Col md={3}>
              <BusinessHour
                data={dataFetched.businessHour}
                category={category}
              />
              {contactDetails()}
              {category !== "food_beverages" ? (
                <h5>Recommended F&B within 1km:</h5>
              ) : (
                <h5>Other recommeded F&B around the area</h5>
              )}
              <RecommendFnB
                location={`${dataFetched.location.latitude}%2C${dataFetched.location.longitude}`}
                name={dataFetched.name}
              />
            </Col>
          </Row>
        </Container>
      );
    }
  };

  console.log("here is data passed to detail page: ", dataFetched);
  return showDetailPage();
};

export default DetailPage;
