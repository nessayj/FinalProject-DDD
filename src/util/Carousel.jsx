import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 250px;
    position: relative;
    background-image: url(${props => props.imgUrl});
    background-repeat: no-repeat;
    background-size:cover;
    opacity: 0.4;
    .name {
        color : black;
        font-weight: bolder;
        font-size: 2rem;
        opacity: 1;
    }
    .date {
        font-size: 1rem;
        opacity: 1;
    }
    .lotation{
        font-size: 1rem;
        opacity: 1;


    }


`;
const PrevArrow = styled.div`
  color: #050e3d;
  font-size: 30px;
  position: absolute;
  top: 50%;
  left: -40px;
  transform: translateY(-50%);
  cursor: pointer;

`;
const NextArrow = styled.div`
color: #050e3d;
font-size: 30px;
position: absolute;
top: 50%;
right: -40px;
transform: translateY(-50%);
cursor: pointer;

`;


const Carousel = ({data}) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow>{'◀'}</PrevArrow>,
        nextArrow: <NextArrow>{'▶'}</NextArrow>
      };
      return (
        <div>
          <Slider {...settings}>
            {data.map((e) => (
                <Container key={e.index} imgUrl ={e.imgUrl}>
                <div className="name">{e.name}</div>
                <div className="date">{e.startDate} ~ {e.endDate}</div>
                <div className="lotation">{e.lotation}</div>
                </Container>
            ))}
          </Slider>
        </div>
      );
  
  
};

export default Carousel;
