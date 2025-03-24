import { Card } from "../components/Card";
import { decors, hairs } from "../assets";
import { TitleSection } from "../components/Typography";
import { Element } from "react-scroll";

export function ExamplesSection() {
  return (
    <Element name="examples-section">
      <div className="mt-12 flex flex-col items-center">
        <TitleSection
          content="Clientes satisfechos"
          icon={decors[5]}
          id="hair-examples"
        />
        <div className="flex flex-wrap-reverse items-start justify-center *:shrink-0">
          {hairs.map((src) => (
            <Card key={src} imageSrc={src} w="max-w-60" />
          ))}
        </div>
      </div>
    </Element>
  );
}
