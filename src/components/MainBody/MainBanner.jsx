import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io";

const Wrapper = styled.div`
  margin: 22px 0px;
  display: flex;
  overflow-x: hidden;
  align-items: center;
`;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 1);
  border-radius: 7px;
  display: flex;
  align-items: center;
  margin: 0 12.5px;
  cursor: pointer;
  position: relative;
`;

const Row = styled.div`
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  transition: all 0.5s ease-in-out;
`;

const Img = styled.img`
  width: 20rem;
  height: 25rem;
  border-radius: 7px;
  margin: 0;
  margin: 0 12.5px;
  position: relative;
  cursor: pointer;
  transition: all 0.5s linear;
`;
const PrivewImg = styled.img`
  width: 20rem;
  height: 25rem;
  transition: all 1s linear;
  border-radius: 7px;
`;

const Button = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  position: absolute;
  justify-content: center;
  border: none;
  font-size: 12px;
  height: 50px;
  border-radius: 60px;
  padding: 25px 10px;
  opacity: 0.5;
  z-index: 2;
  i {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const LeftButton = styled(Button)`
  transition: all 0.5s ease-in-out;
`;

const RightButton = styled(Button)`
  transition: all 0.5s ease-in-out;
`;

const ImgWrapper = styled.div`
  position: relative;
`;
const ImgDes = styled.div`
  position: absolute;
  z-index: 5;
  width: 330px;
  height: 150px;
  border-radius: 5px;
  left: 30px;
  bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 27px 0px 20px 0px;
`;

const MiniWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  transition: all 0.1s ease-in-out;
`;

const BannerImg = [
    "https://firebasestorage.googleapis.com/v0/b/final-ddd.appspot.com/o/%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B5%E1%84%92%E1%85%AC1.jpeg?alt=media&token=f4fa3f59-ef5a-406a-9dc7-6f4a0f3c0760&_gl=1*ynqlgj*_ga*MzE3NjcyODA1LjE2ODQyMDc5Njc.*_ga_CW55HF8NVT*MTY4NjQ5NzU1OS41LjEuMTY4NjQ5ODA1Ny4wLjAuMA..",
    "https://firebasestorage.googleapis.com/v0/b/final-ddd.appspot.com/o/%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B5%E1%84%92%E1%85%AC2.jpeg?alt=media&token=040f2f77-e447-42e9-8d5c-d9f8b8ad785a&_gl=1*vqi6u2*_ga*MzE3NjcyODA1LjE2ODQyMDc5Njc.*_ga_CW55HF8NVT*MTY4NjQ5NzU1OS41LjEuMTY4NjQ5ODA4My4wLjAuMA..",
    "https://firebasestorage.googleapis.com/v0/b/final-ddd.appspot.com/o/%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B5%E1%84%92%E1%85%AC3.jpeg?alt=media&token=0c62d83f-cad9-4931-96a4-d7d6d8e3cfa8&_gl=1*1o1nz3j*_ga*MzE3NjcyODA1LjE2ODQyMDc5Njc.*_ga_CW55HF8NVT*MTY4NjQ5NzU1OS41LjEuMTY4NjQ5ODA5Ny4wLjAuMA..",
    "https://firebasestorage.googleapis.com/v0/b/final-ddd.appspot.com/o/%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B5%E1%84%92%E1%85%AC4.jpeg?alt=media&token=65983a2b-cabf-433f-8043-f213791d6364&_gl=1*lcx369*_ga*MzE3NjcyODA1LjE2ODQyMDc5Njc.*_ga_CW55HF8NVT*MTY4NjQ5NzU1OS41LjEuMTY4NjQ5ODExMy4wLjAuMA..",
    "https://firebasestorage.googleapis.com/v0/b/final-ddd.appspot.com/o/%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%B5%E1%84%92%E1%85%AC5.jpeg?alt=media&token=f3c51458-12bd-4350-a6ae-09e966e93e13&_gl=1*150mesx*_ga*MzE3NjcyODA1LjE2ODQyMDc5Njc.*_ga_CW55HF8NVT*MTY4NjQ5NzU1OS41LjEuMTY4NjQ5ODEyMi4wLjAuMA.."
]

const Slider = () => {
    //슬라이드
    const slideRef = useRef(null);
    const [index, setIndex] = useState(0); // 인덱스
    const [isSlide, setIsSlide] = useState(false); // 슬라이드 중인지 체크해줍니다. 슬라이드 중에 여러번 빠르게 클릭 못하게 하는 역할
    const [x, setX] = useState(0); // css에서 슬라이드 애니메이션 효과를 주기위해 x만큼 이동시키는 역할입

    // 드래그로 슬라이드 넘기기
    const [isClick, setIsClick] = useState(false); // 드래그를 시작하는지 체크
    const [mouseDownClientX, setMouseDownClientX] = useState(0); // 마우스를 클릭한 지점의 x 좌료를 저장
    const [mouseUpClientX, setMouseUpClientX] = useState(0); // 마우스를 땐 지점의 x 좌표를 저장

    // 화면 크기에 따른 반응형
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); // 사용자의 화면크기 정보를 받아 반응형 사이트에 사용합니다.


    // 다음버튼
    const increaseClick = async () => {
        if (isSlide) {
          return;
        }
        setX(-56);
        setIsSlide(true);
        await setTimeout(() => {
          setIndex((prev) => (prev === 4 ? 0 : prev + 1));
          setX(0);
          setIsSlide(false);
        }, 500);
        //setIndex((prev) => (prev === 7 ? 0 : prev + 1));
      };

      // 이전버튼
      const decreaseClick = async () => {
        if (isSlide) {
          return;
        }
        setX(+56);
        setIsSlide(true);
        await setTimeout(() => {
          setIndex((prev) => (prev === 0 ? 4 : prev - 1));
          setX(0);
          setIsSlide(false);
        }, 500);
      };

      const morePrevImg = index === 1 ? 4 : index === 0 ? 3 : index - 2;
      const PrevImg = index === 0 ? 4 : index - 1;
      const NextImg = index === 4 ? 0 : index + 1;
      const moreNextImg = index === 4 ? 1 : index === 3 ? 0 : index + 2;
      

      const onMouseDown = (event) => {
        setIsClick(true);
        setMouseDownClientX(event.pageX);
        console.log(slideRef);
      };
      const onMouseLeave = (event) => {
        setIsClick(false);
      };
      const onMouseUp = (event) => {
        setIsClick(false);
        const imgX = mouseDownClientX - mouseUpClientX;
        // console.log(imgX);
        if (imgX < -100) {
          slideRef.current.style.transform = `translateX(${imgX}px)`;
          increaseClick();
        } else if (imgX > 100) {
          slideRef.current.style.transform = `translateX(${imgX}px)`;
          decreaseClick();
        }
      };
      const onMouseMove = (event) => {
        if (!isClick) return;
        event.preventDefault();
        setMouseUpClientX(event.pageX);
        const imgX = mouseDownClientX - mouseUpClientX;
        if (Math.abs(imgX) > 100) {
        }
      };

      const resizeWidth = () => {
        setWindowWidth(window.innerWidth);
      };
    
      useEffect(() => {
        window.addEventListener("resize", resizeWidth);
        return () => {
          window.removeEventListener("resize", resizeWidth);
        };
      }, []);

      useEffect(() => {
        const autoPage = setTimeout(() => {
          setX(-56);
          setIsSlide(true);
          setTimeout(() => {
            setIndex((prev) => (prev === 4 ? 0 : prev + 1));
            setX(0);
            setIsSlide(false);
          }, 500);
        }, 5000);
        return () => {
          clearTimeout(autoPage);
        };
      }, [index, isClick]);

      return (
        <Wrapper>
          <LeftButton
            style={{
              left:
                windowWidth > 1800
                  ? `18.5%`
                  : windowWidth > 1500
                  ? `10%`
                  : windowWidth > 1300
                  ? `5%`
                  : `0%`,
              visibility: windowWidth < 1335 ? "hidden" : "visible",
            }}
            onClick={decreaseClick}
          >
            <i class="fas fa-chevron-left"><IoIosArrowBack size="20"/></i>
          </LeftButton>
          <Row
            key={index}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            onMouseMove={onMouseMove}
            ref={slideRef}
            style={{
              transform: `translateX(${x}vw)`,
            }}
          >
            <Container>
              <PrivewImg
                style={{
                  opacity: 0.5,
                  width: windowWidth > 1200 ? null : `50vw`,
                  height:
                    windowWidth > 1200
                      ? null
                      : windowWidth < 770
                      ? "20rem"
                      : "15rem",
                }}
                src={BannerImg[morePrevImg]}
              ></PrivewImg>
            </Container>
            <Container>
              <PrivewImg
                style={{
                  opacity: 0.5,
                  width: windowWidth > 1200 ? null : `50vw`,
                  height:
                    windowWidth > 1200
                      ? null
                      : windowWidth < 770
                      ? "20rem"
                      : "15rem",
                }}
                src={BannerImg[PrevImg]}
              ></PrivewImg>
            </Container>
            <ImgWrapper>
              <Img
                style={{
                  opacity: 1,
                  width: windowWidth > 1200 ? null : `50vw`,
                  height:
                    windowWidth > 1200
                      ? null
                      : windowWidth < 770
                      ? "20rem"
                      : "15rem",
                }}
                src={BannerImg[index]}
              />
              {!isSlide && windowWidth > 1200 ? (
                <ImgDes>
                </ImgDes>
              ) : null}
              {!isSlide && windowWidth <= 1200 ? (
                <MiniWrapper>
                </MiniWrapper>
              ) : null}
            </ImgWrapper>
            <Container>
              <PrivewImg
                style={{
                  opacity: 0.5,
                  width: windowWidth > 1200 ? null : `50vw`,
                  height:
                    windowWidth > 1200
                      ? null
                      : windowWidth < 770
                      ? "20rem"
                      : "15rem",
                }}
                src={BannerImg[NextImg]}
              ></PrivewImg>
            </Container>
            <Container>
              <PrivewImg
                style={{
                  opacity: 0.5,
                  width: windowWidth > 1200 ? null : `50vw`,
                  height:
                    windowWidth > 1200
                      ? null
                      : windowWidth < 770
                      ? "20rem"
                      : "15rem",
                }}
                src={BannerImg[moreNextImg]}
              ></PrivewImg>
            </Container>
          </Row>
    
          <RightButton
            style={{
              right:
                windowWidth > 1800
                  ? `18.5%`
                  : windowWidth > 1500
                  ? `10%`
                  : windowWidth > 1200
                  ? `5%`
                  : `0%`,
              visibility: windowWidth < 1335 ? "hidden" : "visible",
            }}
            onClick={increaseClick}
          >
            <i class="fas fa-chevron-right"><IoIosArrowForward size="20"/></i>
          </RightButton>
        </Wrapper>
      );

}

export default Slider;