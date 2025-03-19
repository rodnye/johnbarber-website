import { Card } from "../components/Card";
import { decors, hairs } from "../assets";
import { TitleSection } from "../components/Typography";

export function ExamplesSection() {
  
  return (
    <div className="mt-12 flex flex-col items-center">
      <TitleSection content="Clientes satisfechos" icon={decors[5]} id="hair-examples" />
      <div className="flex items-start overflow-x-scroll *:shrink-0 lg:flex-wrap-reverse lg:justify-center lg:overflow-x-visible">
        {hairs.map((src) => (
          <Card key={src} imageSrc={src}/>
        ))}
      </div>
    </div>
  );
}
