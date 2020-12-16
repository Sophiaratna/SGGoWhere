import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  console.log("HomePage is called");
  return (
    <div>
      <Jumbotron>
        <h1>Hello, there!</h1>
        <p>
          Welcome to SGGoWhere! Here is your one-stop app to explore Singapore
          hidden gems
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <h3>A lil bit about Singapore here</h3>
          </Col>
        </Row>
        <Row>
          <Col>
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
