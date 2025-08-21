import { StaticImageData } from "next/image";

interface Props extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string | StaticImageData;
}

function CustomImage({ src, alt, ...props }: Props) {
  return (
    <img
      src={typeof src === "string" ? src : src.src}
      alt={alt || "not defined"}
      {...props}
    />
  );
}

export type { StaticImageData };
export { CustomImage as Image };
