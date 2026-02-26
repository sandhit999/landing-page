import { motion } from "framer-motion";

const tiers = [
  {
    name: "PLATINUM",
    color: "blue",
    badgeBg: "bg-blue-600",
    borderColor: "border-blue-700/50",
    glowColor: "hover:shadow-blue-500/10",
    subtitle: "Enterprise Transformation Partner",
    targetClients: ["Large enterprises", "Government", "Semi-government"],
    itServices: ["SAP, SAP AMS", "AI & Automation", "Power BI", "Cybersecurity", "Enterprise", "Advisory", "Industry 4.0", "Enterprise App Dev"],
    manpower: "Senior experts (8–20 years)",
    guarantee: "90 Day",
  },
  {
    name: "GOLD",
    color: "yellow",
    badgeBg: "bg-yellow-500",
    borderColor: "border-yellow-500/60",
    glowColor: "hover:shadow-yellow-500/15",
    highlight: true,
    subtitle: "Scalable Technology Solutions",
    targetClients: ["Mid-size businesses", "Growing companies"],
    itServices: ["Managed IT", "Cloud", "Helpdesk", "Web & Mobile Dev", "FFMS", "IoT", "Deployment"],
    manpower: "Mid-level (2–5 years)",
    guarantee: "60 Day",
  },
  {
    name: "SILVER",
    color: "slate",
    badgeBg: "bg-slate-400",
    borderColor: "border-slate-600/50",
    glowColor: "hover:shadow-slate-400/10",
    subtitle: "Reliable Operational IT Support",
    targetClients: ["SMEs", "Retail & Logistics", "Trading & Manufacturing"],
    itServices: ["Field Support", "On-site IT", "Basic Web & Mobile", "Field Force Tracking", "Sensor Installation"],
    manpower: "Entry & Bulk (0–2 years)",
    guarantee: "30 Day",
  },
];

const TierCard = ({ tier, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15, duration: 0.6 }}
    whileHover={{ y: -6 }}
    className={`relative rounded-2xl border ${tier.borderColor} ${
      tier.highlight ? "bg-[#12243e]" : "bg-[#0f1e35]"
    } p-6 flex flex-col transition-all duration-300 hover:shadow-2xl ${tier.glowColor} ${
      tier.highlight ? "ring-1 ring-yellow-500/30" : ""
    }`}
  >
    {/* Badge */}
    <div className="flex justify-center mb-5">
      <span className={`${tier.badgeBg} text-white text-xs font-black tracking-widest px-5 py-1.5 rounded-full`}>
        {tier.name}
      </span>
    </div>

    <h3 className="text-white font-bold text-center text-base mb-6 leading-snug">{tier.subtitle}</h3>

    {/* Target Clients */}
    <div className="mb-5">
      <div className="flex items-center gap-2 text-slate-400 text-xs mb-2">
        <span>🏢</span>
        <span className="font-semibold uppercase tracking-wider">Target Clients</span>
      </div>
      {tier.targetClients.map((c) => (
        <div key={c} className="flex items-center gap-2 text-slate-300 text-xs py-0.5">
          <svg className="w-3 h-3 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
          {c}
        </div>
      ))}
    </div>

    {/* IT Services */}
    <div className="mb-5">
      <div className="flex items-center gap-2 text-slate-400 text-xs mb-2">
        <span>💻</span>
        <span className="font-semibold uppercase tracking-wider">IT Services</span>
      </div>
      {tier.itServices.map((s) => (
        <div key={s} className="flex items-center gap-2 text-slate-300 text-xs py-0.5">
          <svg className="w-3 h-3 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
          {s}
        </div>
      ))}
    </div>

    {/* Manpower Focus */}
    <div className="mb-6">
      <div className="flex items-center gap-2 text-slate-400 text-xs mb-2">
        <span>👥</span>
        <span className="font-semibold uppercase tracking-wider">Manpower Focus</span>
      </div>
      <div className="flex items-center gap-2 text-slate-300 text-xs">
        <svg className="w-3 h-3 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
        {tier.manpower}
      </div>
    </div>

    {/* Guarantee Footer */}
    <div className={`mt-auto pt-4 border-t ${tier.borderColor} text-center`}>
      <p className="text-white font-black text-sm">
        {tier.guarantee} Replacement
      </p>
      <p className="text-slate-400 text-xs">Guarantee</p>
    </div>
  </motion.div>
);

const TierModel = () => {
  return (
    <section className="bg-[#0b1629] py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-800/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-3"
        >
          Three – Tier Model
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-black text-white mb-14"
        >
          Three Levels. One Standard of Accountability.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <TierCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TierModel;
