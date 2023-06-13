import React, {useEffect, useState} from "react";
import axios from "axios";
import { IoMdSunny, IoIosPartlySunny, IoMdCloudy, IoIosThunderstorm } from "react-icons/io";
import { BsCloudRainFill, BsCloudSnowFill } from "react-icons/bs";
import { FaCloudSunRain, FaSmog } from "react-icons/fa";
import { RiSnowyFill } from "react-icons/ri";

const weatherIcon = {
    '01' : <IoMdSunny/>,
    '02' : <IoIosPartlySunny/>,
    '03' : <IoMdCloudy/>,
    '04' : <RiSnowyFill/>,
    '09' : <FaCloudSunRain/>,
    '10' : <BsCloudRainFill/>,
    '11' : <IoIosThunderstorm/>,
    '13' : <BsCloudSnowFill/>,
    '50' : <FaSmog/>
};


// 날씨 보여줄 지역들
const locations = ['seoul', 'busan']; 

const WeatherInfo = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseArray = await Promise.all(locations.map(location =>
                axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=41209c337a94d9dbc18526bf71a3f002`)
            ));
            const data = responseArray.map(response => response.data);
            setWeatherData(data);
            } catch (error) {
                console.log(error);
            }
        };
            fetchData();
    }, []);

  // 3초마다 지역을 바꿔가며 표시

    useEffect(() => {
        const timer = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % locations.length);
        }, 3000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            {weatherData.length > 0 && (
            <div>
                {weatherIcon[weatherData[currentIndex].weather[0].icon.substr(0, 2)]}
                <div>{weatherData[currentIndex].weather[0].main}</div>
                <div>{Math.floor(weatherData[currentIndex].main.temp - 273.15)}º</div>
                <div>{locations[currentIndex]}</div>
            </div>
            )}
        </div>
    );
};

export default WeatherInfo;
