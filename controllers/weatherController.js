const weatherService = require('../service/weatherService');

exports.getWeatherForCity = async (req, res) => {
  try {
    const city = req.params.city;
    const weatherData = await weatherService.getWeather(city);
    res.json(weatherData);
  } catch (error) {
    res.status(500).send('Failed to fetch weather data');
  }
};
