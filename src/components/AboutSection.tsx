import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import aboutImg from "@/assets/kilimbe-about.webp";

const highlights = [
  { icon: Shield, label: "UMRA Regulated" },
  { icon: Award, label: "Leading in SW Uganda" },
  { icon: Users, label: "3 Networked Branches" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/50 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-heading">Kilimbe Microfinance (U) Ltd</p>
            <h2 className="section-title mb-6">About Us</h2>
            <p className="text-muted-foreground leading-relaxed text-base mb-8">
              KILIMBE MICROFINANCE UGANDA LIMITED IS A microfinance institution regulated and supervised by Uganda microfinance regulatory authority (UMRA). FROM Inception, Kilimbe microfinance Uganda limited has grown to become the leading microfinance institution in south western region of Uganda, providing innovative financial solutions to the economically vulnerable people. Kilimbe microfinance Uganda limited serves its clients through 3 networked branches spread across the region and two contact offices.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-2 bg-card rounded-full px-4 py-2 text-sm font-medium text-foreground modern-shadow border border-border">
                  <h.icon className="h-4 w-4 text-primary" />
                  {h.label}
                </div>
              ))}
            </div>

            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold px-8 rounded-full shadow-md group"
            >
              <a href="#about">
                About Us
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden modern-shadow-lg">
              <img
                src={aboutImg}
                alt="Kilimbe Microfinance Uganda Limited office"
                className="w-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
            </div>
            {/* Decorative accents */}
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-primary/10 rounded-3xl -z-10" />
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-secondary/10 rounded-3xl -z-10" />
            <div className="absolute top-1/2 -right-3 w-6 h-6 bg-primary rounded-full animate-float" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
