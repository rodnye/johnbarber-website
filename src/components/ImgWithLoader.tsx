import { useEffect } from "react";
import { useImageLoader } from "../utils/loader";
import { Loader } from "./Loader";
import cx from "classix";
import { Image, StaticImageData } from "@/components/Image";

interface Props {
  src: string | StaticImageData;
  alt?: string;
  className?: string;
  w?: string; // tailwind width
  onLoad?: () => void;
}

export function ImgWithLoader({ src, alt, w, className, onLoad }: Props) {
  const { isLoaded } = useImageLoader([src]);

  useEffect(() => {
    if (isLoaded && onLoad) onLoad();
  }, [isLoaded, onLoad]);

  return (
    <div className={cx("relative", w)}>
      {isLoaded ? (
        <>
          <Image src={src} alt="" className={cx("w-full", className)} />
          {alt && <h1 className="text-lg font-bold"> {alt} </h1>}
        </>
      ) : (
        <div className="flex w-full items-center justify-center">
          <Loader />
        </div>
      )}
    </div>
  );
}
