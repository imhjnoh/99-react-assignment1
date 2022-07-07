import styled from "styled-components";
// import {Route, Routes} from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Review from "./Review";

function App() {
  return (
    <div className="App">
      <Container>
        <Router>
          <Routes>
            <Route path="/*" element={<Home />}></Route>
            <Route path="/review/:day" element={<Review />}></Route>
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 80vw;
  max-width: 350px;
  height: 90vh;
  margin: 5vh auto;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 5vh 0;
  box-sizing: border-box;
  overflow: auto;
  text-align: center;
`;

export default App;
