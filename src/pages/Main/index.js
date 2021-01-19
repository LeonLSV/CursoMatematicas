import React from "react";
import { Row, Col } from "antd";
import { CardContainer } from "../../components/CardContainer";

export const Main = () => {
  return (
    <>
      <Row justify="center" align="middle">
        <Col
          span={24}
          style={{
            height: "140px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <h1>¿Qué clase querés revisar?</h1>
        </Col>
      </Row>
      <Row>
        <CardContainer />
      </Row>
    </>
  );
};
