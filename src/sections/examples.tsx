import { Card } from "../components/Card";
import { decors, hairs } from "../assets";
import { TitleSection } from "../components/Typography";
import { Element } from "react-scroll";
import { Carousel } from "../components/Carousel";
import { useMediaQuery } from "react-responsive";

export function ExamplesSection() {
  const isMediumScreen = useMediaQuery({ minWidth: "40rem" });

  return (
    <Element name="examples-section">
      <div className="mt-12 flex flex-col items-center">
        <TitleSection
          content="Clientes satisfechos"
          icon={decors[5]}
          id="hair-examples"
        />
        <div className="w-full xl:hidden">
          <Carousel slidesToShow={isMediumScreen ? 2 : 1}>
            {hairs.map((src) => (
              <div>
                <div className="flex w-full justify-center">
                  <Card key={src} imageSrc={src} w="max-w-60" />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="hidden flex-wrap-reverse items-start justify-center *:shrink-0 xl:flex">
          {hairs.map((src) => (
            <Card key={src} imageSrc={src} w="max-w-60" />
          ))}
        </div>
      </div>
    </Element>
  );
}
