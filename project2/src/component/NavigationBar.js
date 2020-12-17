import sgLogo from "./image/SGlogo.jpg";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Navbar.Brand>
        <NavLink
          to="/"
          style={{ textDecoration: "none" }}
          exact
          activeClassName="active-link"
        >
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
            <NavLink
              to="/attractions"
              style={{ textDecoration: "none" }}
              className="navlink"
              activeClassName="active-link"
            >
              Attractions
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              to="/accommodation"
              style={{ textDecoration: "none" }}
              className="navlink"
              activeClassName="active-link"
            >
              Accommodation
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              to="/bars_clubs"
              style={{ textDecoration: "none" }}
              className="navlink"
              activeClassName="active-link"
            >
              Bars and Clubs
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              to="/food_beverages"
              style={{ textDecoration: "none" }}
              className="navlink"
              activeClassName="active-link"
            >
              Food and Beverages
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              to="/tour"
              style={{ textDecoration: "none" }}
              className="navlink"
              activeClassName="active-link"
            >
              Tours
            </NavLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
