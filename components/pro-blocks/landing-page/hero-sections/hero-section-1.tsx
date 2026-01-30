"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";

export interface HeroSection1Props {
  title?: string;
  subtitle?: string;
  tagline?: string;
  primaryCta?: { label: string; href?: string };
  secondaryCta?: { label: string; href?: string };
  imageSrc?: string;
  imageAlt?: string;
}

export function HeroSection1({
  title = "Headline that solves user's main problem",
  subtitle = "Follow with one or two sentences that expand on your value proposition. Focus on key benefits and address why users should take action now. Keep it scannable, short and benefit-driven.",
  tagline = "Hero Section",
  primaryCta = { label: "Get started" },
  secondaryCta = { label: "Explore", href: "#" },
  imageSrc = "https://ui.shadcn.com/placeholder.svg",
  imageAlt = "Hero section visual",
}: HeroSection1Props = {}) {
  return (
    <section
      className="bg-background section-padding-y"
      aria-labelledby="hero-heading"
    >
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          <div className="section-title-gap-xl flex flex-col">
            {tagline ? <Tagline>{tagline}</Tagline> : null}
            <h1
              id="hero-heading"
              className="inline-block w-full text-left font-(family-name:--font-inter) text-[40px] font-extrabold leading-[1.15] tracking-[-1.5px] text-[#0a0a0a] lg:text-[60px] lg:leading-[80px]"
            >
              {title}
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            {primaryCta &&
              (primaryCta.href ? (
                <Button asChild>
                  <Link href={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
              ) : (
                <Button>{primaryCta.label}</Button>
              ))}
            {secondaryCta &&
              (secondaryCta.href ? (
                <Button variant="ghost" asChild>
                  <Link href={secondaryCta.href}>
                    {secondaryCta.label}
                    <ArrowRight />
                  </Link>
                </Button>
              ) : (
                <Button variant="ghost">
                  {secondaryCta.label}
                  <ArrowRight />
                </Button>
              ))}
          </div>
        </div>

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
