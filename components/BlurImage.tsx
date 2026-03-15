"use client";

import { useState, useEffect, useRef } from "react";

export function BlurImage({ src, alt, className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [isLoading, setLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoading(false);
    }
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`
        ${className}
        transition-all duration-700 ease-in-out
        ${isLoading ? "scale-105 blur-md grayscale" : "scale-100 blur-0 grayscale-0"}
      `}
      onLoad={() => setLoading(false)}
      {...props}
    />
  );
}