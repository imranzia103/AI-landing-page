import React from "react";
import { Container } from "../shared/Container";

const NavItems = [
  {
    href: "#",
    text: "Home",
  },
  { href: "# about-us", text: "About" },
  { href: "#services", text: "Services" },
  { href: "#features", text: "Features" },
];

export const Navbar = () => {
  return (
    <header className=" absolute inset-x-0 top-0 p-y-6 z-50">
      <Container>
        <nav className="flex items-center justify-between gap-6 relative">
          <div className=" min-w-max inline-flex relative">
            <a href="/" className="flex items-center relative gap-3">
              <img
                src="../src/assets/icon.svg"
                alt="EadgeAI logo"
                className="w-10 h-10"
              />
              <div className="inline-flex flex-col gap-1 text-lg font-semibold text-heading-1">EadgeAI

              </div>
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
};
