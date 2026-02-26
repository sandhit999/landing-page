import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="bg-[#0d1b2e] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-snug">
              Ready to Get<br />Started?
            </h2>
            <p className="text-slate-400 text-sm mb-10 leading-relaxed">
              Let's discuss how AIM IT Services can support your IT and workforce needs.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: "✉️", label: "Email", value: "contact@aimitworld.com" },
                { icon: "🌐", label: "Website", value: "www.aimitworld.com" },
                { icon: "📞", label: "Phone", value: "+91 1234567890" },
                { icon: "📍", label: "Location", value: "Kingdom of Saudi Arabia" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#0f2340]/60 border border-blue-900/40 rounded-xl p-4"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-base">{item.icon}</span>
                    <span className="text-slate-400 text-xs font-medium">{item.label}</span>
                  </div>
                  <p className="text-white text-sm font-semibold">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: "name", placeholder: "Full Name", type: "text" },
                { name: "email", placeholder: "Email", type: "email" },
                { name: "company", placeholder: "Company", type: "text" },
              ].map((field) => (
                <motion.input
                  key={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.name]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  required
                  whileFocus={{ borderColor: "rgba(6,182,212,0.6)", boxShadow: "0 0 0 2px rgba(6,182,212,0.1)" }}
                  className="w-full bg-[#0f2340]/80 border border-blue-900/50 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 text-sm outline-none transition-all duration-200 focus:border-cyan-500/50"
                />
              ))}
              <motion.textarea
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                whileFocus={{ borderColor: "rgba(6,182,212,0.6)", boxShadow: "0 0 0 2px rgba(6,182,212,0.1)" }}
                className="w-full bg-[#0f2340]/80 border border-blue-900/50 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 text-sm outline-none transition-all duration-200 focus:border-cyan-500/50 resize-none"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(6,182,212,0.3)" }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                  sent
                    ? "bg-green-500 text-white"
                    : "bg-cyan-500 hover:bg-cyan-400 text-slate-900"
                }`}
              >
                {sent ? "✓ Message Sent!" : "Get in Touch"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
