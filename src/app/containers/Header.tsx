"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";

const Header = () => {
  // States
  const [navBackground, setNavBackground] = useState("transparent");

  //   Utils
  const handleScroll = () => {
    if (!typeof window) {
      return;
    }

    const currentScrollY = window.scrollY as number;

    if ((currentScrollY as number) > 200) {
      setNavBackground("#1a1a1a");
    } else {
      setNavBackground("transparent");
    }
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      const container = window;

      if (container) {
        container.addEventListener("scroll", handleScroll);
      }

      return () => {
        if (container) {
          container.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, []);

  return (
    <header
      className={`h-headerHeight flex items-center gap-1 text-body font-bold text-lg py-6 lg:px-20 px-4 fixed top-0 w-full left-0 z-10 transition-all`}
      style={{ background: navBackground }}
    >
      <Image src={logo} alt="Bloocode Logo" />
      <h1>Bloocode Movies</h1>
    </header>
  );
};

export default Header;
