import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Weather from './containers/Weather';

import { getResults } from './services/apiService';

function App() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    async function getSearch() {
      const result = await getResults('Melbourne');
      setWeather(result.data.forecast.forecastday);
    }

    getSearch();
  }, []);

  return (
    <Container className="App">
      <Weather weather={weather} />
    </Container>
  );
}

export default App;
