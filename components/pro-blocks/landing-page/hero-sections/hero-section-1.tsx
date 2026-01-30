"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";

const PLATFORMS = [
  { id: "web", label: "Web", icon: "globe", selected: true },
  { id: "instagram", label: "Instagram", icon: "instagram" },
  { id: "maps", label: "G Maps", icon: "maps" },
  { id: "facebook", label: "Facebook", icon: "facebook" },
  { id: "linkedin", label: "Linkedin", icon: "linkedin" },
] as const;

export interface HeroSection1Props {
  title?: string;
  subtitle?: string;
  tagline?: string;
  badge?: string;
  primaryCta?: { label: string; href?: string };
  secondaryCta?: { label: string; href?: string };
  imageSrc?: string;
  imageAlt?: string;
}

export function HeroSection1({
  title = "Desbloquea tu potencial",
  subtitle = "Analizamos tu presencia digital y te mostramos cómo activar más clientes.",
  tagline,
  badge = "What's new-",
  primaryCta = { label: "Web", href: "/dashboard" },
  secondaryCta = { label: "Explorar", href: "/dashboard" },
  imageSrc = "/hero-collage.png",
  imageAlt = "Montaje de personas en entornos profesionales",
}: HeroSection1Props = {}) {
  return (
    <section
      className="bg-background section-padding-y"
      aria-labelledby="hero-heading"
    >
      <div className="container-padding-x container mx-auto flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* Columna izquierda: badge, título, plataformas, input, trusted by (Figma 1103-4293) */}
        <div className="flex flex-1 flex-col gap-4 lg:gap-8">
          {/* Badge con punto verde */}
          {badge && (
            <div className="flex items-center gap-1.5 text-sm font-medium text-black">
              <span className="size-2 rounded-full bg-[#beff50]" aria-hidden />
              <span>{badge}</span>
            </div>
          )}

          <div className="flex flex-col gap-4">
            <h1
              id="hero-heading"
              className="font-(family-name:--font-inter) text-[40px] font-extrabold leading-[1.15] tracking-[-2px] text-[#0a0a0a] lg:text-[60px] lg:leading-[80px]"
            >
              {title}
            </h1>
            <p className="text-base text-[#525252] lg:text-lg">
              {subtitle}
            </p>
          </div>

          {/* Fila de plataformas: Web (activo), Instagram, G Maps, Facebook, Linkedin */}
          <div className="flex flex-wrap items-center gap-2">
            {PLATFORMS.map((platform) => {
              const isWeb = platform.id === "web";
              if (isWeb) {
                return (
                  <Button
                    key={platform.id}
                    variant="dark"
                    size="sm"
                    className="gap-1.5"
                    asChild={!!primaryCta?.href}
                  >
                    {primaryCta?.href ? (
                      <Link href={primaryCta.href}>
                        <Globe className="size-4 text-white" aria-hidden />
                        {platform.label}
                      </Link>
                    ) : (
                      <>
                        <Globe className="size-4 text-white" aria-hidden />
                        {platform.label}
                      </>
                    )}
                  </Button>
                );
              }
              return (
                <Button
                  key={platform.id}
                  variant="ghost"
                  size="sm"
                  className="gap-1.5 text-black hover:bg-black/5"
                >
                  {platform.icon === "instagram" && (
                    <Image
                      src="/icons/instagram.png"
                      alt=""
                      width={20}
                      height={20}
                      className="size-5 object-contain"
                      aria-hidden
                    />
                  )}
                  {platform.icon === "maps" && (
                    <Image
                      src="/icons/google.png"
                      alt=""
                      width={20}
                      height={20}
                      className="size-5 object-contain"
                      aria-hidden
                    />
                  )}
                  {platform.icon === "facebook" && (
                    <Image
                      src="/icons/facebook.png"
                      alt=""
                      width={20}
                      height={20}
                      className="size-5 object-contain"
                      aria-hidden
                    />
                  )}
                  {platform.icon === "linkedin" && (
                    <Image
                      src="/icons/linkedin.png"
                      alt=""
                      width={20}
                      height={20}
                      className="size-5 object-contain"
                      aria-hidden
                    />
                  )}
                  {platform.label}
                </Button>
              );
            })}
          </div>

          {/* Input URL + botón circular verde */}
          {secondaryCta && (
            <div className="flex w-full max-w-md items-center gap-2 rounded-full border border-[#e5e5e5] bg-[#fafafa] px-4 py-2.5 shadow-sm">
              <Globe className="size-5 shrink-0 text-[#737373]" aria-hidden />
              <input
                type="text"
                placeholder="tuempresa.com"
                className="min-w-0 flex-1 border-0 bg-transparent text-base text-black placeholder:text-[#a3a3a3] outline-none"
                aria-label="Dominio de tu empresa"
              />
              <Button
                asChild
                size="icon-lg"
                className="shrink-0 rounded-full bg-[#beff50] text-black hover:bg-[#a8e648] focus-visible:ring-[#beff50]/50"
              >
                <Link href={secondaryCta.href ?? "#"} aria-label="Ir al dashboard">
                  <ArrowRight className="size-6" aria-hidden />
                </Link>
              </Button>
            </div>
          )}

          <p className="text-sm text-[#a3a3a3]">
            Trusted by the world&apos;s best companies
          </p>
        </div>

        {/* Columna derecha: imagen única */}
        <div className="w-full flex-1 rounded-xl overflow-hidden bg-white">
          <AspectRatio ratio={1 / 1} className="rounded-xl bg-white">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              className="h-full w-full rounded-xl object-cover bg-white"
              unoptimized
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}
