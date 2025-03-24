import { JSX, useState } from "react";

interface CarouselProps<T> {
  items: T[];
  itemTemplate: (item: T) => JSX.Element;
}

export function Carousel<T>({ items, itemTemplate }: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length,
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex justify-center transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {itemTemplate(item)}
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 -translate-y-1/2 transform bg-gray-800 p-2 text-white"
      >
        Previous
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 -translate-y-1/2 transform bg-gray-800 p-2 text-white"
      >
        Next
      </button>
      <div className="mt-2 flex justify-center">
        {items.map((_, index) => (
          <span
            key={index}
            className={`mx-1 h-2 w-2 rounded-full ${index === currentIndex ? "bg-gray-800" : "bg-gray-400"}`}
          ></span>
        ))}
      </div>
    </div>
  );
}
