const express = require('express')
const app = express()
const port = 3000

app.use('/', express.static('public'));

app.get('/api/weather', (req, res) => {
    res.json({
        'city': data.name,
        'temp': Math.round(data.main.temp) + "°C",
        'humidity': data.main.humidity + "%",
        'wind': data.wind.speed + " Km/h"
  })
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})