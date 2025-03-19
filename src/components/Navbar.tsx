import textLogoImg from "../assets/text_inline_logo.svg";
import { HamburguerButton } from "./HamburguerButton";
import { Dropdown } from "./Dropdown";
import { useRef, useState } from "react";
import { LinkButton } from "./Link";

const menuOptions = [
  { label: "Cortes", href: "#hair-examples" },
  { label: "Servicios", href: "#" },
  { label: "Contáctame", href: "#" },
];

export function Navbar({}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  return (
    <>
      <div className="flex flex-col items-center justify-between bg-gray-950 lg:hidden">
        <div className="flex w-full items-center justify-between p-6">
          <img src={textLogoImg} className="h-10" />
          <HamburguerButton onClick={() => setIsOpen(!isOpen)} />
        </div>
        <Dropdown show={isOpen} nodeRef={menuRef}>
          <ul
            className="flex w-full flex-col p-10 items-center text-2xl text-white"
            ref={menuRef}
          >
            {menuOptions.map((item) => (
              <li
                className="playr-font mt-2"
                key={item.label}
              >
                <LinkButton to={item.href} className="w-64">
                  {item.label}
                </LinkButton>
              </li>
            ))}
          </ul>
        </Dropdown>
      </div>

      <div className="hidden items-center justify-between bg-gray-950 p-6 lg:flex">
        <img src={textLogoImg} className="h-10 m-6" />
        <ul className="playr-font flex items-center text-xl font-bold text-white *:m-2 *:p-2">
          {menuOptions.map((item) => (
            <li key={item.label}>
              <LinkButton className="w-36" to={item.href}>
                {item.label}
              </LinkButton>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
