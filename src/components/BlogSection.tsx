import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.png";

const posts = [
  {
    image: blog1,
    title: "Sustainable Dev't focus as per Kilimbe Microfinance (U) Ltd",
    category: "Sustainability",
    date: "Latest",
  },
  {
    image: blog2,
    title: "Kilimbe Microfinance (U) Ltd offers different loan products",
    category: "Products",
    date: "Latest",
  },
  {
    image: blog3,
    title: "Kilimbe Microfinance (U) Ltd stretches out wider and deeper",
    category: "Growth",
    date: "Latest",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <p className="section-heading">Our Blog</p>
            <h2 className="section-title">Read Our Latest Insights</h2>
          </div>
          <a
            href="#blog"
            className="inline-flex items-center gap-2 text-primary font-heading font-semibold hover:gap-3 transition-all text-sm"
          >
            View All <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden modern-shadow hover:modern-shadow-lg transition-all duration-300 group border border-border hover:-translate-y-1 cursor-pointer"
            >
              <div className="overflow-hidden h-52 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </div>
                <h3 className="font-heading font-bold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
