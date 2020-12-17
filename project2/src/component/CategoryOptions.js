import loading from "./image/loading.gif";
import { Jumbotron, Button } from "react-bootstrap";
import { useParams, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import DisplayOptions from "./DisplayOptions.js";
import axios from "axios";

const pair = {
  attractions: "attractions",
  accommodation: "accommodation",
  bars_clubs: "bars and clubs",
  food_beverages: "food and beverages",
  tour: "Tours",
};

const CategoryOptions = (props) => {
  console.log("Category options is called");
  const [keyword, setKeyword] = useState("");
  const [dataFetched, setDataFetched] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [prevKeyword, setPrevKeyword] = useState(undefined);

  let { category, keywordQuery } = useParams();
  const heading = pair[category];

  //handle change on the keyword input
  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  //url to fetch data
  const baseUrl = `https://tih-api.stb.gov.sg/content/v1/search/all?`;
  const apiKey = `apikey=GU90VyGGLI6njuy2Hago4nT1wEPKCGrY`;
  let url = ``;
  if (keywordQuery === undefined) {
    url = `${baseUrl}dataset=${category}&${apiKey}`;
  } else {
    url = `${baseUrl}dataset=${category}&keyword=${keywordQuery}&${apiKey}`;
  }

  useEffect(() => {
    console.log("Axios is fetching data with url: ", url);
    axios
      .get(url)
      .then((response) => {
        setDataFetched(response.data);
        console.log("response", response.data);
      })
      .catch((error) => {
        console.log("error:", error.response.data.status.errorDetail);
        setErrorMessage(error.response.data.status.errorDetail);
      });
  }, [url]);

  const checkKeyword = () => {
    console.log("keywordQuery is ", keywordQuery);
    console.log("prev keyword: ", prevKeyword);
    console.log("error: ", errorMessage);
    if (keywordQuery !== prevKeyword) {
      setErrorMessage("");
      setPrevKeyword(keywordQuery);
    }
  };

  return (
    <div className="container-fluid">
      <Jumbotron>
        <h1>{heading.toUpperCase()}</h1>
        <p>Some background image here</p>
      </Jumbotron>
      <div className="row">
        <h5 className="col-md-4 offset-md-4">
          Not what you are looking for? Try searching here:
        </h5>
        <div className="col-md-4 offset-md-4">
          <input
            type="text"
            placeholder="Search by keyword.."
            name="keyword"
            value={keyword}
            onChange={(event) => handleChange(event)}
            className="mb-4"
            size="50"
          ></input>
          <Button
            className="ml-2"
            variant="primary"
            disabled={keyword === "" ? true : false}
          >
            <NavLink
              to={`/${category}/${keyword}`}
              style={{ color: "white", textDecoration: "none" }}
              onClick={() => {
                setKeyword("");
              }}
            >
              Search
            </NavLink>
          </Button>
        </div>
      </div>
      {checkKeyword()}
      {errorMessage !== "" ? (
        <p>
          <strong>{"Record not found :( Search again"}</strong>
        </p>
      ) : dataFetched.data === undefined ? (
        <img src={loading} alt="loading" />
      ) : (
        <DisplayOptions
          data={dataFetched}
          category={category}
          keywordQuery={keywordQuery}
        />
      )}
    </div>
  );
};

export default CategoryOptions;
