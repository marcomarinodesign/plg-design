import {
  HeroSection1,
  type HeroSection1Props,
} from "@/components/pro-blocks/landing-page/hero-sections/hero-section-1";

export interface HeroProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  primaryCta?: { label: string; href?: string };
  secondaryCta?: { label: string; href?: string };
  imageSrc?: string;
  imageAlt?: string;
}

export function Hero({
  title,
  subtitle,
  tagline,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
}: HeroProps = {}) {
  const props: HeroSection1Props = {
    title,
    subtitle,
    tagline,
    primaryCta,
    secondaryCta,
    imageSrc,
    imageAlt,
  };
  return <HeroSection1 {...props} />;
}
