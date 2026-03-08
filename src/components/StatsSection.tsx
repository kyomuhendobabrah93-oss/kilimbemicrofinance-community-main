import { Users, CheckCircle, Building2, Heart } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Users, label: "Trusted Clients", value: "2,000+" },
  { icon: CheckCircle, label: "Finished Projects", value: "500+" },
  { icon: Building2, label: "Branches", value: "3" },
  { icon: Heart, label: "People helped", value: "5,000+" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-glow relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center text-primary-foreground"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
                <stat.icon className="h-7 w-7" />
              </div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-1 tracking-tight">{stat.value}</div>
              <div className="text-sm opacity-70 font-medium tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
