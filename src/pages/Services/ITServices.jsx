import { motion } from "framer-motion";
import Footer from "../../components/Footer";

const services = [
  {
    icon: "🧩",
    title: "SAP Advisory & Implementation",
    desc: "Full SAP lifecycle from strategy to go-live. AMS, S/4HANA migration, and custom development for enterprise environments.",
    tags: ["SAP S/4HANA", "AMS", "ABAP"],
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    desc: "Intelligent process automation, RPA, AI integration, and machine learning solutions tailored to your operations.",
    tags: ["RPA", "ML Models", "Process AI"],
  },
  {
    icon: "💻",
    title: "Web & Mobile App Development",
    desc: "Custom web applications, mobile apps, and enterprise portals built with modern frameworks and best practices.",
    tags: ["React", "Node.js", "Flutter"],
  },
  {
    icon: "☁️",
    title: "Cloud & Managed IT",
    desc: "Cloud migration, infrastructure management, and 24/7 managed services across AWS, Azure, and GCP.",
    tags: ["AWS", "Azure", "GCP"],
  },
  {
    icon: "🔒",
    title: "Cybersecurity",
    desc: "Risk assessments, SOC services, penetration testing, compliance readiness, and security architecture.",
    tags: ["SOC", "Pen Testing", "Compliance"],
  },
  {
    icon: "🏭",
    title: "Industry 4.0 / Smart Manufacturing",
    desc: "IoT integration, SCADA systems, smart factory deployments, and operational technology consulting.",
    tags: ["IoT", "SCADA", "OT Security"],
  },
  {
    icon: "🛠️",
    title: "Field Support Services",
    desc: "On-site IT support, hardware installation, network setup, and end-user support across KSA.",
    tags: ["On-site", "Helpdesk", "Hardware"],
  },
];

const WhatsAppFloat = () => (
  <a href="https://wa.me/9661234567890" target="_blank" rel="noopener noreferrer"
    className="fixed right-4 bottom-24 z-50 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.847L0 24l6.29-1.499A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 01-5.04-1.381l-.361-.214-3.735.89.941-3.625-.235-.373A9.836 9.836 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118c5.466 0 9.882 4.415 9.882 9.882 0 5.466-4.416 9.882-9.882 9.882z"/>
    </svg>
  </a>
);

const ITServices = () => {
  return (
    <div className="bg-[#0b1629] min-h-screen">
      <WhatsAppFloat />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-slate-900/65" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">Our IT Services</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            AIM IT Services delivers across seven core capability areas. Each is backed by hands-on expertise and structured delivery.
          </p>
        </motion.div>
      </section>

      {/* Teal Banner */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="bg-gradient-to-r from-[#1a4a6e] to-[#0d6e6e] py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white text-lg sm:text-xl leading-relaxed font-light">
            We provide end-to-end IT services tailored to business size, complexity, and compliance requirements.
            Our engagement model ensures senior oversight, defined scope, and measurable outcomes.
          </p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16">
            <p className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-3">What We Deliver</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Seven Core Capability Areas</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(6,182,212,0.1)" }}
                className="bg-[#0f2340]/80 border border-blue-900/50 hover:border-cyan-500/30 rounded-2xl p-6 transition-all duration-300 cursor-default"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span key={tag} className="bg-blue-900/40 border border-blue-700/30 text-blue-300 text-xs px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d1b2e] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-black text-white mb-4">Ready to Transform Your IT Operations?</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">Talk to our senior team about your specific needs — no junior handoffs, no generic proposals.</p>
            <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-8 py-3.5 rounded-full transition-colors">
              Get in Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITServices;
