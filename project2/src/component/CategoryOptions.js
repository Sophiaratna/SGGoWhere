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
    axios
      .get(url)
      .then((response) => {
        setDataFetched(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.status.errorDetail);
      });
  }, [url]);

  const checkKeyword = () => {
    if (keywordQuery !== prevKeyword) {
      setErrorMessage("");
      setPrevKeyword(keywordQuery);
    }
  };

  return (
    <div className="container-fluid">
      <Jumbotron>
        <h1 style={{ textDecoration: "underline" }}>{heading.toUpperCase()}</h1>
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
              className="button-navlink"
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
