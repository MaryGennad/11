const express = require('express')
const app = express()
const port = 3000
const API_KEY = 'a2906b093bfe0cb70f7c5e3e7b3baeb7'
const fetch = require('node-fetch')

app.use('/', express.static('public'));

app.get('/api/weather', async (req, res) => {

    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.currCity}&appid=${API_KEY}&units=${req.query.units}`)

    let dataJson = await data.json()
    res.send(dataJson)
    // res.json({
    //     'city': data.name,
    //     'temp': Math.round(data.main.temp) + "°C",
    //     'humidity': data.main.humidity + "%",
    //     'wind': data.wind.speed + " Km/h"
    // })
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})