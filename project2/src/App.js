import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./component/Home";
import NavigationBar from "./component/NavigationBar";
import CategoryOptions from "./component/CategoryOptions";
import DetailPage from "./component/DetailPage";
import ScrollToTop from "./component/ScrollToTop";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <NavigationBar />
        <ScrollToTop>
          <Route path="/" exact component={HomePage} />
          <Route path="/:category" exact component={CategoryOptions} />
          <Route
            path="/:category/:keywordQuery"
            exact
            component={CategoryOptions}
          />
          <Route
            path="/:category/:keywordQuery/:uuid"
            exact
            component={DetailPage}
          />
        </ScrollToTop>
      </Router>
    </div>
  );
};

export default App;
