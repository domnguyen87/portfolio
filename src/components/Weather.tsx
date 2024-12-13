import React, { useState, useEffect } from 'react';
import './Weather.css';

interface WeatherData {
    main: {
        temp: number;
    };
    weather: {
        description: string;
        icon: string;
    }[];
    name: string;
}

const Weather: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWeather = async (latitude: number, longitude: number) => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch weather data");
                }

                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };


        const getLocation = () => {

            if (navigator.geolocation) {

                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;

                        fetchWeather(latitude, longitude);  // Assuming fetchWeather is already defined and working
                    },
                    (error) => {
                        console.error("Geolocation error:", error.message);
                        setError("Geolocation is not supported by this browser or permission denied.");
                        setLoading(false);
                    }
                );
            } else {
                setError("Geolocation is not supported by this browser.");
                setLoading(false);
            }
        };



        getLocation();
    }, []);

    if (loading) return <div>Loading weather...</div>;
    if (error) return <div>What's the sky up to? Share your location to see!</div>;

    return (
        <div className="weather">
            {weatherData && (
                <div>
                    <p>
                        It's currently {Math.round(weatherData.main.temp)}°F in <b>{weatherData.name}</b>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Weather;
