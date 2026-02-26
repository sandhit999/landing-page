import { useState } from "react";
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

const ContactPage = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", company: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  const inputClass = "w-full bg-[#0f2340]/80 border border-blue-900/50 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 text-sm outline-none focus:border-cyan-500/50 transition-all duration-200";

  return (
    <div className="bg-[#0b1629] min-h-screen">
      <WhatsAppFloat />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-slate-900/65" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5">Get In Touch</h1>
          <p className="text-slate-300 text-base sm:text-lg italic">
            "We built AIM to be the company we wished existed when we were the clients."
          </p>
        </motion.div>
      </section>

      {/* Contact Info Bar */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="bg-[#0d1b2e] py-8 px-6 border-b border-blue-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:divide-x divide-blue-900/40">
            {[
              { icon: "✉️", iconBg: "bg-yellow-500", label: "Email", value: "contact@aimitworld.com" },
              { icon: "📍", iconBg: "bg-teal-500", label: "Location", value: "Kingdom of Saudi Arabia" },
              { icon: "📞", iconBg: "bg-blue-500", label: "Phone", value: "1234567890" },
            ].map((item, i) => (
              <div key={item.label} className={`flex items-center gap-4 ${i > 0 ? "sm:pl-6" : ""}`}>
                <div className={`w-10 h-10 ${item.iconBg} rounded-full flex items-center justify-center text-white text-lg flex-shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-slate-400 text-xs">{item.label}</p>
                  <p className="text-white font-semibold text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Form Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-[#0d1b2e] border border-blue-900/40 rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl font-black text-white mb-8">Send as message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-slate-400 text-xs mb-1.5 block">First Name</label>
                  <input type="text" placeholder="Enter your First Name" required value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className={inputClass} />
                </div>
                <div>
                  <label className="text-slate-400 text-xs mb-1.5 block">Last Name</label>
                  <input type="text" placeholder="Enter your Last Name" required value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className={inputClass} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-slate-400 text-xs mb-1.5 block">Email</label>
                  <input type="email" placeholder="Enter your Email" required value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass} />
                </div>
                <div>
                  <label className="text-slate-400 text-xs mb-1.5 block">Company</label>
                  <input type="text" placeholder="Enter your Company" value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className={inputClass} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-slate-400 text-xs mb-1.5 block">Phone</label>
                  <input type="tel" placeholder="Enter your Phone" value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass} />
                </div>
                <div>
                  <label className="text-slate-400 text-xs mb-1.5 block">Services</label>
                  <div className="relative">
                    <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className={`${inputClass} appearance-none cursor-pointer`}>
                      <option value="">Service Interest dropdown</option>
                      <option>IT Services</option>
                      <option>Manpower Consulting</option>
                      <option>Cloud & Managed Services</option>
                      <option>Cybersecurity</option>
                      <option>AI & Automation</option>
                      <option>Industry 4.0</option>
                    </select>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label className="text-slate-400 text-xs mb-1.5 block">Message</label>
                <textarea placeholder="Your Message" rows={5} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`} />
              </div>
              <motion.button type="submit" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className={`px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 ${
                  sent ? "bg-green-500 text-white" : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white"
                }`}>
                {sent ? "✓ Message Sent!" : "Get in Touch"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
