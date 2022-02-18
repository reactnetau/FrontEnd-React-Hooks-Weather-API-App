import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { getImage } from '../services/apiService';

const WeatherCard = ({ day }) => {
  return (
    <div>
      <Col>
        <Card bg="primary" border="primary">
          <Card.Body>
            <Card.Title>{day.date}</Card.Title>
            <Card.Text>Sunrise: {day.astro.sunrise}</Card.Text>
            <Card.Text>Sunset: {day.astro.sunset}</Card.Text>
            <Card.Text>Average Temp: {day.day.avgtemp_c} Celcius</Card.Text>
            <Card.Text>Average Visibility: {day.day.avgvis_km}km</Card.Text>
            <Card.Img variant="top" src={getImage(day.day.condition.icon)} />
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default WeatherCard;
