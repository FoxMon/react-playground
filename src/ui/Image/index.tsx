import { Suspense } from "react";
import { useImageLazyLoad } from "../../hooks/useImageLazyLoad";
import { Spinner } from "../Spinner";
import { ImageBase } from "./style";

interface ImageCache {
  __cache: {
    [src: string]: Promise<unknown> | boolean;
  };
  read: (src: string) => Promise<unknown> | boolean;
}

interface ImageCompProps {
  isLazy: boolean;
  imageSrc: string;
  placeholder: string;
  alt: string;
  bottomViewMargin?: string;
}

const imageCache: ImageCache = {
  __cache: {},
  read(src: string): Promise<unknown> | boolean {
    if (!this.__cache[src]) {
      this.__cache[src] = new Promise((resolve) => {
        const image = new Image();

        image.onload = () => {
          this.__cache[src] = true;
          resolve(this.__cache);
        };

        image.src = src;
      }).then(() => {
        this.__cache[src] = true;
      });
    }

    if (this.__cache[src] instanceof Promise) {
      throw this.__cache[src];
    }

    return this.__cache[src];
  },
};

const SuspenseImage = ({
  isLazy,
  imageSrc,
  placeholder,
  alt,
  bottomViewMargin,
}: ImageCompProps) => {
  const { src, imageRef } = useImageLazyLoad(
    imageSrc,
    placeholder,
    bottomViewMargin,
    isLazy
  );

  imageCache.read(src);

  return <ImageBase src={src} ref={imageRef} alt={alt} />;
};

export const ImageComp = ({
  isLazy,
  imageSrc,
  placeholder,
  alt,
  bottomViewMargin,
}: ImageCompProps) => {
  return (
    <Suspense fallback={<Spinner />}>
      <SuspenseImage
        isLazy={isLazy}
        imageSrc={imageSrc}
        placeholder={placeholder}
        alt={alt}
        bottomViewMargin={bottomViewMargin}
      />
    </Suspense>
  );
};
