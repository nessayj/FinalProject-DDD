import React from "react";

const RadioButton = (selectedOption,setSelectedOption) => {

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value); // 선택된 옵션을 업데이트합니다.
  };

  return (
    <div className="inputBox">
      <label>
        <input
          type="radio"
          value="mobile"
          checked={selectedOption === "mobile"} // 선택된 옵션이 "mobile"일 경우 체크됩니다.
          onChange={handleOptionChange}
        />
        모바일티켓
      </label>

      <label>
        <input
          type="radio"
          value="onSite"
          checked={selectedOption === "onSite"} // 선택된 옵션이 "onSite"일 경우 체크됩니다.
          onChange={handleOptionChange}
        />
        현장수령
      </label>
    </div>
  );
};

export default RadioButton;
