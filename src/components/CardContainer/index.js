import React from "react";
import { Row, Col } from "antd";
import cubo from "../../images/cubo.png";
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
              description="Introducción - Números Reales y sus propiedades"
              image={cubo}
            />
          </LinkButton>
          <LinkButton to="/clase2">
            <Tarjetas
              style={tarjeta}
              title="Clase 2"
              description="Aritmetica"
              image={cubo}
            />
          </LinkButton>
        </Col>
      </Row>
    </>
  );
};
