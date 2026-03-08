import { Clock, ThumbsUp, HeadphonesIcon, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import valuePropImg from "@/assets/value-prop.jpg";

const props = [
  { icon: Clock, label: "Fast turnaround time", desc: "Quick processing and disbursement" },
  { icon: ThumbsUp, label: "Ease of use", desc: "Simple application process" },
  { icon: HeadphonesIcon, label: "Excellent customer service", desc: "Dedicated support team" },
];

const ValueProposition = () => {
  return (
    <section className="py-24 bg-section-dark text-section-dark-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-heading">Kilimbe Microfinance (U) Ltd</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 leading-tight">
            Our Value Proposition
          </h2>
          <p className="text-section-dark-foreground/60 mb-12 max-w-2xl text-lg">
            Kilimbe microfinance Uganda limiteds' proposition to the market shall revolve around three key unique selling points. These are;
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            {props.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-center gap-5 glass-card rounded-2xl p-5 hover:bg-primary/5 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                  <item.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <span className="font-heading font-semibold text-lg block">{item.label}</span>
                  <span className="text-section-dark-foreground/50 text-sm">{item.desc}</span>
                </div>
                <CheckCircle2 className="h-5 w-5 text-primary/40 ml-auto flex-shrink-0" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl overflow-hidden modern-shadow-lg">
              <img
                src={valuePropImg}
                alt="Value proposition"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
