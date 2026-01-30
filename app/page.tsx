import { Hero } from "@/components/layout/Hero";
import { LogoSection1 } from "@/components/pro-blocks/landing-page/logo-sections/logo-section-1";
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <LpNavbar1 />
      <Hero
        title="Desbloquea tu potencial"
        subtitle="Analizamos tu presencia digital y te mostramos cómo activar más clientes."
        badge="What's new-"
        primaryCta={{ label: "Web", href: "/dashboard" }}
        secondaryCta={{ label: "Explorar", href: "/dashboard" }}
        imageSrc="/hero-collage.png"
        imageAlt="Montaje de personas en entornos profesionales: emprendimiento y diversidad"
      />
      <LogoSection1 logosOnly />
    </div>
  );
}
