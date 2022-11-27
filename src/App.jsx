import axios from 'axios'
import { useEffect, useState } from 'react'
import WeatherCard from './components/WeatherCard'

import './App.css'
import Loading from './components/Loading'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()

  const success = pos => {
    setCoords({
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    })
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if (coords) {
      const apiKey = `53289a293dd2535b8918dbb007a475ce`
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
      axios.get(URL)
        .then(res => {
          setWeather(res.data)
          const celsius = (res.data.main.temp - 273.15).toFixed(1)
          const farenheit = (celsius * (9 / 5) + 32).toFixed(1)
          setTemp({ celsius, farenheit })
        })
        .catch(err => console.error(err))
    }
  }, [coords])

  return (
    <div className="App">
      {
        weather ?
          <WeatherCard
            weather={weather}
            temp={temp}
          />
          :
          <Loading  />
      }
    </div>
  )
}

export default App
