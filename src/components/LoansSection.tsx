import { Briefcase, Wheat, GraduationCap, Store, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const loans = [
  {
    icon: Briefcase,
    title: "Salary loan",
    description: "This product is designed for civil servants and private sector salaried employees.",
  },
  {
    icon: Wheat,
    title: "Agricultural loans",
    description: "This loan targets clients in rural or peri-urban areas engaged in agribusiness activities",
  },
  {
    icon: GraduationCap,
    title: "School fees loan (SFL)",
    description: "This enables a parent or guardian or student to access funds to clear school fees",
  },
  {
    icon: Store,
    title: "Business loans",
    description: "For business people, this loan helps then to develop and expand their business.",
  },
];

const LoansSection = () => {
  return (
    <section id="loans" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-heading">Loans</p>
          <h2 className="section-title mb-12">Types of loans that we offer</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {loans.map((loan, i) => (
            <motion.div
              key={loan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:modern-shadow-lg transition-all duration-300 group cursor-pointer hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <loan.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h4 className="font-heading font-bold text-foreground mb-2 text-lg">{loan.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{loan.description}</p>
            </motion.div>
          ))}
        </div>

        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold px-8 rounded-full shadow-md group">
          <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
          OUR LOANS
        </Button>
      </div>
    </section>
  );
};

export default LoansSection;
