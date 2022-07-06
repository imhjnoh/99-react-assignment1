import React from "react";
import styled from "styled-components";

const OneDay = ({ day, rate }) => {
  let tmp_day = "금";
  let tmp_rate = 3;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "1rem 0"
      }}
    >
      <strong style={{ margin: ".5rem" }}>{day}</strong>
      {[...Array(5)].map((x, i) => {
        if (i < rate) return <RateCircle key={i} rated></RateCircle>;
        else return <RateCircle key={i}></RateCircle>;
      })}
      <a href={"/review/"+day}>
      <TriButton />
      </a>
      
    </div>
  );
};

const RateCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  background-color: ${(props) => (props.rated ? "rgb(255, 235, 59)" : "#ddd")};
`;

const TriButton = styled.div`
  appearance: none;
  background-color: transparent;
  border-color: transparent purple;
  width: 0px;
  height: 0px;
  border-top-width: 1rem;
  border-top-style: solid;
  border-bottom-width: 1rem;
  border-bottom-style: solid;
  border-left-width: 1.6rem;
  border-left-style: solid;
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

export {RateCircle};
export default OneDay;
