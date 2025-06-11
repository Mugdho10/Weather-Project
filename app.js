const express = require('express');
const https = require('https');

const app = express();
const port = 3000;

app.get('/', (req, res) => {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=623b63aa1fa0d3176a488e50c17b51b8"
  
    https.get(url, (response) => {  
        console.log(response); 

        response.on('data', (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.send(`<h1>The temperature in London is ${temp}°C with ${weatherDescription}.</h1><img src="${imageURL}">`);
        });
    });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});