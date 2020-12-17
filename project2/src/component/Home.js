import { Jumbotron, Container, Row, Col, Carousel } from "react-bootstrap";
import uss from "./image/attraction.jpg";
import gbtb from "./image/gbtb.jpg";
import mbs from "./image/mbs.jpg";

const HomePage = () => {
  console.log("HomePage is called");
  return (
    <div className="container-fluid">
      <Jumbotron>
        <h1>Hello, there!</h1>
        <h4>
          Welcome to SGGoWhere! Here is your one-stop app to explore Singapore
          hidden gems
        </h4>
      </Jumbotron>
      <h4 style={{ textAlign: "center" }}>A lil bit about Singapore here</h4>
      <div style={{ textAlign: "center" }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/P_q3BdrFsLI"
          frameborder="50"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="singapore"
        ></iframe>
      </div>
      <Container>
        <Row>
          <Col className="col-md-4 offset-md-4"></Col>
        </Row>
        <h4 className="mt-5" style={{ textAlign: "center" }}>
          Some Highlight of Singapore
        </h4>
        <Carousel className="mb-5">
          <Carousel.Item>
            <img className="d-block w-100" src={uss} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={mbs} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={gbtb} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default HomePage;

{
  /* <Container>
        <Row>
          <Col className="col-md-4 offset-md-4">
            <h4>A lil bit about Singapore here</h4>
          </Col>
        </Row>
        <Row>
          <Col className="col-md-4 offset-md-4">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/P_q3BdrFsLI"
              frameborder="50"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="singapore"
            ></iframe>
          </Col>
        </Row>
      </Container> */
}
