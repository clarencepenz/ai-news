"use client";

import React from "react";

import Link from "next/link";
import { useMedia } from "react-use";
import { MenuIcon, XIcon } from "lucide-react";
import { LOGO } from "@/svg";
import cn from "@/lib/utils";
import Button from "./Button";

function EVFYLogo() {
  return (
    <Link href="/">
      <LOGO />
    </Link>
  );
}

function Navbar() {
  const isMobile = useMedia("(max-width: 1024px)", false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <nav className="container-screen  h-16 flex items-center justify-between">
      <EVFYLogo />
      <div
        className={cn(
          "justify-between items-center hidden lg:flex",
        )}
      >
        <div className="flex items-center">
          <Link
            href="/"
            className="block text-evfy-neutral-300 font-semibold leading-5 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Log In / Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <Button
        onClick={() => setMenuOpen((prev) => !prev)}
        size="icon"
        className="p-0 lg:hidden transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <MenuIcon
          className={cn("w-8 h-8", {
            hidden: menuOpen,
          })}
        />
      </Button>

      {/* Mobile menu items */}
      <div
        className={cn(
          "w-full transition-all duration-300 lg:hidden",
          {
            "slide-in-from-top-full top-0": menuOpen,
            "slide-out-to-top-full -top-[130%]": !menuOpen,
          },
          "fixed z-50 left-0 right-0 min-h-screen bg-white px-4  py-8 lg:relative lg:left-[unset] lg:right-[unset] lg:min-h-[unset] lg:p-0 ",
        )}
      >
        <div className="w-full pb-4  flex justify-between items-center">
          <EVFYLogo />
          <Button
            size="icon"
            className=" bg-transparent text-black"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <XIcon className="w-12 h-12 transition-colors hover:bg-accent hover:text-accent-foreground" />
          </Button>
        </div>
        <div className="flex flex-col items-start gap-4" />

        <div className="flex flex-col items-start">
          <Link
            href="/"
            className="block text-evfy-neutral-300 font-semibold leading-5 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Log In / Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
