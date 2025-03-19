import { PropsWithChildren, ReactNode } from "react";
import { useImageLoader } from "../utils/loader";
import { Loader } from "./Loader";

interface Props extends PropsWithChildren {
  imageSrc?: string;
  icon?: string;
  title?: ReactNode;
}

export function Card({ children, icon, imageSrc, title }: Props) {
  const { isLoaded } = useImageLoader([imageSrc], { lazy: true });

  return (
    <div className="relative m-6 flex w-60 flex-col transition hover:translate-5">
      {icon && (
        <img
          src={icon}
          className="absolute -right-5 -bottom-5 z-20 h-1/3 rotate-12"
        />
      )}
      <div className="h-12 w-2/5 rounded-t-xl bg-white" />
      <div className="absolute top-3 left-3 h-9 w-1/2 rounded-t-xl bg-gray-950" />
      <div className="relative z-10 flex w-full flex-grow-1 flex-col items-center rounded-tr-2xl rounded-b-2xl bg-white p-3 shadow-2xl">
        {isLoaded ? (
          <>
            {imageSrc && <img src={imageSrc} className="w-60 rounded-2xl" />}
            {title && <h1 className="text-lg font-bold"> {title} </h1>}
            {children}
          </>
        ) : (
          <div className="flex w-60 items-center justify-center">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
}
