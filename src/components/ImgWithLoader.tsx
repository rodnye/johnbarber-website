import { useEffect } from "react";
import { useImageLoader } from "../utils/loader";
import { Loader } from "./Loader";
import cx from "classix";

interface Props {
  src: string;
  alt?: string;
  className?: string;
  w?: string; // tailwind width
  onLoad?: Function;
}

export function ImgWithLoader({
  src,
  alt,
  w,
  className,
  onLoad,
}: Props) {
  const { isLoaded } = useImageLoader([src]);

  useEffect(() => {
    if (isLoaded && onLoad) onLoad();
  }, [isLoaded]);

  return (
    <div
      className={cx(
        "relative",
        w,
      )}
    >
      {isLoaded ? (
        <>
          <img src={src} className={cx("w-full", className)} />
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
