// import samplePhoto from "./image/attraction.jpg";
import loading from "./image/loading.gif";
import noImage from "./image/no-img-avail.png";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Interweave from "interweave";
import style from "./DisplayOptions.module.css";

const DisplayOptions = (props) => {
  console.log("Display options is called");
  const data = props.data.data.results;
  console.log("data at display options is: ", data);
  const dataLength = data.length;
  const [view, setView] = useState(0);
  const [prevCategory, setPrevCategory] = useState("");

  const checkCategory = () => {
    if (props.category !== prevCategory) {
      setView(10);
      setPrevCategory(props.category);
    }
  };

  const checkImage = (item) => {
    if (item.images === undefined) {
      return loading;
    } else if (item.images.length === 0) {
      return noImage;
    } else if (item.images[0].uuid === "") {
      return item.images[0].url;
    } else {
      return `https://tih.stb.gov.sg/bin/GetMediaByUuid?uuid=${item.images[0].uuid}&mediaType=image`;
    }
  };

  const loadmore = () => {
    setView(view + 10);
  };

  const path =
    props.keywordQuery === undefined
      ? `/${props.category}/NA`
      : `/${props.category}/${props.keywordQuery}`;

  const display = () => {
    checkCategory();
    const display = data.slice(0, view).map((item) => {
      return (
        <div className="col-md-4">
          <Card
            bg="light"
            text="dark"
            style={{ width: "28rem", height: "40rem" }}
            className="mb-5 ml-5 card-display"
          >
            {/* <Card.Img variant="top" src={samplePhoto} /> */}
            <Card.Img
              variant="top"
              src={checkImage(item)}
              style={{ width: "28rem", height: "20rem" }}
            />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <div className={style.cardText}>
                <Card.Text>
                  <Interweave content={item.body} />
                </Card.Text>
              </div>
              <div>
                <Button variant="primary" style={{ textDecoration: "none" }}>
                  <NavLink
                    to={`${path}/${item.uuid}`}
                    style={{ color: "white" }}
                  >
                    I want to know More!
                  </NavLink>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      );
    });
    return display;
  };

  // const errorDisplay = () => {
  //   return (
  //     <>
  //       <p>Record not found..</p>
  //       <button>
  //         <NavLink to={`/${props.category}`}>Go back</NavLink>
  //       </button>
  //     </>
  //   );
  // };

  return (
    <div>
      <div className="row">{display()}</div>
      <div className="row">
        {view < dataLength && (
          <Button onClick={loadmore} className="col-md-6 offset-md-3 mb-5">
            Load More
          </Button>
        )}
      </div>
    </div>
  );
};

export default DisplayOptions;
