import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  console.log("HomePage is called");
  return (
    <div className="container-fluid">
      <Jumbotron>
        <h1>Hello, there!</h1>
        <p>
          Welcome to SGGoWhere! Here is your one-stop app to explore Singapore
          hidden gems
        </p>
      </Jumbotron>
      <Container>
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
      </Container>
    </div>
  );
};

export default HomePage;
