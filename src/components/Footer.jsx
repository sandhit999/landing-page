import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#080f1e] pt-16 pb-8 px-6 border-t border-blue-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Big AIM logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-6xl sm:text-8xl font-black text-white tracking-[0.3em]">AIM</span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-black text-lg mb-2">AIM IT Services Co.</h3>
            <p className="text-slate-400 text-sm mb-6">KSA-based IT services and manpower consulting</p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {["youtube", "facebook", "twitter", "instagram", "linkedin"].map((s) => (
                <motion.a
                  key={s}
                  href="#"
                  whileHover={{ scale: 1.2, color: "#22d3ee" }}
                  className="w-8 h-8 border border-blue-900/60 rounded-full flex items-center justify-center text-slate-400 hover:border-cyan-500/40 hover:text-cyan-400 transition-all text-xs"
                >
                  {s[0].toUpperCase()}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div />

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-bold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {["IT Services", "Manpower Consulting", "Cloud & Managed Services", "Cybersecurity", "AI & Automation", "Industry 4.0"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-slate-400 text-sm hover:text-cyan-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-bold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {["About Us", "Why AIM", "Vision 2030", "Industries", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 text-sm hover:text-cyan-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-900/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            Copyright © 2026 AIM IT Services Co. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-500 text-xs hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 text-xs hover:text-cyan-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
