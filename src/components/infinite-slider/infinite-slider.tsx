import React from "react";
import Image from "next/image";
import { Container } from "./infinite-slider.style";

export default function InfiniteSlider() {
  return (
    <Container>
      <div className="container">
        <div className="slider">
          <Image
            key={"/big-data.png"}
            className="img"
            src={"/big-data.png"}
            alt="big-data Certification"
            width={350}
            height={250}
          />
          <Image
            className="img"
            key={"/ciencia-de-dados.png"}
            src={"/ciencia-de-dados.png"}
            alt="science data"
            width={350}
            height={250}
          />
          <Image
            className="img"
            key={"/docker.png"}
            src={"/docker.png"}
            alt="docker Certification"
            width={350}
            height={250}
          />
          <Image
            className="img"
            key={"/english.png"}
            src={"/english.png"}
            alt="english Certification"
            width={350}
            height={250}
          />
          <Image
            className="img"
            key={"/flexbox.png"}
            src={"/flexbox.png"}
            alt="flexbox Certification"
            width={350}
            height={250}
          />
          <Image
            className="img"
            key={"/grid-layout.png"}
            src={"/grid-layout.png"}
            alt="grid layout Certification"
            width={350}
            height={250}
          />
          <Image
            className="img"
            key={"/lambda.png"}
            src={"/lambda.png"}
            alt="lambda Certification"
            width={350}
            height={250}
          />
          <Image
            className="img"
            key={"/python.png"}
            src={"/python.png"}
            alt="python Certification"
            width={350}
            height={250}
          />
          <Image
            className="img"
            key={"/typescript.png"}
            src={"/typescript.png"}
            alt="typescript Certification"
            width={350}
            height={250}
          />
        </div>
        <div className="slider">
          <Image
            key={"/big-data.png"}
            className="img"
            src={"/big-data.png"}
            alt="big-data Certification"
            width={350}
            height={250}
          />

          <Image
            className="img"
            key={"/ciencia-de-dados.png"}
            src={"/ciencia-de-dados.png"}
            alt="science data"
            width={350}
            height={250}
          />

          <Image
            className="img"
            key={"/docker.png"}
            src={"/docker.png"}
            alt="docker Certification"
            width={350}
            height={250}
          />

          <Image
            className="img"
            key={"/english.png"}
            src={"/english.png"}
            alt="english Certification"
            width={350}
            height={250}
          />

          <Image
            className="img"
            key={"/flexbox.png"}
            src={"/flexbox.png"}
            alt="flexbox Certification"
            width={350}
            height={250}
          />

          <Image
            className="img"
            key={"/grid-layout.png"}
            src={"/grid-layout.png"}
            alt="grid layout Certification"
            width={350}
            height={250}
          />

          <Image
            className="img"
            key={"/lambda.png"}
            src={"/lambda.png"}
            alt="lambda Certification"
            width={350}
            height={250}
          />

          <Image
            className="img"
            key={"/python.png"}
            src={"/python.png"}
            alt="python Certification"
            width={350}
            height={250}
          />

          <Image
            className="img"
            key={"/typescript.png"}
            src={"/typescript.png"}
            alt="typescript Certification"
            width={350}
            height={250}
          />
        </div>
      </div>
    </Container>
  );
}
