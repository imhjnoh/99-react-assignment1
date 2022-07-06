import {useEffect, useState} from "react"
import {RateCircle} from "./OneDay"
import styled from 'styled-components';
import { useParams } from "react-router-dom";

const Review = (props) => {
    const [rate, setRate] = useState(0)
    const day = useParams().day

    const doRate = (n) => {
        setRate(n)
    }

    const handleKeyDown = (e) => {
        const typed = e.key;
        if (typed > 5 || typed < 1) {
            return;
        }
        setRate(typed);
        };
        
        useEffect(() => {
            window.addEventListener("keydown", handleKeyDown);
            return () => {
                window.removeEventListener("keydown", handleKeyDown);
            };
        }, []);

    return (
        <div style={{padding: "1em 2em"}}>
            <h3 style={{margin: "1em"}}>
                <span style={{backgroundColor: "orange", color: "white", padding: ".2em", borderRadius: "5px", fontWeight: '800', marginRight: ".2em"}}>{day}요일</span>
                평점 남기기
            </h3>
            <div style={{display: "flex", flexDirection: "rows", justifyContent: "center"}}>
            {[...Array(5)].map((x, i) => {
                if (i < rate) {
                    return <RateCircle key={i} onClick={() => setRate(i + 1)} rated/>
                }else{
                    return <RateCircle key={i} onClick={() => setRate(i + 1)}/>
                }
            })}
            </div>
            <a href="/">
            <PurpleButton>평점 남기기</PurpleButton>
            </a>
        </div>
    )
}

const PurpleButton = styled.div`
background-color: purple;
color: white;
padding: 1.5em 0;
width: 100%;
border-radius: 5px;
margin-top: 1em;
font-size: 11px;
`

export default Review