import React from "react";
import OneDay from "./OneDay";

const Weeks = (props) => {
  const today = new Date().getDay();
  // const today = 3
  console.log(today);
  return (
    <>
      {props.rates.map((x, i, arr) => {
        const this_day = arr[(today + 7 + i) % 7];
        return (
          <OneDay key={i} day={this_day.day} rate={this_day.rate}></OneDay>
        );
      })}
    </>
  );
};

export default Weeks;
