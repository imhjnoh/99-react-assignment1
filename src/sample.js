import React, {useState} from "react"

const ParentComponent = () => {

    const [everyDayArray, setEveryDayArray] = useState([])
    const [avg, setAvg] = useState(0)

    const ChildComponent = (props) => {
        
    }

    return(
        <>
        <ChildComponent />
        <ChildComponent />
        </>
    )
}