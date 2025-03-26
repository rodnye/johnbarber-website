import { ReactElement } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  children: ReactElement[];
  slidesToShow?: number;
}

export function Carousel({ slidesToShow = 2, children }: Props) {
  return (
    <Slider
      dots
      infinite
      arrows
      autoplay
      speed={500}
      slidesToShow={slidesToShow}
      slidesToScroll={1}
    >
      {children}
    </Slider>
  );
}
