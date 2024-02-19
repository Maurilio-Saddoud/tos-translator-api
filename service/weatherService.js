const axios = require('axios');

const getWeather = async (city) => {
  try {
    const apiKey = '1c9b222b10c24f5cb40235020231812'; 
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

module.exports = {
  getWeather
};
