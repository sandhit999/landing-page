import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

const values = [
  { icon: "🛡️", title: "Integrity", desc: "We act with transparency and ethical responsibility.", border: "border-cyan-500/50" },
  { icon: "⭐", title: "Excellence", desc: "We prioritize quality, structure, and consistent performance.", border: "border-yellow-500/50" },
  { icon: "📈", title: "Professional Growth", desc: "We prioritize quality, structure, and consistent performance.", border: "border-blue-500/50" },
  { icon: "🤝", title: "Collaboration", desc: "We work with clear and shared responsibility.", border: "border-slate-400/50" },
];

const jobs = [
  { title: "Software Developer", desc: "Design and develop scalable web and enterprise applications aligned with structured business requirements.", exp: "2–5 Years", location: "Kingdom of Saudi Arabia" },
  { title: "Cloud & Infrastructure Engineer", desc: "Manage cloud environments, ensure system reliability, and support secure infrastructure operations.", exp: "3–6 Years", location: "Kingdom of Saudi Arabia" },
  { title: "Cybersecurity Specialist", desc: "Implement security controls, conduct risk assessments, and protect enterprise systems and data.", exp: "4–8 Years", location: "Kingdom of Saudi Arabia" },
  { title: "ERP / SAP Consultant", desc: "Support ERP implementation, configuration, and optimization across enterprise environments.", exp: "5+ Years", location: "Kingdom of Saudi Arabia" },
  { title: "IT Support / Field Technician", desc: "Provide on-site technical support and ensure smooth day-to-day IT operations.", exp: "0–2 Years", location: "Kingdom of Saudi Arabia" },
  { title: "Business Intelligence (BI) Analyst", desc: "Develop dashboards and reporting solutions that translate business data into actionable insights for decision-makers.", exp: "2–5 Years", location: "Kingdom of Saudi Arabia" },
];

const WhatsAppFloat = () => (
  <a href="https://wa.me/9661234567890" target="_blank" rel="noopener noreferrer"
    className="fixed right-4 bottom-24 z-50 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.847L0 24l6.29-1.499A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 01-5.04-1.381l-.361-.214-3.735.89.941-3.625-.235-.373A9.836 9.836 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118c5.466 0 9.882 4.415 9.882 9.882 0 5.466-4.416 9.882-9.882 9.882z"/>
    </svg>
  </a>
);

const CareersPage = () => {
  const [form, setForm] = useState({ name: "", email: "", role: "", mobile: "", cv: null });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-[#0b1629] min-h-screen">
      <WhatsAppFloat />

      {/* ═══════════════ HERO ═══════════════ */}
      <section
        className="relative w-full overflow-hidden pt-16"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(150deg,#0d2b3e 0%,#0b1c2e 50%,#080e1c 100%)",
        }}
      >
        {/* Cyan radial glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 40% at 58% 20%, rgba(6,182,212,0.11) 0%, transparent 70%)" }} />

        {/* ── 3-COLUMN GRID using % widths so nothing overflows ── */}
        <div className="w-full h-full px-4 sm:px-6"
          style={{
            display: "grid",
            gridTemplateColumns: "22% 1fr 22%",
            gridTemplateRows: "auto 1fr",
            columnGap: "16px",
            minHeight: "calc(100vh - 64px)",
            paddingBottom: "32px",
            boxSizing: "border-box",
          }}
        >

          {/* ── LEFT COLUMN: 2 stacked images ── */}
          <div className="hidden lg:flex flex-col gap-3 pt-12">
            {/* Large top image */}
            <motion.div
              initial={{ opacity: 0, x: -24, y: 16 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.3, duration: 0.75 }}
              className="rounded-2xl overflow-hidden shadow-2xl flex-1"
              style={{ minHeight: 0, maxHeight: "300px", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=500&q=85"
                alt="" className="w-full h-full object-cover block"
              />
            </motion.div>
            {/* Small bottom image */}
            <motion.div
              initial={{ opacity: 0, x: -18, y: 16 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.48, duration: 0.7 }}
              className="rounded-2xl overflow-hidden shadow-xl"
              style={{ height: "150px", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=500&q=85"
                alt="" className="w-full h-full object-cover block"
              />
            </motion.div>
          </div>

          {/* ── CENTER COLUMN: headline + 2 bottom images ── */}
          <div className="flex flex-col items-center" style={{ gridColumn: "2 / 3", minWidth: 0 }}>
            {/* Text block */}
            <div className="text-center w-full py-12 px-2 sm:px-6 flex-shrink-0">
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-black text-white leading-tight mb-5"
                style={{ fontSize: "clamp(1.9rem, 3.5vw, 3.1rem)" }}
              >
                Build a Career That<br />Delivers Real Impact
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-slate-300 leading-relaxed mx-auto mb-8"
                style={{ fontSize: "0.9rem", maxWidth: "440px" }}
              >
                Join a team of professionals committed to structured growth,
                technical excellence, and accountable delivery across enterprise
                and government projects.
              </motion.p>
              <motion.a
                href="#openings"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.06, boxShadow: "0 0 30px rgba(6,182,212,0.4)" }}
                whileTap={{ scale: 0.96 }}
                className="inline-block font-bold text-slate-900 rounded-full"
                style={{
                  background: "linear-gradient(135deg,#06b6d4,#0891b2)",
                  padding: "13px 36px",
                  fontSize: "0.875rem",
                  boxShadow: "0 4px 20px rgba(6,182,212,0.25)",
                }}
              >
                Explore Our Careers
              </motion.a>
            </div>

            {/* Two bottom images side by side */}
            <div className="w-full flex gap-3 mt-auto" style={{ minHeight: 0 }}>
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7 }}
                className="flex-1 rounded-2xl overflow-hidden shadow-2xl"
                style={{ height: "220px", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=600&q=85"
                  alt="" className="w-full h-full object-cover block"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.7 }}
                className="flex-1 rounded-2xl overflow-hidden shadow-2xl"
                style={{ height: "220px", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=600&q=85"
                  alt="" className="w-full h-full object-cover block"
                />
              </motion.div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: single tall image ── */}
          <motion.div
            initial={{ opacity: 0, x: 24, y: 16 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.35, duration: 0.75 }}
            className="hidden lg:block rounded-2xl overflow-hidden shadow-2xl"
            style={{
              marginTop: "48px",
              marginBottom: "8px",
              border: "1px solid rgba(255,255,255,0.07)",
              minHeight: 0,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1768933294235-afd2214040d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
              alt="" className="w-full h-full object-cover block"
              style={{ minHeight: "100%" }}
            />
          </motion.div>

        </div>{/* end grid */}
      </section>

      {/* ═══════════════ CORE VALUES ═══════════════ */}
      <section className="bg-[#0d1b2e] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center border-l-4 border-cyan-400 pl-3 mb-6">
            <span className="text-slate-300 text-sm font-medium">Our Core Values</span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-white mb-12 max-w-3xl leading-snug"
          >
            Our culture is built on responsibility, professionalism, and measurable
            performance. These values guide how we work, collaborate, and deliver for our clients.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(6,182,212,0.09)" }}
                className={`bg-[#0f2340]/80 border-t-2 ${v.border} border-x border-b border-blue-900/40 rounded-xl p-5 transition-all duration-300`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{v.icon}</span>
                  <h4 className="text-white font-bold text-sm">{v.title}</h4>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CURRENT OPENINGS ═══════════════ */}
      <section id="openings" className="bg-[#0b1629] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-black text-white mb-3"
          >
            Current Openings
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-slate-400 text-sm mb-10 max-w-2xl leading-relaxed"
          >
            We are looking for professionals who value accountability, technical excellence,
            and structured execution. Explore our current opportunities below.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {jobs.map((job, i) => (
              <motion.div key={job.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                whileHover={{ y: -5, borderColor: "rgba(6,182,212,0.4)", boxShadow: "0 12px 40px rgba(6,182,212,0.07)" }}
                className="bg-[#0f2340]/80 border border-blue-900/50 rounded-xl p-5 transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-white font-bold text-base mb-2">{job.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">{job.desc}</p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {job.exp}
                  </span>
                  <span className="text-blue-900/60">|</span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {job.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ APPLY FORM ═══════════════ */}
      <section className="bg-[#0d1b2e] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-black text-white mb-4 leading-snug">
                Didn't Find the<br />Right Role?
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                If your expertise aligns with our services but you don't see a suitable opening,
                submit your profile for future opportunities.
              </p>
            </motion.div>

            <motion.form onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-[#0f2340]/80 border border-blue-900/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm outline-none focus:border-cyan-500/50 transition-colors" />
                <input type="email" placeholder="Email ID" required value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-[#0f2340]/80 border border-blue-900/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm outline-none focus:border-cyan-500/50 transition-colors" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="w-full bg-[#0f2340]/80 border border-blue-900/50 rounded-xl px-4 py-3 text-slate-400 text-sm outline-none focus:border-cyan-500/50 transition-colors appearance-none cursor-pointer">
                    <option value="">Role</option>
                    {jobs.map((j) => <option key={j.title} value={j.title}>{j.title}</option>)}
                    <option value="other">Other</option>
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <input type="tel" placeholder="Mobile Number" value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  className="bg-[#0f2340]/80 border border-blue-900/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm outline-none focus:border-cyan-500/50 transition-colors" />
              </div>
              <label className="block bg-[#0f2340]/80 border border-dashed border-blue-700/50 hover:border-cyan-500/50 rounded-xl p-6 text-center cursor-pointer transition-colors group">
                <input type="file" className="hidden" accept=".pdf,.doc,.docx"
                  onChange={(e) => setForm({ ...form, cv: e.target.files[0] })} />
                <div className="flex flex-col items-center gap-2">
                  <svg className="w-8 h-8 text-blue-400 group-hover:text-cyan-400 transition-colors"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  <span className="text-slate-400 text-sm">{form.cv ? form.cv.name : "Submit CV"}</span>
                  {!form.cv && <span className="text-slate-600 text-xs">PDF, DOC, DOCX accepted</span>}
                </div>
              </label>
              <motion.button type="submit"
                whileHover={{ scale: 1.03, boxShadow: "0 0 28px rgba(6,182,212,0.35)" }}
                whileTap={{ scale: 0.97 }}
                className={`px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 ${
                  submitted ? "bg-green-500 text-white" : "bg-cyan-500 hover:bg-cyan-400 text-slate-900"
                }`}
              >
                {submitted ? "✓ Submitted!" : "Get in Touch"}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;
