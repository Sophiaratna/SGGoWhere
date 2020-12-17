import loading from "./image/loading.gif";
import { Row, Col } from "react-bootstrap";
import Moment from "react-moment";

const ShowReview = (props) => {
  console.log("show review is called,", props.review);
  const reviews = props.reviews;
  const name = props.name;

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
          <img src={review.profilePhoto} width="60px" alt="profilePhoto" />
          <p>{review.authorName}</p>
        </Col>
        <Col md={10}>
          <p>{showRating(review)}</p>
          <p>
            <Moment fromNow>{review.time}</Moment>
          </p>
          <p>{review.text}</p>
        </Col>
      </Row>
    );
  };

  if (reviews !== undefined) {
    return (
      <>
        <hr />
        <h5>Reviews ({reviews.length > 0 ? reviews.length : "0"}) </h5>
        {reviews.length > 0 ? (
          reviews.map((review) => displayReviews(review))
        ) : (
          <p>No review available yet</p>
        )}
      </>
    );
  } else if (reviews === undefined && name !== "") {
    return (
      <>
        <hr />
        <h5>Reviews (0)</h5>
        <p>No review available</p>
      </>
    );
  } else {
    return <img src={loading} alt="loading" />;
  }
};

export default ShowReview;
