import samplePhoto from "./image/attraction.jpg";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Interweave from "interweave";
import style from "./DisplayOptions.module.css";

const DisplayOptions = (props) => {
  console.log("Display options is called");
  const data = props.data.data.results;
  const dataLength = data.length;
  const [view, setView] = useState(0);
  const [prevCategory, setPrevCategory] = useState("");

  const checkCategory = () => {
    if (props.category !== prevCategory) {
      setView(10);
      setPrevCategory(props.category);
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
          <Card bg="light" text="dark" style={{ width: "28rem" }}>
            <Card.Img variant="top" src={samplePhoto} />
            {/* <Card.Img
              variant="top"
              src={`https://tih.stb.gov.sg/bin/GetMediaByUuid?uuid=${item.images[0].uuid}&mediaType=image`}
            /> */}
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <div className={style.cardText}>
                <Card.Text>
                  <Interweave content={item.body} />
                </Card.Text>
              </div>
              <div>
                <Button variant="primary">
                  <NavLink to={`${path}/${item.uuid}`}>Explore More</NavLink>
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
      <div>
        {view < dataLength && <button onClick={loadmore}>Load More</button>}
      </div>
    </div>
  );
};

export default DisplayOptions;
