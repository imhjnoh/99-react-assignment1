import logo from "./logo.svg";
import styled from "styled-components";
import Weeks from "./Weeks";
import { useState } from "react";
import { Route } from "react-router-dom";

function Home() {
  const [rates, setRates] = useState([
    { day: "일", rate: Math.floor(Math.random() * 5 + 1) },
    { day: "월", rate: Math.floor(Math.random() * 5 + 1) },
    { day: "화", rate: Math.floor(Math.random() * 5 + 1) },
    { day: "수", rate: Math.floor(Math.random() * 5 + 1) },
    { day: "목", rate: Math.floor(Math.random() * 5 + 1) },
    { day: "금", rate: Math.floor(Math.random() * 5 + 1) },
    { day: "토", rate: Math.floor(Math.random() * 5 + 1) },
  ]);
  const [rateEval, setRateEval] = useState(
    (rates.reduce((acc, x) => acc + x.rate, 0) / 7).toFixed(1)
  );
  console.log(rates[0]);
  return (
    <div className="Home">
      <h3
        style={{
          width: "100%",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Rate-A-Week
      </h3>
      <Weeks rates={rates} />
      <div
        style={{
          color: "blue",
          fontSize: "25px",
          fontWeight: "bold",
          marginTop: "1rem",
          padding: "9px",
        }}
      >
        평균 평점 <br></br>
        {rateEval}
      </div>
      <BlueButton onClick={() => setRateEval("0.0")}>Reset</BlueButton>
    </div>
  );
}

const BlueButton = styled.button`
  background-color: dodgerblue;
  border: none;
  border-radius: 5px;
  width: 8rem;
  padding: 1em;
  color: white;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;
export default Home;
