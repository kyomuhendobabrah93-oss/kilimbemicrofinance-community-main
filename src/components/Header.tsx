import { useState, useEffect } from "react";
import { Menu, X, Facebook, Phone, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import kilimbeLogo from "@/assets/kilimbe-logo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Blog", href: "#blog" },
    { label: "Contacts", href: "#contact" },
  ];

  return (
    <header className="w-full z-50 sticky top-0">
      {/* Top bar */}
      <div className={`bg-secondary text-secondary-foreground transition-all duration-300 ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"}`}>
        <div className="container flex items-center justify-between py-2 text-xs">
          <a href="#" className="hover:text-primary transition-colors">
            <Facebook className="h-3.5 w-3.5" />
          </a>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3 w-3 text-primary" />
              +256 (0)200 954 596
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <MapPin className="h-3 w-3 text-primary" />
              Kilimbe Trading Center
            </span>
            <span className="hidden md:inline">0394718713</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`bg-card/80 backdrop-blur-xl transition-all duration-300 ${scrolled ? "shadow-lg border-b border-border" : ""}`}>
        <div className="container flex items-center justify-between py-3">
          <a href="#" className="flex items-center gap-3 group">
            <img src={kilimbeLogo} alt="Kilimbe Microfinance Logo" className="w-11 h-11 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all" />
            <div>
              <h1 className="font-heading font-bold text-base leading-tight text-foreground">
                Kilimbe Microfinance
              </h1>
              <span className="text-xs text-muted-foreground">(U) Ltd</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 text-foreground/80 hover:text-primary transition-colors font-medium text-sm rounded-lg hover:bg-primary/5"
              >
                {item.label}
              </a>
            ))}
            <Button className="ml-4 bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold px-6 rounded-full shadow-md hover:shadow-lg transition-all">
              <ChevronRight className="h-4 w-4 mr-1" />
              APPLY FOR LOAN
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-foreground p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-card border-t border-border"
            >
              <div className="py-3">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="block px-6 py-3 text-foreground hover:text-primary hover:bg-primary/5 transition-colors font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <div className="px-6 pt-3 pb-2">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold rounded-full">
                    APPLY FOR LOAN
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
