
import { useEffect, useState } from "react";

export const useImageLoader = (list: (string|undefined)[]) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    
    Promise.all(
      list.map((src) => {
        return new Promise<void>((resolve) => {
          if (!src) return resolve();

          const image = new Image();
          image.src = src;
          image.onload = () => {
            resolve();
          }
          image.onerror = () => {
            setHasError(true);
            resolve();
          };
        });
      }),
    ).then(() => {
      console.log("loaded all!")
      setIsLoaded(true);
    });
    
  }, []);

  return { isLoaded, hasError };
};

export const useCSSLoader = (list: string[]) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    
    Promise.all(
      list.map((src) => {
        return new Promise<void>((resolve) => {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = src;
          console.log("loading:" + src);
          document.head.appendChild(link);
          link.onload = () => {
            console.log("ready:" + src);
            resolve();
          }
          link.onerror = () => {
            setHasError(true);
            resolve();
          };
        });
      }),
    ).then(() => {
      setIsLoaded(true);
    });

  }, []);

  return { isLoaded, hasError };
};
