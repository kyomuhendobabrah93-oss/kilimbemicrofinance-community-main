import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const slides = [
  {
    title: "We offer various loans",
    subtitle: "Empowering communities with accessible financial solutions",
    cta1: { label: "Our Loans", href: "#loans" },
    cta2: { label: "Get in touch", href: "#contact" },
  },
  {
    title: "Our different Accounts",
    subtitle: "Flexible savings accounts tailored to your needs",
    cta1: { label: "Our Accounts", href: "#services" },
    cta2: { label: "Get in touch", href: "#contact" },
  },
  {
    title: "We offer other services",
    subtitle: "Beyond banking — complete financial partnership",
    cta1: { label: "Other Services", href: "#services" },
    cta2: { label: "Get in touch", href: "#contact" },
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="relative z-10 container h-full flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.p
              className="text-primary-foreground/70 text-sm md:text-base font-medium tracking-wide uppercase mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Kilimbe Microfinance (U) Ltd
            </motion.p>
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 max-w-3xl leading-[1.1]">
              {slide.title}
            </h2>
            <p className="text-primary-foreground/70 text-lg md:text-xl max-w-xl mb-8">
              {slide.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold px-8 rounded-full shadow-lg hover:shadow-xl transition-all group"
              >
                <a href={slide.cta1.href}>
                  {slide.cta1.label}
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-heading font-semibold px-8 rounded-full backdrop-blur-sm"
              >
                <a href={slide.cta2.href}>{slide.cta2.label}</a>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <div className="flex gap-3 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="group relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
              style={{ width: i === current ? "3rem" : "1.5rem" }}
            >
              <div className="absolute inset-0 bg-primary-foreground/20 rounded-full" />
              {i === current && (
                <motion.div
                  className="absolute inset-0 bg-primary rounded-full"
                  layoutId="activeSlide"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
