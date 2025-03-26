import { AnimatedTextSwitcher } from "../components/AnimatedTextSwitcher";
import { Navbar } from "../components/Navbar";
import { heroImg, textLogo } from "../assets";

export function HomeSection() {
  return (
    <div className="flex flex-col">
      <Navbar
        menuOptions={[
          { label: "Cortes", href: "examples-section" },
          { label: "Servicios", href: "services-section" },
          { label: "Contáctame", href: "contact-section" },
        ]}
      />
      <div
        className="flex items-end justify-end p-6 pt-28"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "100%",
          backgroundPosition: "center"
        }}
      >
        <img src={textLogo} className="w-40" />
      </div>
      <AnimatedTextSwitcher
        className="text-sm md:text-2xl"
        startText=" Ven y obtendrás "
        words={[
          "las sombras",
          "el corte",
          "la decoloración",
          "la tonalidad",
          "las cejas",
          "los diseños",
        ]}
        endText=" que nunca supiste que necesitabas."
      />
    </div>
  );
}
