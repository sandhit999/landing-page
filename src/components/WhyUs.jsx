import { motion } from "framer-motion";

const features = {
  left: [
    {
      title: "Who sells, delivers",
      desc: "No handoff to junior teams after contract",
      icon: "🤝",
    },
    {
      title: "Local accountability",
      desc: "KSA-based decision makers, not offshore escalation",
      icon: "📍",
    },
    {
      title: "Named resources",
      desc: "Know exactly who works on your account",
      icon: "👤",
    },
  ],
  right: [
    {
      title: "Replacement guarantee",
      desc: "90/60/30 day free replacement across all tiers",
      icon: "🔄",
    },
    {
      title: "Transparent pricing",
      desc: "No hidden costs, scope defined upfront",
      icon: "💎",
    },
    {
      title: "Tiered focus",
      desc: "Three focused tiers, not generic 'end-to-end' claims",
      icon: "🎯",
    },
  ],
};

const FeatureCard = ({ title, desc, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ scale: 1.02, borderColor: "rgba(6,182,212,0.4)" }}
    className="bg-[#0f2340]/60 border border-blue-900/50 rounded-xl p-5 cursor-default transition-all duration-300"
  >
    <div className="flex items-start gap-3">
      <span className="text-xl">{icon}</span>
      <div>
        <h4 className="text-white font-bold text-sm mb-1">{title}</h4>
        <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
      </div>
    </div>
  </motion.div>
);

const WhyUs = () => {
  return (
    <section id="about" className="bg-[#0d1b2e] py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-3"
        >
          Why Us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-black text-white mb-2"
        >
          Built on Accountability. Proven in Execution.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-sm mb-12"
        >
          We built AIM to be the company we wished existed when we were the clients.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left Features */}
          <div className="space-y-4">
            {features.left.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={i * 0.1} />
            ))}
          </div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="rounded-xl overflow-hidden relative"
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
              alt="Business Meeting"
              className="w-full h-full object-cover rounded-xl"
              style={{ minHeight: 320 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent rounded-xl" />

            {/* Bottom center card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] bg-[#0f2340] border border-blue-900/60 rounded-xl p-4 text-center"
            >
              <h4 className="text-white font-bold text-sm mb-1">🌐 Local + Global</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Local relationship managers backed by international consulting expertise
              </p>
            </motion.div>
          </motion.div>

          {/* Right Features */}
          <div className="space-y-4 mt-0 lg:mt-0">
            {features.right.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={i * 0.1 + 0.2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
