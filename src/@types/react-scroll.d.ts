
// This is a patch to avoid the module incompatibility of react-scroll :(
declare module "react-scroll" {
  import { ElementProps } from "react-scroll/modules/components/Element";
  import { LinkProps } from "react-scroll/modules/components/Link";
  
  export const Element: React.FC<ElementProps>;
  export const Link: React.FC<LinkProps>;
}
