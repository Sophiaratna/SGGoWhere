import samplePhoto from "./image/attraction.jpg";
import RecommendFnB from "./RecommendFnB";
import ShowMaps from "./ShowMaps";
import ShowWeather from "./ShowWeather";
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

  const businessHour = () => {
    if (category !== "accommodation" && dataFetched.businessHour.length > 0) {
      return (
        <>
          <h5>Operating hours: </h5>
          {dataFetched.businessHour.map((day) => {
            return (
              <>
                <p>
                  <strong>{day.day.toUpperCase()}</strong>
                </p>
                <p>Open: {day.openTime}</p>
                <p>Close: {day.closeTime}</p>
              </>
            );
          })}
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
            <Col md={10}>
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
              <ShowWeather
                latitude={dataFetched.location.latitude}
                longitude={dataFetched.location.longitude}
              />
            </Col>
            <Col md={2}>
              {businessHour()}
              {category !== "food_beverages" ? (
                <h6>Recommended F&B within 1km:</h6>
              ) : (
                <h6>Other recommeded F&B around the area</h6>
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
