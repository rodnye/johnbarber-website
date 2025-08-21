import { Ref, useRef, useState, useEffect } from "react";
import textLogoImg from "@/assets/text_inline_logo.svg";
import { HamburguerButton } from "@/components/HamburguerButton";
import { Dropdown } from "@/components/Dropdown";
import { LinkButton } from "@/components/Link";
import { Image } from "@/components/Image";

interface Props {
  menuOptions: { label: string; href: string }[];
  ref?: Ref<HTMLDivElement>;
}

export function Navbar({ menuOptions, ref }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  // detect scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Cerrar menú al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ease-out ${
        isScrolled
          ? "bg-gray-950/95 py-2 shadow-xl backdrop-blur-lg"
          : "bg-gray-950/80 py-4 backdrop-blur-md"
      }`}
      ref={ref}
    >
      <div className="container mx-auto px-4">
        {/* Versión móvil */}
        <div className="flex flex-col items-center justify-between lg:hidden">
          <div className="flex w-full items-center justify-between">
            <Image
              src={textLogoImg}
              alt="Logo"
              className={`h-7 transition-all duration-300 ${isScrolled ? "lg:h-8" : "lg:h-10"}`}
            />
            <HamburguerButton
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
          <Dropdown show={isOpen} nodeRef={menuRef}>
            <ul
              className="mt-2 flex w-full flex-col items-center rounded-lg bg-gray-900/95 py-4 text-xl text-white backdrop-blur-lg"
              ref={menuRef}
            >
              {menuOptions.map((item) => (
                <li
                  className="my-1 w-full text-center"
                  onClick={handleLinkClick}
                  key={item.label}
                >
                  <div className="mx-2 rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-gray-800/70">
                    <LinkButton
                      to={item.href}
                      className="w-full text-center"
                      size="large"
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </LinkButton>
                  </div>
                </li>
              ))}
            </ul>
          </Dropdown>
        </div>

        {/* Versión desktop */}
        <div className="hidden items-center justify-between lg:flex">
          <Image
            src={textLogoImg}
            alt="Logo"
            className={`transition-all duration-300 ${isScrolled ? "h-8" : "h-10"}`}
          />
          <ul className="flex items-center space-x-2 text-lg text-white">
            {menuOptions.map((item) => (
              <li key={item.label} className="group relative">
                <LinkButton
                  to={item.href}
                  size="medium"
                  className="group-hover:scale-105"
                >
                  {item.label}
                </LinkButton>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
