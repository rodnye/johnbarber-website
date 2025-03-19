import { ReactNode } from "react";

interface TitleSectionProps {
  icon?: string;
  content?: ReactNode;
  id?: string;
}

export function TitleSection({icon, content, id}: TitleSectionProps) {
  return (
    <h1 className="m-6 flex items-center text-3xl font-bold">
      {icon && <img src={icon} className="w-12 rotate-12 mr-3.5" />}
      <p id={id}>
        {content}
      </p>
    </h1>
  );
}
