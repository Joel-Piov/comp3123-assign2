import axios from "axios";
import React, { useState, useEffect } from "react";
import WCard from "./weather-card";
import { Button, Jumbotron, Container, Row, Col } from "react-bootstrap";

const Forecast = () => {
  let [responseObj, setResponseObj] = useState({});
  const [query, setQuery] = useState("Toronto, CA");
  const options = {
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/weather",
    params: {
      q: query,
      units: "metric",
      appid: "90470f259e355b2fc7ea8c8f40882c1d",
    },
  };

  useEffect(() => {
    getForecast();
  }, []);
  function getForecast() {
    axios
      .request(options)
      .then(function (response) {
        setResponseObj(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  return (
    <div>
      <Container>
        <input
          type="text"
          className="search-bar"
          placeholder="City, Country Code (Toronto, CA)"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <Button
          variant="dark"
          size="sm"
          className="float-right"
          onClick={getForecast}
        >
          Get Forecast
        </Button>

        <Jumbotron className="mt-2">
          <WCard responseObj={responseObj} />
        </Jumbotron>
      </Container>
    </div>
  );
};
export default Forecast;
