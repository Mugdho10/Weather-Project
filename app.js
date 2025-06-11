const express = require('express');
const https = require('https');

const app = express();
const port = 3000;

app.get('/', (req, res) => {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&unit=metric&appid=623b63aa1fa0d3176a488e50c17b51b8"
  
    https.get(url, (response) => {  
        console.log(response);    
    })
  
    res.send("App is running");
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});