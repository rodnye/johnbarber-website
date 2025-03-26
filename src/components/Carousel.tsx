import { ReactElement } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  children: ReactElement[];
}

export function Carousel({ children }: Props) {

  return (
    <Slider
      dots
      infinite
      arrows
      autoplay
      speed={500}
      slidesToShow={2}
      slidesToScroll={1}
    >
      {children}
    </Slider>
  );
}
