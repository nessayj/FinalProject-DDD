import React, {useEffect, useState} from "react";
import axios from "axios";
import { IoMdSunny, IoIosPartlySunny, IoMdCloudy, IoIosThunderstorm } from "react-icons/io";
import { BsCloudRainFill, BsCloudSnowFill } from "react-icons/bs";
import { FaCloudSunRain, FaSmog } from "react-icons/fa";
import { RiSnowyFill } from "react-icons/ri";
import styled from "styled-components";

const WeatherStyle = styled.div`
    
    .weather-container {
        margin: 1.5rem;
        border-radius: 2rem;
        background-color: #F4F8FF;
        display: flex;
        flex-direction: column;
        text-align: center;
        .icons{
            margin-bottom: 0;
            font-size: 2rem;
        }
        .weather-degree-location{
            display: flex;
            flex-direction: row;
            .weather {
                margin-right: 1rem;
            }
            .degree {
                font-weight: bold;
                margin-right: 1rem;
            }
            .location {
                font-weight: bold;
            }
        }

    }

`;

const weatherIcon = {
    '01' : <IoMdSunny/>,
    '02' : <IoIosPartlySunny/>,
    '03' : <IoMdCloudy/>,
    '04' : <IoMdCloudy/>,
    '09' : <FaCloudSunRain/>,
    '10' : <BsCloudRainFill/>,
    '11' : <IoIosThunderstorm/>,
    '13' : <BsCloudSnowFill/>,
    '50' : <FaSmog/>
};


// 날씨 보여줄 지역들
const locations = ['Seoul', 'Gyeonggi-do', 'Busan', 'Gwangju', 'Daegu', 'Jeju'];
// 한글로 출력 
const locationsKorean = ['서울', '경기도', '부산', '광주', '대구', '제주'];

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
        <WeatherStyle>
            {weatherData.length > 0 && (
            <div className="weather-container">
                <div className="icons">{weatherIcon[weatherData[currentIndex].weather[0].icon.substr(0, 2)]}</div>
                <div className="weather-degree-location">
                    {/* <div className="weather">{weatherData[currentIndex].weather[0].main}</div> */}
                    <div className="degree">{Math.floor(weatherData[currentIndex].main.temp - 273.15)}º</div>
                    <div className="location">{locationsKorean[currentIndex]}</div>
                </div>
            </div>
            )}
        </WeatherStyle>
    );
};

export default WeatherInfo;
