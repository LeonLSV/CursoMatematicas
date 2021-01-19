import React from "react";
import { Row, Col } from "antd";
import logo from "../../logo.svg";
import { Tarjetas } from "../Tarjetas";

import { LinkButton } from "./styled";

const tarjeta = {
  width: 240,
  margin: "50px",
};

export const CardContainer = () => {
  return (
    <>
      <Row justify="center">
        <Col style={{ display: "flex" }}>
          <LinkButton to="/clase1">
            <Tarjetas
              style={tarjeta}
              title="Clase 1"
              description="Introducción"
              image={logo}
            />
          </LinkButton>
          <LinkButton to="/clase2">
            <Tarjetas
              style={tarjeta}
              title="Clase 2"
              description="Aritmetica"
              image={logo}
            />
          </LinkButton>
        </Col>
      </Row>
    </>
  );
};
