import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useCSSLoader, useImageLoader } from "./utils/loader";
import { FloatingButton } from "./components/FloatingButton";
import { Loader } from "./components/Loader";

import { HomeSection } from "./sections/home";
import { ExamplesSection } from "./sections/examples";
import { ServicesSection } from "./sections/services";
import { ContactSection } from "./sections/contact";

import textLogoImg from "./assets/text_logo.svg";
import whatsappImg from "./assets/whatsapp_logo.svg";
import heroImg from "./assets/hero.jpg";
import { Link } from "react-scroll";

function App() {
  const [showFab, setShowFab] = useState(true);

  // loader values
  const [loaded, setLoaded] = useState(false);
  const [readyDelay, setReadyDelay] = useState(false);
  const readyCSS = useCSSLoader([
    "https://fonts.googleapis.com/css2?family=Playwrite+IT+Moderna:wght@100..400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
  ]).isLoaded;
  const readyImages = useImageLoader([
    textLogoImg,
    whatsappImg,
    heroImg,
  ]).isLoaded;

  // references for transitions
  const loaderRef = useRef(null);
  const appRef = useRef(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const fabRef = useRef(null);

  useEffect(() => {
    // a fake additional time for loader
    setTimeout(
      () => setReadyDelay(true),
      Math.round(Math.random() * 5000 + 2000),
    );

    // hide and show

    window.addEventListener("scroll", (e) => {
      if (contactSectionRef.current.getBoundingClientRect().top < innerHeight) {
        setShowFab(false);
      } else setShowFab(true);
    });
  }, []);

  useEffect(() => {
    if (readyImages && readyDelay && readyCSS) {
      setLoaded(true);
    }
  }, [readyImages, readyDelay, readyCSS]);

  return (
    <>
      {
        // Loader screen
      }
      <CSSTransition
        in={!loaded}
        nodeRef={loaderRef}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div
          ref={loaderRef}
          className="absolute flex h-full w-full items-center justify-center"
        >
          <Loader />
        </div>
      </CSSTransition>

      {
        // App Screen
      }
      <CSSTransition
        in={loaded}
        nodeRef={appRef}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div
          className="poppins-thin flex w-full flex-col items-center"
          ref={appRef}
        >
          <div className="relative w-full overflow-x-hidden overflow-y-auto">
            <HomeSection />
            <ExamplesSection />
            <ServicesSection />
            <ContactSection ref={contactSectionRef} />

            <footer className="bg-gray-950 p-6 text-center text-white">
              <p>JohnBarber 2025</p>
              <p>Todos los derechos reservados.</p>
            </footer>

            <CSSTransition
              in={showFab}
              nodeRef={fabRef}
              timeout={300}
              classNames="zoom"
              unmountOnExit
            >
              <FloatingButton ref={fabRef}>
                <Link to="contact-section" smooth={true} duration={500}>
                  <img
                    src={whatsappImg}
                    className="h-28 animate-[shakeAndZoom_7s_infinite_ease-in-out]"
                  />
                </Link>
              </FloatingButton>
            </CSSTransition>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}

export default App;
