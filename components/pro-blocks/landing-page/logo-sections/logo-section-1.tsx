"use client";

import Image from "next/image";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

const CAROUSEL_IMAGES = [
  { src: "/carousel-1.png", alt: "+40% website traffic" },
  { src: "/carousel-2.png", alt: "+ Trust on social media" },
  { src: "/carousel-3.png", alt: "+ Reach on social media" },
] as const;

export interface LogoSection1Props {
  /** When true, only the logo strip is shown (no title or description). */
  logosOnly?: boolean;
}

export function LogoSection1({ logosOnly = false }: LogoSection1Props) {
  const repeatedImages = [...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES];

  return (
    <section
      className={
        logosOnly
          ? "bg-background pt-2 pb-10"
          : "bg-background section-padding-y"
      }
    >
      {!logosOnly && (
        <div className="container-padding-x container mx-auto">
          <div className="section-title-gap-lg flex max-w-xl flex-col items-center gap-12 pb-12 text-center md:gap-16 md:pb-16">
            <Tagline>Logo section</Tagline>
            <h2 className="heading-lg text-foreground">
              Showcase that builds trust
            </h2>
            <p className="text-muted-foreground">
              Add logos of notable companies using your product. Include 4-6
              recognizable brands in grayscale to maintain visual consistency.
              Ensure logos are properly scaled and aligned with equal spacing.
            </p>
          </div>
        </div>
      )}

      {/* Carrusel a ancho completo fuera del contenedor */}
      <div className="w-full overflow-hidden">
        <div className="flex flex-nowrap gap-6 md:gap-8 animate-marquee w-max">
          {[0, 1].map((copy) =>
            repeatedImages.map((item, index) => (
              <div
                key={`${copy}-${index}`}
                className="flex shrink-0 w-[240px] md:w-[280px] items-center justify-center"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={280}
                  height={180}
                  className="h-auto w-full rounded-xl object-contain"
                />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
