
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-white/30 backdrop-blur-md"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <div className="font-semibold text-xl text-foreground">Sweden-Brazil XR & AI Research Network</div>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#team" className="hover:text-primary transition-colors">Team</a>
            <a href="#research" className="hover:text-primary transition-colors">Research</a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
