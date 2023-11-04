import React from "react";
import Image from "next/image";
import { Container } from "./infinite-slider.style";
interface MyComponentProps {
  items: any[];
}
export default function InfiniteSlider({ items }: MyComponentProps) {
  return (
    <Container>
      <div className="container">
        <div className="slider">
          {items &&
            items.map((item) => (
              <div className="item" key={item.key}>
                {item}
              </div>
            ))}
        </div>
        <div className="slider">
          {items &&
            items.map((item) => (
              <div className="item" key={item.key}>
                {item}
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
}
