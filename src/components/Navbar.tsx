import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="absolute top-0 w-full z-50 px-8 py-6 flex flex-col md:flex-row justify-between items-center bg-transparent backdrop-blur-sm gap-4 md:gap-0 text-white">
        <div className="flex gap-8 text-xs font-bold tracking-[0.3em] uppercase opacity-80">
          <a className="hover:opacity-100 transition-opacity" href="#work">Work</a>
          <a className="hover:opacity-100 transition-opacity" href="#about">About</a>
        </div>
        <div className="md:absolute md:left-1/2 md:-translate-x-1/2 text-lg font-black tracking-[0.5em] uppercase mt-2 md:mt-0">
          ARCHITA
        </div>
        <div className="flex gap-8 text-xs font-bold tracking-[0.3em] uppercase opacity-80">
          <a className="hover:opacity-100 transition-opacity" href="#shop">Skills</a>
          <a className="hover:opacity-100 transition-opacity" href="#contact">Contact</a>
        </div>
      </nav>
  );
};

export default Navbar;
