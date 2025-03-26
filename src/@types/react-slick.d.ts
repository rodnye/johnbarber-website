
// fix react-slick types incompatibility
declare module "react-slick" {
  import React from "react";
  import { Settings } from "react-slick";

  const Slider: React.FC<Settings>;
  export default Slider;
}
