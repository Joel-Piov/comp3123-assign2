import React from "react";
import { Alert, Row, Col } from "react-bootstrap";

const conditions = (props) => {
  return (
    <div className="justify-content-md-center">
      {props.responseObj.cod === 200 ? (
        <div>
          <h1 class="px-4">
            {props.responseObj.name}, {props.responseObj.sys.country}
          </h1>
          <h2>{Math.round(props.responseObj.main.temp)}°C</h2>
          <img
            src={`http://openweathermap.org/img/wn/${props.responseObj.weather[0].icon}@4x.png`}
          />
           <h4 class="text-capitalize pb-3">{props.responseObj.weather[0].description}</h4>
          <Row className="border-top pt-3">
            <Col>
              <p>
              <b>Low</b>
                <br />
                {Math.round(props.responseObj.main.temp_min)}°C
              </p>
            </Col>
            <Col>
              <p>
                <b>High</b>
                <br />
                {Math.round(props.responseObj.main.temp_max)}°C
              </p>
            </Col>
          </Row>
          <Row className="border-top pt-3">
            <Col>
              <p>
              <b>Wind Speed</b>
                <br />
                {props.responseObj.main.humidity}mph
              </p>
            </Col>
            <Col>
              <p>
                <b>Humidity</b>
                <br />
                {props.responseObj.main.humidity}%
              </p>
            </Col>
          </Row>
        </div>
      ) : null}
    </div>
  );
};
export default conditions;
