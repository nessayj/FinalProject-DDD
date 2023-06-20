import React, { useState } from "react";
import styled from "styled-components";

const MembersContainer = styled.div`
  width: 80vw;
  height: 100vh;

  .dash-title {
    margin-left: 1rem;
    text-decoration: underline;
  }
  table {
  border-collapse: collapse;
  }
`;

const TableHeader = styled.th`
  background-color: #050E3D;
  color: white;
  padding: 8px;
`;

const TableRow = styled.tr`
  td {
    border-bottom: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
`;

const Members = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [data, setData] = useState(generateFakeData(10)); // 가짜 데이터 생성

  // 가짜 데이터 생성 함수
  function generateFakeData(count) {
    const fakeData = [];

    for (let i = 1; i <= count; i++) {
      fakeData.push({
        id: i,
        joinDate: "2023-06-20",
        memberNumber: `M${i}`,
        email: `user${i}@:DDD.com`,
        name: `회원${i}`,
        phoneNumber: `123-456-${i.toString().padStart(4, "0")}`,
        withdrawalDate: "2023-06-25",
      });
    }

    return fakeData;
  }

  // 전체 선택 처리
  const handleSelectAllRows = () => {
    if (selectedRows.length === data.length) {
      // 모든 행이 선택된 상태인 경우, 모든 행 선택 해제
      setSelectedRows([]);
    } else {
      // 그 외의 경우, 모든 행 선택
      setSelectedRows(data.map((item) => item.id));
    }
  };

  // 개별 행 선택 처리
  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      // 이미 선택된 행인 경우, 선택 해제
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      // 그 외의 경우, 선택
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <MembersContainer>
      <h3 className="dash-title">회원관리</h3>
      <div className="member-table">
        <table>
          <thead>
            <TableRow>
              <TableHeader>
                <input
                  type="checkbox"
                  checked={selectedRows.length === data.length}
                  onChange={handleSelectAllRows}
                />
              </TableHeader>
              <TableHeader style={{ width: "15%" }}>회원가입일</TableHeader>
              <TableHeader style={{ width: "15%" }}>회원번호</TableHeader>
              <TableHeader style={{ width: "20%" }}>이메일</TableHeader>
              <TableHeader style={{ width: "15%" }}>이름</TableHeader>
              <TableHeader style={{ width: "15%" }}>전화번호</TableHeader>
              <TableHeader style={{ width: "15%" }}>탈퇴일</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(item.id)}
                    onChange={() => handleSelectRow(item.id)}
                  />
                </td>
                <td>{item.joinDate}</td>
                <td>{item.memberNumber}</td>
                <td>{item.email}</td>
                <td>{item.name}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.withdrawalDate}</td>
              </TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </MembersContainer>
  );
};

export default Members;
