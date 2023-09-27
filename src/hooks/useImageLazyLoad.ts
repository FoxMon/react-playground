import { useState, useRef, useEffect, MutableRefObject } from "react";
import { useObserver } from "./useObserver";

interface ImageLazyLoad {
  src: string;
  imageRef: MutableRefObject<HTMLImageElement | null>;
}

export const useImageLazyLoad = (
  imageSrc: string,
  placeholder: string,
  bottomViewMargin = "100px",
  isLazy: boolean
): ImageLazyLoad => {
  const [src, setSrc] = useState<string>(isLazy ? placeholder : imageSrc);

  const imageRef = useRef<HTMLImageElement | null>(null);

  const { observer } = useObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            setSrc(src);
          };
        }
      });
    },
    {
      rootMargin: `0px 0px ${bottomViewMargin} 0px`,
      threshold: 0.5,
    }
  );

  useEffect(() => {
    const img = imageRef.current;

    if (!isLazy) {
      setSrc(src);
      return;
    }

    if (img && observer) {
      if (observer) {
        observer.observe(img);
      }
    }

    return () => {
      if (img && observer) {
        observer.unobserve(img);
      }
    };
  }, [src, bottomViewMargin, isLazy, observer]);

  return {
    src,
    imageRef,
  };
};
