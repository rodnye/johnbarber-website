import { ReactNode } from "react";
import { lines } from "@/assets";
import { Image, StaticImageData } from "@/components/Image";

interface Props {
  id?: string;
  icon?: StaticImageData;
  content?: ReactNode;
}

export function TitleSection({ id, icon, content }: Props) {
  return (
    <>
      <h1 className="m-6 flex items-center text-center text-2xl font-bold lg:text-3xl">
        {icon && <Image src={icon} alt="" className="mr-3.5 w-12 rotate-12" />}
        <p id={id}>{content}</p>
      </h1>
      <Image src={lines[0]} alt="" className="w-2/3 lg:h-6 lg:w-auto" />
    </>
  );
}
