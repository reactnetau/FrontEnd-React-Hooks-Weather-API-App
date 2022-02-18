import React from 'react';
import WeatherCard from '../components/WeatherCard';
import { Row } from 'react-bootstrap';

function Weather({ weather }) {
  return (
    <div className="m-2 p-4">
      <Row xs={1} md={3} className="g-2">
        {weather.map((day, index) => (
          <WeatherCard key={index} day={day} />
        ))}
      </Row>
    </div>
  );
}

export default Weather;
