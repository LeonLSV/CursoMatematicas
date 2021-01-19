import React from "react";
import { Row, Col } from "antd";
import { Router } from "@reach/router";
import { Home } from "./pages/Home";
import { Main } from "./pages/Main";
import Clase1 from "./components/Clase1";

export const App = () => {
  return (
    <>
      <Home />
      <Row justify="center" align="middle">
        <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
          <Router>
            <Main exact path="/" />
            <Clase1 exact path="/clase1" />
          </Router>
        </Col>
      </Row>
    </>
  );
};

export default App;
