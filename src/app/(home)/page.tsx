"use client";

import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useCSSLoader, useImageLoader } from "@/utils/loader";
import { Loader } from "@/components/Loader";

import { HomeSection } from "@/sections/home";
import { ExamplesSection } from "@/sections/examples";
import { ServicesSection } from "@/sections/services";
import { ContactSection } from "@/sections/contact";

import textLogoImg from "@/assets/text_logo.svg";
import whatsappImg from "@/assets/whatsapp_logo.svg";
import heroImg from "@/assets/hero.jpg";
import { VisitCounter } from "@/components/VisitCounter";
import { MapSection } from "@/sections/map";
import { Footer } from "@/sections/footer";

export default function Home() {
  const [showVisitCounter, setShowVisitCounter] = useState(false);

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
  const navbarRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // a fake additional time for loader
    setTimeout(
      () => setReadyDelay(true),
      Math.round(Math.random() * 5000 + 2000),
    );

    setTimeout(() => setShowVisitCounter(true), 3000);
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
            <HomeSection navbarRef={navbarRef} />

            <div className="flex w-full justify-center">
              <VisitCounter />
            </div>
            <ExamplesSection />
            <ServicesSection />
            <ContactSection ref={contactSectionRef} />
            <MapSection />

            <Footer />
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
