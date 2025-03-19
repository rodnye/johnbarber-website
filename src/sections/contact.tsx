import { iconLogo } from "../assets";
import { TitleSection } from "../components/Typography";

export function ContactSection ({}) {
  return (
    <div className="">
      <TitleSection icon={iconLogo} content="Contáctame ahora!"/>
      <div className="flex flex-col">
        <p> Quieres agendar una cita o preguntar algo? Aquí te dejo mis redes </p>
      </div>
    </div>
  )
}