import React from "react";
import { Row } from "antd";
import {
  RightOutlined,
  LeftOutlined,
  AimOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";

import { ContainerClase1, ImgGriego, ImgRacional, ImgRelacion } from "./styled";
import { ButtonBack, ButtonGlobal } from "../../StyleGlobal/styled";

import griego from "../../images/griego.png";
import racional from "../../images/racional.png";
import relacion from "../../images/relacion.png";

const Clase1 = () => {
  return (
    <>
      <Row
        justify="center"
        align="middle"
        style={{ display: "flex", justifyContent: "center" }}>
        <ButtonGlobal>
          <ButtonBack to="/">
            <ArrowLeftOutlined /> Back
          </ButtonBack>
        </ButtonGlobal>
      </Row>
      <ContainerClase1>
        <h2>Definición (Diccionario RAE)</h2>
        <p>
          Matemáticas. f. Ciencia deductiva que estudia las propiedades de los
          entes abstractos, como números, figuras geométricas o símbolos y sus
          relaciones.
        </p>
        <p>
          Aritmética. f. Parte de las matemáticas que estudia los números y las
          operaciones hechas con ellos.
        </p>
        <p>
          Álgebra. f. Parte de las matemáticas que estudia estructuras
          abstractas en las que, mediante números, letras y signos, se
          generalizan las operaciones aritméticas habituales, como la suma y el
          producto.
        </p>
        <p>Símbolos matemáticos.</p>
        <p>
          Símbolo. m. Ling. Representacióngráfica invariable de un concepto de
          carácter científico o técnico, constituida por una o más letras u
          otros signos no alfabetizables, que goza de difusión internacional, y
          que, a diferencia de la abreviatura, no se escribe con punto
          pospuesto; p. ej., N, He, Km, y € por norte, helio, kilómetro y euro,
          respectivamente.
        </p>
        <p>
          <AimOutlined /> Igualdad =
        </p>
        <p>
          <AimOutlined /> Suma +
        </p>
        <p>
          <AimOutlined /> Resta -
        </p>
        <p>
          <AimOutlined /> División ÷
        </p>
        <p>
          <AimOutlined /> Multiplicación x ó ·
        </p>
        <p>
          <AimOutlined /> Multiplicación x ó ·
        </p>
        <p>
          <AimOutlined /> Mayor que <RightOutlined />
        </p>
        <p>
          <AimOutlined /> Menor que <LeftOutlined />
        </p>
        <h4>
          Igualdad = "Una igualdad matemática se manipula como los pesos de una
          balanza: para mantener el equilibrio, lo que agregamos o retiramos del
          lado derecho lo tenemos que agregar o retirar del lado izquierdo.
        </h4>

        <h3>Alfabeto Griego</h3>
        <p>
          Desarrollado alrededor del siglo IX a. C. a partir del alfabeto
          consonántico fenicio, fue el primer alfabeto completo de la historia
          (consta de veinticuatro letras). Los griegos adoptaron el primer
          alfabeto, entendiéndolo como la escritura que expresa los sonidos
          individuales del idioma.
        </p>
        <ImgGriego alt="simbolos griegos" src={griego} />
        <h3>Aritmética</h3>
        <p>Número. m. Expresión de una cantidad con relación a su unidad.</p>
        <p>
          Conjunto. m. Mat. Totalidad de los entes matemáticos que tienen una
          propiedad común.
        </p>
        <h3>Aritmética y Álgebra</h3>
        <h4>Números Naturales (N)</h4>
        <p>Los números 1,2,3,... son números naturales</p>
        <p>N = [1, 2, 3, 4,...]</p>
        <p>
          Con un ejemplo de altavoces podemos recordarlo. Ya que la cantidad de
          altavoces siempre va a ser un número natural.
        </p>
        <h4>Números Enteros (Z)</h4>
        <p>
          Son los números naturales más el cero y los correspondientes opuestos
          o números negativos.
        </p>
        <p>Z = [...-3,-2,-1,0,1, 2, 3,...]</p>
        <h4>Números Racionales (Q)</h4>
        <p>
          Todos los números de la forma a/b donde a y b son números enteros y b
          ≠ 0.
        </p>
        <ImgRacional alt="Q" src={racional} />
        <ImgRelacion alt="Q" src={relacion} />
        <h3>| Tal que</h3>
        <h3>∈ Pertenece</h3>
        <h3>≠ Diferente</h3>
      </ContainerClase1>
    </>
  );
};

export default Clase1;
