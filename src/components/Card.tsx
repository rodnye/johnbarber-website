import { PropsWithChildren, ReactNode, useState } from "react";
import cx from "classix";
import { ImgWithLoader } from "./ImgWithLoader";

interface Props extends PropsWithChildren {
  imageSrc?: string;
  icon?: string;
  title?: ReactNode;
  w?: string; // width in tailwind format
  className?: string;
}

export function Card({ children, icon, imageSrc, title, w }: Props) {
  const [isLoaded, setIsLoaded] = useState(!imageSrc);

  return (
    <div
      className={cx(
        "relative m-4 flex flex-col transition hover:translate-5",
        w || "w-60",
      )}
    >
      {icon && (
        <img
          src={icon}
          className="absolute -right-5 -bottom-5 z-20 h-1/3 rotate-12"
        />
      )}
      <div className="h-12 w-2/5 rounded-t-xl bg-white" />
      <div className="absolute top-3 left-3 h-9 w-1/2 rounded-t-xl bg-gray-950" />
      <div className="relative z-10 flex w-full flex-grow-1 flex-col items-center rounded-tr-2xl rounded-b-2xl bg-white p-3">
        {imageSrc && (
          <ImgWithLoader
            src={imageSrc}
            onLoad={() => setIsLoaded(true)}
            className="w-full rounded-tr-xl rounded-b-xl"
          />
        )}
        {isLoaded && title && <h1 className="text-lg font-bold"> {title} </h1>}
        {isLoaded && children}
      </div>
    </div>
  );
}
