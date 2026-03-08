import { Phone, MapPin, Mail, Facebook, ArrowRight } from "lucide-react";
import kilimbeLogo from "@/assets/kilimbe-logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-section-dark text-section-dark-foreground relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container py-20 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={kilimbeLogo} alt="Kilimbe Microfinance Logo" className="w-11 h-11 rounded-full object-cover ring-2 ring-primary/20" />
              <div>
                <h3 className="font-heading font-bold text-lg">Kilimbe Microfinance</h3>
                <span className="text-xs text-section-dark-foreground/50">(U) Ltd</span>
              </div>
            </div>
            <p className="text-section-dark-foreground/50 leading-relaxed text-sm max-w-xs">
              A microfinance institution regulated and supervised by Uganda Microfinance Regulatory Authority (UMRA).
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {["Home", "About Us", "Our Services", "Blog", "Contacts"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-section-dark-foreground/50 hover:text-primary transition-colors inline-flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-5 text-sm uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-section-dark-foreground/60">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                +256 (0)200 954 596
              </div>
              <div className="flex items-center gap-3 text-section-dark-foreground/60">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                Kilimbe Trading Center
              </div>
              <div className="flex items-center gap-3 text-section-dark-foreground/60">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                info@kilimbemicrofinanceultd.com
              </div>
              <div className="flex gap-3 mt-5">
                <a href="#" className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-section-dark-foreground/5 py-5">
        <div className="container text-center text-xs text-section-dark-foreground/30">
          © {new Date().getFullYear()} Kilimbe Microfinance (U) Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
