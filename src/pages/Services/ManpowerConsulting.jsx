import { motion } from "framer-motion";
import Footer from "../../components/Footer";

const WhatsAppFloat = () => (
  <a href="https://wa.me/9661234567890" target="_blank" rel="noopener noreferrer"
    className="fixed right-4 bottom-24 z-50 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.847L0 24l6.29-1.499A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 01-5.04-1.381l-.361-.214-3.735.89.941-3.625-.235-.373A9.836 9.836 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118c5.466 0 9.882 4.415 9.882 9.882 0 5.466-4.416 9.882-9.882 9.882z"/>
    </svg>
  </a>
);

const steps = [
  { icon: "🤝", title: "Relationship", desc: "Relationship-first: understand needs, curate candidates" },
  { icon: "🔍", title: "Sourcing", desc: "Deep sourcing from verified KSA talent networks" },
  { icon: "🌐", title: "Market Knowledge", desc: "Deep KSA market expertise across all sectors" },
  { icon: "📋", title: "Post-Placement", desc: "Ongoing support and retention monitoring" },
];

const ManpowerConsulting = () => {
  return (
    <div className="bg-[#0b1629] min-h-screen">
      <WhatsAppFloat />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-slate-900/60" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">ManPower Consulting</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            AIM's manpower consulting is built on a fundamental principle: place the right candidate who stays —
            not the fastest available resume from a database.
          </p>
        </motion.div>
      </section>

      {/* Approach Section */}
      <section className="bg-[#0d1b2e] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden border border-blue-900/30">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                alt="Our Approach" className="w-full h-80 object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="inline-flex items-center border-l-4 border-cyan-400 pl-3 mb-5">
                <span className="text-slate-300 text-sm font-medium">Our Approach</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-snug">
                Relationship-First.<br />Accountability-Backed.
              </h2>
              <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
                <p>We don't operate as resume brokers. We build long-term partnerships grounded in transparency, structured communication, and shared responsibility.</p>
                <p>Every engagement is led with clarity on expectations, timelines, and performance standards. Our role is not just to fill positions, but to reduce hiring risk, improve retention, and ensure continuity.</p>
                <p>We stay involved beyond placement because accountability does not end once a candidate joins.</p>
              </div>
              <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                className="inline-flex mt-8 items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-7 py-3 rounded-full transition-colors text-sm">
                Get in Touch
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Risk-Reduced Hiring Table */}
      <section className="bg-[#0b1629] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center border-l-4 border-cyan-400 pl-3 mb-5">
            <span className="text-slate-300 text-sm font-medium">Replacement Guarantees</span>
          </div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-black text-white mb-4">Risk-Reduced Hiring Model</motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-slate-400 text-sm mb-10 max-w-2xl leading-relaxed">
            Every placement made by AIM comes with a replacement guarantee. If the placed candidate leaves within the
            guarantee period, we replace them at no additional cost:
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-blue-900/40">
            {/* Header Row */}
            <div className="grid grid-cols-4">
              <div className="bg-[#0f2340] p-5 border-r border-blue-900/40">
                <span className="text-white font-bold text-sm">Features</span>
              </div>
              <div className="bg-[#1a2a40] p-5 border-r border-blue-900/40 text-center">
                <span className="text-white font-bold text-sm tracking-wider">PLATINUM</span>
              </div>
              <div className="bg-yellow-500 p-5 border-r border-yellow-600/40 text-center">
                <span className="text-slate-900 font-bold text-sm tracking-wider">GOLD</span>
              </div>
              <div className="bg-slate-400 p-5 text-center">
                <span className="text-slate-900 font-bold text-sm tracking-wider">SILVER</span>
              </div>
            </div>
            {/* Row 1 */}
            <div className="grid grid-cols-4 border-t border-blue-900/40">
              <div className="bg-[#0f2340] p-5 border-r border-blue-900/40">
                <span className="text-blue-400 text-sm font-medium">Candidate Experience</span>
              </div>
              <div className="bg-[#080f1e] p-5 border-r border-blue-900/40 text-center">
                <span className="text-slate-300 text-sm">Senior (5–20 years)</span>
              </div>
              <div className="bg-[#080f1e] p-5 border-r border-yellow-500/20 text-center border-x border-yellow-500/30">
                <span className="text-slate-300 text-sm">Mid-level (2–5 years)</span>
              </div>
              <div className="bg-[#080f1e] p-5 text-center">
                <span className="text-slate-300 text-sm">Entry-level (0–2 years)</span>
              </div>
            </div>
            {/* Row 2 */}
            <div className="grid grid-cols-4 border-t border-blue-900/40">
              <div className="bg-[#0f2340] p-5 border-r border-blue-900/40">
                <span className="text-blue-400 text-sm font-medium">Replacement Guarantee</span>
              </div>
              <div className="bg-[#080f1e] p-5 border-r border-blue-900/40 text-center">
                <span className="text-slate-300 text-sm">90 days</span>
              </div>
              <div className="bg-[#080f1e] p-5 border-r border-yellow-500/30 text-center border-x border-yellow-500/30">
                <span className="text-slate-300 text-sm">60 days</span>
              </div>
              <div className="bg-[#080f1e] p-5 text-center">
                <span className="text-slate-300 text-sm">30 days</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Work - Diamond Process */}
      <section className="bg-[#060d1a] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,58,138,0.15)_0%,_transparent_70%)]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center border-l-4 border-cyan-400 pl-3 mb-6">
            <span className="text-slate-300 text-sm font-medium">How we work</span>
          </div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-black text-white text-center mb-4">
            From Requirement to Reliable Placement
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-slate-400 text-sm text-center mb-16 max-w-2xl mx-auto leading-relaxed">
            We follow a disciplined four-step approach to ensure every placement is aligned, verified, and backed by defined responsibility from day one.
          </motion.p>

          {/* Diamond Grid */}
          <div className="grid grid-cols-3 gap-6 items-center">
            {/* White diamond - description */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="aspect-square bg-white rounded-2xl flex items-center justify-center p-6 rotate-45 transform origin-center shadow-2xl">
              <p className="text-slate-700 text-xs font-medium text-center -rotate-45 leading-relaxed">
                Relationship-first:<br />understand needs,<br />curate candidates
              </p>
            </motion.div>

            <div className="grid grid-rows-2 gap-6">
              {[steps[0], steps[2]].map((s, i) => (
                <motion.div key={s.title}
                  initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#0f2340]/80 border border-blue-700/40 rounded-2xl p-5 flex flex-col items-center justify-center text-center aspect-square"
                >
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <p className="text-white font-bold text-sm">{s.title}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-rows-2 gap-6">
              {[steps[1], steps[3]].map((s, i) => (
                <motion.div key={s.title}
                  initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.15 + 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#0f2340]/80 border border-blue-700/40 rounded-2xl p-5 flex flex-col items-center justify-center text-center aspect-square"
                >
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <p className="text-white font-bold text-sm">{s.title}</p>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ManpowerConsulting;
