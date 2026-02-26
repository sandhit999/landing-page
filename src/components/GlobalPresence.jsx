import { motion } from "framer-motion";

const countries = [
  {
    name: "Saudi Arabia",
    desc: "Headquarters, local team, operations management",
    dot: "bg-cyan-400",
    active: true,
  },
  { name: "Oman", desc: "Regional office (establishing)", dot: "bg-blue-400" },
  { name: "Bahrain", desc: "Regional office (establishing)", dot: "bg-blue-400" },
  { name: "UAE", desc: "Advisory and strategic partnerships", dot: "bg-blue-400" },
  { name: "Kuwait", desc: "Advisory and strategic partnerships", dot: "bg-blue-400" },
  { name: "India", desc: "Technology delivery and consulting capacity", dot: "bg-slate-400" },
  { name: "Pakistan", desc: "Software development and IT delivery capacity", dot: "bg-slate-400" },
];

const GlobalPresence = () => {
  return (
    <section className="bg-[#0b1629] py-24 px-6 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-3"
        >
          Our Global Presence
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-black text-white mb-3"
        >
          Wherever You Operate, We Deliver
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-sm mb-12 max-w-xl"
        >
          AIM is not a virtual company. We are building physical, accountable presence in every market we serve.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* World Map SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-[#0f2340]/50 rounded-2xl p-6 border border-blue-900/30">
              <svg viewBox="0 0 800 450" className="w-full opacity-70">
                {/* Simplified world map paths */}
                <g fill="#1e3a5f" stroke="#2d5a8e" strokeWidth="0.5">
                  {/* Americas */}
                  <path d="M80,80 L140,70 L160,90 L155,140 L130,160 L100,150 L75,130 Z" />
                  <path d="M120,165 L145,155 L160,180 L150,220 L125,240 L105,220 L110,190 Z" />
                  <path d="M130,250 L165,240 L175,280 L160,320 L135,310 L120,280 Z" />
                  {/* Europe */}
                  <path d="M340,60 L400,55 L415,80 L405,110 L375,115 L350,100 Z" />
                  {/* Africa */}
                  <path d="M355,130 L405,125 L420,170 L415,240 L385,270 L355,260 L340,220 L340,170 Z" />
                  {/* Middle East - highlighted */}
                  <path d="M420,110 L470,105 L485,130 L475,160 L445,165 L425,145 Z" fill="#1a4a7a" />
                  {/* Asia */}
                  <path d="M480,55 L600,50 L630,80 L620,140 L570,155 L510,145 L490,120 L480,90 Z" />
                  {/* South Asia */}
                  <path d="M530,155 L580,150 L595,190 L570,220 L535,210 L520,185 Z" fill="#1a3a6a" />
                  {/* Southeast Asia */}
                  <path d="M600,160 L650,155 L660,185 L640,200 L615,195 Z" />
                  {/* Australia */}
                  <path d="M620,270 L690,265 L710,300 L700,340 L665,350 L635,330 L620,300 Z" />
                </g>
                {/* KSA dot */}
                <circle cx="450" cy="140" r="6" fill="#22d3ee" opacity="0.9" />
                <circle cx="450" cy="140" r="12" fill="#22d3ee" opacity="0.2" />
                {/* Other dots */}
                <circle cx="460" cy="155" r="4" fill="#60a5fa" opacity="0.7" />
                <circle cx="440" cy="150" r="4" fill="#60a5fa" opacity="0.7" />
                <circle cx="470" cy="145" r="4" fill="#60a5fa" opacity="0.7" />
                <circle cx="555" cy="175" r="4" fill="#94a3b8" opacity="0.7" />
                <circle cx="545" cy="160" r="4" fill="#94a3b8" opacity="0.7" />
              </svg>
            </div>
          </motion.div>

          {/* Country List */}
          <div className="space-y-3">
            {countries.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ x: 4 }}
                className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-200 ${
                  c.active ? "bg-cyan-500/10 border border-cyan-500/20" : "hover:bg-blue-900/20"
                }`}
              >
                <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${c.dot}`} />
                <div>
                  <p className={`font-semibold text-sm ${c.active ? "text-cyan-300" : "text-white"}`}>
                    {c.name}
                  </p>
                  <p className="text-slate-400 text-xs">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
