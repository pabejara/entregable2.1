import React, { useState } from 'react'


const WeatherCard = ({ weather, temp }) => {

    const [isCelsius, setCelsius] = useState(true)

    const handleClick = () => setCelsius(!isCelsius)

    return (
        <article className='card' >
            <header className='card__header' >
                <h1 className='card__title' >Wheather App</h1>
                <h2 className='card__subtitle' >{weather?.name}, {weather?.sys.country}</h2>
            </header>
            <section className='card__icon-container' >
                <img className='card__icon' src={weather && `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />

            </section>

            <section className='card__info'  >
                <h3 className='card__description' >"{weather?.weather[0].description}"</h3>
                <ul className='list' >
                    <li className='card__item'> <span>Wind Speed</span> {weather?.wind.speed} m/s </li>
                    <li className='card__item'> <span> clouds</span> {weather?.clouds.all} %</li>
                    <li className='card__item'> <span>Pressure </span> {weather?.main.pressure} hPa</li>
                </ul>
            </section>
            <h3 className="card__temp">
                    {
                        isCelsius ?
                            `${temp?.celsius} ºC`
                            :
                            `${temp?.farenheit} ºF`
                    }
                </h3>
            <footer className='card__footer' >
                <button onClick={handleClick} className="card__btn">Change to {isCelsius ? 'ºF' : 'ºC'}</button>
            </footer>
        </article>
    )
}

export default WeatherCard