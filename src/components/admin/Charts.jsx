import React from "react";
import styled from "styled-components";

const ChartContainer = styled.div`
  margin: 0 auto;
  position: relative;
  height: 500px;
  padding-bottom: 50px;
  border: 1px solid black;
  

`;

const Chart = () => {
  const data = [
    { date: "2023-06-01", count: 10 },
    { date: "2023-06-02", count: 20 },
    { date: "2023-06-03", count: 15 },
    { date: "2023-06-04", count: 30 },
    { date: "2023-06-05", count: 25 },
    { date: "2023-06-06", count: 12 },
    // ... 나머지 데이터
  ];

  const minValue = Math.min(...data.map((item) => item.count));
  const maxValue = Math.max(...data.map((item) => item.count));
  const countRange = maxValue - minValue;

  const graphWidth = 400; // 그래프 너비
  const graphHeight = 300; // 그래프 높이
  const scaleX = graphWidth / (data.length); // x축
  const scaleY = graphHeight / (countRange + 5); // y축

  return (
      <ChartContainer>
         {/* Y축 구분선과 라벨 */}
  <svg width="30" height={graphHeight}>
    {Array.from({ length: Math.ceil(maxValue / 5) }, (_, index) => (index + 1) * 5).map((value) => {
      const y = graphHeight - (value - minValue) * scaleY;

      return (
        <g key={value}>
          <line x1="0" y1={y} x2="30" y2={y} stroke="gray" strokeWidth={1} />
          <text x="5" y={y - 5} fill="gray" fontSize="12">
            {value}명
          </text>
        </g>
      );
    })}
  </svg>
  <svg width={graphWidth} height={graphHeight}>
    {data.map((item, index) => {
      const x = index * scaleX;
      const y = graphHeight - (item.count - minValue) * scaleY;

      return (
        <React.Fragment key={item.date}>
          <circle
            cx={x}
            cy={y}
            r={4}
            fill="#050E3D"
          />
        </React.Fragment>
      );
    })}
    {data.map((item, index) => {
      if (index === data.length - 1) return null;

      const x1 = index * scaleX;
      const y1 = graphHeight - (item.count - minValue) * scaleY;
      const x2 = (index + 1) * scaleX;
      const y2 = graphHeight - (data[index + 1].count - minValue) * scaleY;

      return (
        <line
          key={`${item.date}-${data[index + 1].date}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#050E3D"
          strokeWidth={2}
        />
      );
    })}
    
    {/* X축 구분선 */}
    <line x1="0" y1={graphHeight} x2={graphWidth} y2={graphHeight} stroke="gray" strokeWidth={1} />
  
  </svg>
  
  {/* X축 라벨 */}
  <div style={{ position: 'relative', marginTop: '10px', marginLeft: '35px' }}>
    {data.map((item, index) => {
      const x = index * scaleX;

      return (
        <React.Fragment key={item.date}>
          <line x1={x} y1={graphHeight} x2={x} y2={graphHeight + 5} stroke="gray" strokeWidth={1} />
          <span style={{ position: 'absolute', left: x, top: '100%', transform: 'translateX(-50%)', fontSize: '12px', color: 'black' }}>
            {item.date.slice(-2)}일
          </span>
        </React.Fragment>
      );
    })}
  </div>
</ChartContainer>
  );
};

export default Chart;
