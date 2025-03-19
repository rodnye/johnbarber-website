import { AnimatedTextSwitcher } from "../components/AnimatedTextSwitcher";
import { Navbar } from "../components/Navbar";
import { heroImg, textLogo } from "../assets";

export function HomeSection() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div
        className="flex items-end justify-end p-6 pt-28"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "100%",
        }}
      >
        <img src={textLogo} className="w-40" />
      </div>
      <AnimatedTextSwitcher
        className="text-sm"
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
