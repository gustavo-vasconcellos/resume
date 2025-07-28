import { useState, useEffect, useCallback } from "preact/hooks";
import { ThemeController } from "./ThemeController.tsx";
import { NavItem } from "../components/header/NavItem.tsx";
import { MenuButton } from "../components/header/MenuButton.tsx";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
] as const;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(globalThis.scrollY > 50);
    };

    globalThis.addEventListener("scroll", handleScroll);
    return () => globalThis.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleMenu = useCallback(() => {
    setIsMobileMenuOpen((isOpen) => !isOpen);
  }, [setIsMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 animate-slide-down ${
        isScrolled
          ? "bg-neutral/80 text-neutral-content backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="animate-fade-in">
            <span className="text-2xl font-bold text-primary transition-transform duration-300 hover:-translate-y-0.5 cursor-pointer">
              &lt;Portfolio/&gt;
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                name={item.name}
                href={item.href}
                index={index}
              />
            ))}

            <ThemeController />
          </div>
          <MenuButton
            isOpen={isMobileMenuOpen}
            mods={isScrolled ? "bg-base-100" : "bg-neutral"}
            onClick={handleToggleMenu}
          />
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isScrolled
              ? ""
              : "bg-neutral/80 text-neutral-content backdrop-blur-md shadow-lg"
          } ${isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="py-3">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                name={item.name}
                href={item.href}
                index={index}
                showing={isMobileMenuOpen}
                cb={handleToggleMenu}
              />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
