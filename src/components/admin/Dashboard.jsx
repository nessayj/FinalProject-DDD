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
    .charts{
        margin-left: 1rem;

    }





`;



const DashBoard = () => {


  return(
      <DashboardContainer>
        <h3 className="dash-title">Dash Board</h3>
        <div className="charts">
            <Chart/>
        </div>
          

      </DashboardContainer>
  )
}

export default DashBoard;