import React from "react";
import { Row, Col, Button } from "antd";
import {
  RightOutlined,
  LeftOutlined,
  AimOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";

import { ContainerClase1, ImgGriego, ImgRacional, ImgRelacion } from "./styled";
import { ButtonBack } from "../../StyleGlobal/styled";

import griego from "../../images/griego.png";
import racional from "../../images/racional.png";
import relacion from "../../images/relacion.png";
import cociente from "../../images/cociente.png";
import periodica from "../../images/periodica.png";
import porcentaje from "../../images/porcentaje.png";
import formaperiodica from "../../images/formaperiodica.png";
import irracionales from "../../images/irracionales.png";
import propoperaciones from "../../images/propoperaciones.png";
import orden from "../../images/orden.png";

const Clase1 = () => {
  return (
    <>
      <Row
        justify="center"
        align="middle"
        style={{ display: "flex", justifyContent: "center" }}>
        <ButtonBack to="/">
          <Button type="primary" icon={<ArrowLeftOutlined />}>
            Back
          </Button>
        </ButtonBack>
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
        <p>
          <AimOutlined /> Tal que |
        </p>
        <p>
          <AimOutlined /> Pertenece ∈
        </p>
        <p>
          <AimOutlined /> Diferente ≠
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
        <Row justify="center" align="middle">
          <Col lg={8} sm={12} xs={24}>
            <ImgRacional alt="Q" src={racional} />
          </Col>
          <Col lg={8} sm={12} xs={24}>
            <ImgRelacion alt="Q" src={relacion} />
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col span={24} style={{ textAlign: "center" }}>
            <h3>Formas de representar los números racionales (Q).</h3>
          </Col>
          <Col lg={8} sm={10} xs={24}>
            <ImgRelacion alt="Q" src={cociente} />
          </Col>
          <Col lg={8} sm={10} xs={24}>
            <ImgRelacion alt="Q" src={periodica} />
          </Col>
          <Col lg={8} sm={10} xs={24}>
            <ImgRelacion alt="Q" src={porcentaje} />
          </Col>
        </Row>
        <Row justify="center" align="middle">
          <Col lg={12} sm={16} xs={24} style={{ textAlign: "center" }}>
            <h3>Llevar de forma periódica decimal a cociente de enteros.</h3>
            <ImgRelacion alt="periodica" src={formaperiodica} />
          </Col>
        </Row>
        <h4>Números Irracionales (R-Q)</h4>
        <p>
          Son todos los números que no pueden ser representados de la forma a/b,
          donde a y b son números enteros y b ≠ 0.
        </p>
        <p>Número de Euler e = 2.718 281 828 459 ... </p>
        <Col lg={14} sm={18} xs={24}>
          <ImgRelacion alt="Q" src={irracionales} />
        </Col>
        <h3>
          Números Reales (También lo podemos encontrar como Dominio: El dominio
          de una función es el conjunto de objetos a los que la función asigna
          valores.)
        </h3>
        <p>Números Naturales (N)</p>
        <p>Números Enteros (Z)</p>
        <p>Números Racionales (Q)</p>
        <p>Números Irracionales (R-Q)</p>
        <h3>El Decibel (dB) está en el conjunto de números Reales.</h3>
        <h2>Propiedades de los números reales.</h2>
        <p>Propiedades de igualdad.</p>
        <p>x, y, z, pertenecen a los números reales.</p>
        <p>Reflexiva x = x</p>
        <p>Simetría x = y y por lo tanto x</p>
        <p>Transitiva x = y; y = z por lo tanto x = z</p>
        <h2>Propiedades de las operaciones.</h2>
        <p>Sean a,b, y c números reales, entonces se cumple lo siguiente: </p>

        <Col span={24}>
          <ImgRelacion alt="Q" src={propoperaciones} />
        </Col>

        <h3>Orden de los números</h3>
        <p>¿Qué número es mayor? a o b</p>
        <p>
          En la recta númerica el número que está a la derecha será el número
          mayor, por lo tanto b es mayor que a, también podemos decir que a es
          menor que b.
        </p>
        <Col lg={14} sm={18} xs={24}>
          <ImgRelacion alt="Q" src={orden} />
        </Col>
        <h3>Bases, Suma</h3>
        <p>2+3=5</p>
        <p>2-3 = 2 + (-3) = -1; -3 es el opuesto de 3</p>
        <p>
          Dado un número a que pertenece a los R se define el opuesto de a como
          -a por lo tanto el opuesto de -a es a
        </p>
        <p>
          ¿Cuánto suman dos fuentes acústicas que están en fase si una genera
          98dB SPL y la otra 94dB SPL
        </p>
        <p>
          Reconocer que estamos hablando de sumas en el mundo de los números
          reales. Y este caso habla de una relación númerica de logaritmo.
        </p>
        <p></p>
      </ContainerClase1>
    </>
  );
};

export default Clase1;
