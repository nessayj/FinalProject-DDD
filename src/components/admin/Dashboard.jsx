import React from "react";
import styled from "styled-components";
import Chart from "./Charts";

const DashboardContainer = styled.div`
    width: 80vw;
    height: 100vh;
    .dash-title{
        margin-left: 1rem;
        text-decoration: underline;
    }
    .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    }
    .today-noti{
        background-color: #e3e3e3;
        width: 80%;
        justify-content: center;
        align-items: center;
        text-align: center;
        >h4{
            margin-top: .5rem;
            margin-bottom: 0;
        }

        .noti-list{
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 1rem;
            >p {
                font-size: 0.8em;
            }
        }
    }
    .second-row{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .charts{
        margin-left: 1rem;
        margin-top: 1rem;
        width: 23em;
        height: 20em;
        text-align: center;
        background-color: #e3e3e3;
        border-radius: 2rem;

    }
    .dailyData{

        width: 23em;
        height: 20em;
        display: flex;
        align-items: center;
        flex-direction: column;
        border-radius: 2rem;
        background-color: #e3e3e3;
        margin-left: 1rem;
        margin-top: 1rem;
        table{
            width: 20rem;
            height: 100%;
            font-size: 0.7em;
            text-align: center;
            border-collapse: collapse;
            border-spacing:0;
        th {
            background-color: #050E3D;
            margin: 0;
            color: white;
            border: none;
        }

        td, th {
            border: none;
        }

    }
    }







`;



const DashBoard = () => {
    // 일자별 요약 테이블 임시데이터
    const data = [
        {
          date: "2023-06-01",
          visitors: 10,
          newMembers: 5,
          exhibitions: 3,
          bookings: 7,
          posts: 12,
        },
        {
            date: "2023-06-03",
            visitors: 102,
            newMembers: 53,
            exhibitions: 3,
            bookings: 10,
            posts: 21,
          },
      ];
    
      const recentData = data.slice(-10).reverse(); // 최신순으로 정렬된 최근 10개 데이터 추출
    


  return(
      <DashboardContainer>
        <h3 className="dash-title">Dash Board</h3>
        <div className="container">
        <div className="today-noti">
            <h4>오늘의 알림</h4>
            <hr />
            <div className="noti-list">
            <p>신규회원 : </p>
            <p>탈퇴회원 : </p>
            <p>전시 중 : </p>
            <p>예매완료 : </p>
            <p>게시글 수 : </p>
            </div>
        </div>
        <div className="second-row">
        <div className="charts">
            <h4>이번달 가입현황</h4>
            <Chart/>
        </div>
        <div className="dailyData">
            <h4>일자별 요약</h4>
            <div className="table-container">
            <table>
                <thead>
                    <tr>
                    <th style={{ width: "20%" }}>일자</th>
                    <th style={{ width: "16%" }}>방문자</th>
                    <th style={{ width: "16%" }}>가입수</th>
                    <th style={{ width: "16%" }}>전시 중</th>
                    <th style={{ width: "16%" }}>예매완료</th>
                    <th style={{ width: "16%" }}>게시글 수</th>
                    </tr>
                </thead>
                <tbody>
                    {recentData.map((item) => (
                    <tr key={item.date}>
                        <td>{item.date.slice(5)}</td>
                        <td>{item.visitors}</td>
                        <td>{item.newMembers}</td>
                        <td>{item.exhibitions}</td>
                        <td>{item.bookings}</td>
                        <td>{item.posts}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>

        </div>
        </div>
        </div>

      </DashboardContainer>
  )
}

export default DashBoard;