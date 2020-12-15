import samplePhoto from "./image/attraction.jpg";
import RecommendFnB from "./RecommendFnB";
import ShowMaps from "./ShowMaps";
import ShowWeather from "./ShowWeather";
import BusinessHour from "./BusinessHour";
import Interweave from "interweave";
import Moment from "react-moment";
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

  const checkReview = () => {
    const showRating = (review) => {
      let starRating = [];
      const rating = Math.floor(parseInt(review.rating));
      for (let i = 0; i < rating; i++) {
        starRating.push(<span>&#9733;</span>);
      }
      return starRating;
    };

    const displayReviews = (review) => {
      return (
        <Row>
          <Col md={2}>
            <img src={review.profilephoto} />
            <p>{review.profilephoto}</p>
            <p>{review.authorName}</p>
          </Col>
          <Col md={10}>
            <p>{showRating(review)}</p>
            <p>
              <Moment>{review.time}</Moment>
            </p>
            <p>{review.text}</p>
          </Col>
        </Row>
      );
    };
    if (dataFetched.reviews !== undefined) {
      return (
        <>
          <h5>Reviews ({dataFetched.reviews.length}) </h5>
          {dataFetched.reviews.length > 0 ? (
            dataFetched.reviews.map((review) => displayReviews(review))
          ) : (
            <p>No review available yet</p>
          )}
        </>
      );
    }
  };

  const contactDetails = () => {
    const showWebsite = () => {
      if (dataFetched.officialWebsite !== "") {
        return (
          <>
            <p>
              Pls visit the{" "}
              <a
                href={`https://${dataFetched.officialWebsite}`}
                target="_blank"
              >
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
  const showDetailPage = () => {
    if (dataFetched.name === undefined) {
      return <p>Page is loading</p>;
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
                    {tag}
                  </Badge>
                ))}
              <Interweave content={dataFetched.body} />
              <img src={samplePhoto} width="500" height="300" />
              {/* <img
                src={`https://tih.stb.gov.sg/bin/GetMediaByUuid?uuid=${dataFetched.images[0].uuid}&mediaType=image`}
                width="500"
                height="300"
              /> */}
              <hr />
              {dataFetched.nearestMrtStation !== "" && (
                <p>Nearest MRT station: {dataFetched.nearestMrtStation}</p>
              )}
              {checkReview()}
              <ShowMaps
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

  return showDetailPage();
};

export default DetailPage;
