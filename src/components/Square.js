import React from "react";
import "./Square.css";

// export default class Square extends React.Component
// 함수형 컴포넌트로 변경

const Square = ({ onClick, value }) => {
  return (
    <button
      className="square"
      onClick={() => {
        onClick();
      }}
    >
      {value}
    </button>
  );
};

export default Square;
