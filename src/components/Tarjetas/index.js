import React from "react";
import { Card } from "antd";

const { Meta } = Card;

export const Tarjetas = (props) => {
  return (
    <>
      <Card
        style={{ width: "240", textAlign: "center" }}
        cover={<img style={{ width: 240 }} alt="example" src={props.image} />}>
        <Meta title={props.title} description={props.description} />
      </Card>
    </>
  );
};
