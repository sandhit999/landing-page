import { motion } from "framer-motion";

const services = [
  {
    pillar: "Pillar – 1",
    title: "IT Services",
    desc: "SAP advisory, AI & automation, web & mobile app development, managed IT, cloud, cybersecurity, smart manufacturing, and field support — structured by client tier.",
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    pillar: "Pillar – 2",
    title: "Manpower Consulting",
    desc: "Source, vet, and place IT professionals across all experience levels with retention guarantees on every placement.",
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#0d1b2e] py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-3"
        >
          What We Do
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-black text-white mb-14"
        >
          Services Built Around Your Operations
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.pillar}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(6,182,212,0.12)" }}
              className="bg-[#0f2340]/80 border border-blue-900/50 hover:border-cyan-500/40 rounded-xl p-8 cursor-pointer transition-all duration-300"
            >
              <div className="inline-flex items-center gap-2 bg-blue-900/40 border border-blue-700/40 rounded-full px-3 py-1 mb-6">
                <span className="text-blue-400 text-xs font-semibold tracking-wider">{s.pillar}</span>
              </div>
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              <motion.div
                className="mt-6 flex items-center gap-2 text-cyan-400 text-sm font-medium group cursor-pointer"
                whileHover={{ x: 4 }}
              >
                Learn more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
