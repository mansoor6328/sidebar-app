import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Banner from "./components/Banner";
import Row from "./components/Row";
import requests from "./requests";

function App() {
  return (
    <Router>
      <div className="App">
        <Banner />
        <Sidebar />
        <Row
          title="EROS NOW"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
      </div>
    </Router>
  );
}

export default App;
