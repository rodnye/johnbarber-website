import { PropsWithChildren, ReactNode, useState } from "react";
import cx from "classix";
import { ImgWithLoader } from "./ImgWithLoader";
import { Image, StaticImageData } from "@/components/Image";

interface Props extends PropsWithChildren {
  imageSrc?: string | StaticImageData;
  icon?: StaticImageData;
  title?: ReactNode;
  w?: string; // width in tailwind format
  className?: string;
}

export function Card({ children, icon, imageSrc, title, w, className }: Props) {
  const [isLoaded, setIsLoaded] = useState(!imageSrc);

  return (
    <div
      className={cx(
        "group ease-elegant relative m-4 flex flex-col transition-all duration-300 hover:-translate-y-1",
        w || "w-64",
        className,
      )}
    >
      {/* Header decorativo */}
      <div className="relative h-4">
        <div className="absolute top-0 left-4 h-4 w-24 rounded-t-lg bg-gradient-to-r from-gray-100 to-gray-200" />
        <div className="absolute top-1 left-5 h-3 w-20 rounded-t-md bg-gray-300/40" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex w-full flex-grow flex-col overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl">
        {imageSrc && (
          <div className="overflow-hidden">
            <ImgWithLoader
              src={imageSrc}
              onLoad={() => setIsLoaded(true)}
              className="w-full transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        )}

        {/* Icono decorativo */}
        {icon && (
          <div className="absolute -top-4 -right-4 z-20 h-16 w-16 rounded-full bg-white p-1 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
            <Image src={icon} alt="" className="h-full w-full object-contain" />
          </div>
        )}

        {/* Contenido textual */}
        <div className="p-5">
          {isLoaded && title && (
            <h2 className="mb-3 text-xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-gray-900">
              {title}
            </h2>
          )}
          {isLoaded && (
            <div className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
