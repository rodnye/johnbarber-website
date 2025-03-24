import { iconLogo, profileImg } from "../assets";
import { ImgWithLoader } from "../components/ImgWithLoader";
import { TitleSection } from "../components/Typography";
import { Element } from "react-scroll";

import whatsappIcon from "../assets/whatsapp.png";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import { Ref } from "react";

interface Props {
  ref?: Ref<HTMLDivElement>;
}

export function ContactSection({ ref }: Props) {
  const socialClassNames = "flex-grow-1 max-w-32 w-full lg:mx-6 p-2";
  return (
    <Element name="contact-section">
      <div ref={ref} className="my-12 flex w-full flex-col items-center">
        <TitleSection icon={iconLogo} content="Contáctame ahora!" />
        <div className="flex w-full flex-col items-center text-center">
          <p className="m-6 text-xl">
            Quieres agendar una cita o preguntar algo? Aquí te dejo mis redes
          </p>

          <div className="relative flex w-full flex-col items-center px-6">
            <ImgWithLoader
              src={profileImg}
              w="w-full max-w-96 mx-6"
              className="relative top-8 rounded-full"
            />
            <div className="relative bottom-8 flex w-full items-center justify-center">
              <img src={facebookIcon} className={socialClassNames} />
              <img src={whatsappIcon} className={socialClassNames} />
              <img src={instagramIcon} className={socialClassNames} />
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
