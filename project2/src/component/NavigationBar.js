import sgLogo from "./image/SGlogo.jpg";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  console.log("Navigation bar is called");
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <NavLink to="/">
          <img
            alt=""
            src={sgLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <span> SGGOWHERE</span>
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <NavLink to="/attractions">Attractions</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/accommodation">Accommodation</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/bars_clubs">Bars and Clubs</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/food_beverages">Food and Beverages</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/tour">Tours</NavLink>
          </Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
