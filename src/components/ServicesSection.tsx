import { DollarSign, BarChart3, Target, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: DollarSign,
    title: "Loans",
    description: "Kilimbe Microfinance Uganda Limited offer different types of loans as described..",
    href: "#loans",
    color: "from-primary to-primary-glow",
  },
  {
    icon: BarChart3,
    title: "Accounts",
    description: "There are various types of saving Accounts offered by Kilimbe Microfinance Uganda Limited..",
    href: "#services",
    color: "from-secondary to-accent",
  },
  {
    icon: Target,
    title: "Other Services",
    description: "There are other various services offered by Kilimbe Microfinance Uganda Limited as follows..",
    href: "#services",
    color: "from-primary to-secondary",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-6 -mt-28 relative z-20">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 text-center modern-shadow hover:modern-shadow-lg transition-all duration-300 border border-border group hover:-translate-y-1"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                <service.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                {service.description}
              </p>
              <a
                href={service.href}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm group-hover:underline underline-offset-4"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
