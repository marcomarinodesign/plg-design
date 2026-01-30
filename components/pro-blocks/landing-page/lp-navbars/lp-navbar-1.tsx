"use client";

import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MENU_ITEMS = [
  { label: "Cómo funciona", href: "#" },
  { label: "Nuestro ADN", href: "#" },
  { label: "Asistentes virtuales", href: "#", hasDropdown: true },
  { label: "Precios", href: "#" },
  { label: "Funcionalidades", href: "#", hasDropdown: true },
] as const;

interface NavMenuItemsProps {
  className?: string;
}

const NavMenuItems = ({ className }: NavMenuItemsProps) => (
  <div className={`flex flex-col gap-1 md:flex-row md:items-center ${className ?? ""}`}>
    {MENU_ITEMS.map((item) => (
      <Link key={item.label} href={item.href}>
        <Button variant="ghost" className="w-full justify-start gap-1 md:w-auto md:justify-center">
          {item.label}
          {"hasDropdown" in item && item.hasDropdown && (
            <ChevronDown className="size-3.5 shrink-0" aria-hidden />
          )}
        </Button>
      </Link>
    ))}
  </div>
);

export function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-background sticky top-0 isolate z-50 py-3.5 md:py-4">
      <div className="relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            aria-label="Go to homepage"
            className="relative flex h-16 w-16 max-w-full shrink-0 items-center justify-center overflow-hidden md:h-20 md:w-20"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="h-full w-full object-contain object-center"
            />
          </Link>
          <Button
            variant="ghost"
            className="flex size-9 items-center justify-center md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden w-full flex-row justify-end gap-5 md:flex">
          <NavMenuItems />
          <Link href="#">
            <Button>Empezar</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden">
            <NavMenuItems />
            <Link href="#">
              <Button className="w-full">Empezar</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
