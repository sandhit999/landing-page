import { motion } from "framer-motion";

const industries = [
  { name: "Government & Semi-Government", icon: "🏛️" },
  { name: "Large Enterprises", icon: "🏢" },
  { name: "Financial Services", icon: "💰" },
  { name: "Healthcare", icon: "🏥" },
  { name: "Logistics & Supply Chain", icon: "🚚" },
  { name: "Construction & Real Estate", icon: "🏗️" },
  { name: "Retail & Consumer Businesses", icon: "🛒" },
  { name: "Trading & Industrial", icon: "📈" },
  { name: "Manufacturing", icon: "🏭" },
];

const Industries = () => {
  return (
    <section id="industries" className="bg-[#0d1b2e] py-24 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-3"
        >
          Industries We Serve
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-black text-white mb-3"
        >
          Where Our Expertise Delivers Impact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-sm mb-12 max-w-xl"
        >
          AIM IT Services provides manpower consulting and IT services across nine sectors in the Kingdom of Saudi Arabia
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-blue-900/40 rounded-2xl overflow-hidden">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              whileHover={{ backgroundColor: "rgba(6,182,212,0.06)" }}
              className={`flex flex-col items-center justify-center gap-3 p-8 border-blue-900/40 cursor-default transition-all duration-300 group
                ${i % 3 !== 2 ? "border-r" : ""}
                ${i < 6 ? "border-b" : ""}
              `}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-4xl"
              >
                {ind.icon}
              </motion.div>
              <p className="text-blue-300 group-hover:text-cyan-300 text-sm font-semibold text-center transition-colors duration-300">
                {ind.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
