import { useEffect, useRef, useState } from "react";
import { Loader } from "./components/Loader";
import { CSSTransition } from "react-transition-group";
import { HomeSection } from "./sections/home";
import { useCSSLoader, useImageLoader } from "./utils/loader";
import textLogoImg from "./assets/text_logo.svg";
import whatsappImg from "./assets/whatsapp_logo.svg";
import heroImg from "./assets/hero.jpg";
import { ExamplesSection } from "./sections/examples";
import styled from "styled-components";
import { FloatingButton } from "./components/FloatingButton";
import { ServicesSection } from "./sections/services";
import { ContactSection } from "./sections/contact";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [readyDelay, setReadyDelay] = useState(false);
  const readyImages = useImageLoader([
    textLogoImg,
    whatsappImg,
    heroImg,
  ]).isLoaded;

  const readyCSS = useCSSLoader([
    "https://fonts.googleapis.com/css2?family=Playwrite+IT+Moderna:wght@100..400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
  ]).isLoaded;

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  useEffect(() => {
    let time = Math.round(Math.random() * 5000 + 2000);
    setTimeout(() => setReadyDelay(true), time);
  }, []);

  useEffect(() => {
    if (readyImages && readyDelay && readyCSS) {
      setLoaded(true);
    }
  }, [readyImages, readyDelay, readyCSS]);

  return (
    <>
      <CSSTransition
        in={!loaded}
        nodeRef={ref1}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div
          ref={ref1}
          className="absolute flex h-full w-full items-center justify-center"
        >
          <Loader className="text-xl" />
        </div>
      </CSSTransition>

      <CSSTransition
        in={loaded}
        nodeRef={ref2}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="poppins-thin relative overflow-y-auto overflow-x-hidden" ref={ref2}>
          <HomeSection />
          <ExamplesSection />
          <ServicesSection />
          <ContactSection />

          <FloatingButton>
            <WhatsappImg src={whatsappImg} className="h-28" />
          </FloatingButton>
        </div>
      </CSSTransition>
    </>
  );
}


const WhatsappImg = styled.img`
  animation: shakeAndZoom 7s ease-in-out infinite;

  @keyframes shakeAndZoom {
    0% {
      transform: scale(1) rotate(0deg);
    }
    2% {
      transform: scale(1.2) rotate(-5deg);
    }
    4% {
      transform: scale(1.2) rotate(5deg);
    }
    6% {
      transform: scale(1.2) rotate(-5deg);
    }
    8% {
      transform: scale(1.2) rotate(5deg);
    }
    10% {
      transform: scale(1.2) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(0deg);
    }
  }
`;

export default App;
