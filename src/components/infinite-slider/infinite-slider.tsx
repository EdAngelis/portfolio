import React from "react";
import Image from "next/image";
import { certsImgList } from "../../constants/certs-img-list";
import { Container } from "./infinite-slider.style";

export default function InfiniteSlider() {
  return (
    <Container>
      <div className="container">
        <div className="slider">
          {certsImgList.map((item, index) => (
            <Image
              key={index}
              src={item.src}
              alt={item.alt}
              width={300}
              height={250}
            />
          ))}
        </div>
        <div className="slider">
          {certsImgList.map((item, index) => (
            <Image
              key={index}
              src={item.src}
              alt={item.alt}
              width={300}
              height={250}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
