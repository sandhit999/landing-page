import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const AboutPage = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <div className="bg-[#0b1629] min-h-screen">
      <WhatsAppFloat />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-slate-900/65" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5">About us</h1>
          <p className="text-slate-300 text-lg italic">
            "We built AIM to be the company we wished existed when we were the clients."
          </p>
        </motion.div>
      </section>

      {/* Who We Are */}
      <section className="bg-[#0d1b2e] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center border-l-4 border-cyan-400 pl-3 mb-5">
            <span className="text-slate-300 text-sm font-medium">Who We Are</span>
          </div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-black text-white mb-6">Enterprise & transformation focus</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-slate-400 text-sm leading-relaxed mb-10 max-w-3xl">
            AIM IT Services Co. is a KSA-based IT services and manpower consulting firm built on 150+ years of collective experience in the Kingdom's trading, industrial, and technology sectors. We deliver IT services — from SAP and cybersecurity to cloud operations and smart manufacturing — and place IT professionals who stay, backed by retention guarantees on every placement. Unlike offshore firms selling into Saudi Arabia, AIM combines deep local presence with international expertise — led by operators who have spent decades building businesses in the Kingdom, backed by global consulting capability. The people who earn your trust are the same people who deliver the work.
          </motion.p>

          {/* Video Player */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden border border-blue-900/40 cursor-pointer group"
            onClick={() => setVideoPlaying(!videoPlaying)}
          >
            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
              alt="AIM Video" className="w-full h-64 sm:h-80 object-cover" />
            <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/30 transition-colors" />
            <AnimatePresence>
              {!videoPlaying && (
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center">
                  <motion.div whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-white/20 border-2 border-white/60 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Our Founders */}
      <section className="bg-[#0b1629] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center border-l-4 border-cyan-400 pl-3 mb-8">
            <span className="text-slate-300 text-sm font-medium">Our Founders</span>
          </div>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-white text-base sm:text-lg leading-relaxed text-center">
            AIM IT Services Co. is led by a founding team with over 150 years of collective experience in the Kingdom of Saudi Arabia. Our founders bring deep expertise from trading, industrial operations, and technology services — sectors where they have built businesses, managed large-scale operations, and developed extensive professional networks across the Kingdom. This is not a company built on theory. It is built on decades of direct experience in KSA's commercial landscape — understanding how business is done here, what clients actually need, and why many engagements fail.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#0d1b2e] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center border-l-4 border-cyan-400 pl-3 mb-8">
            <span className="text-slate-300 text-sm font-medium">Mission & Vision</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-blue-900/40">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Mission" className="w-full h-56 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-slate-900/30" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-white font-black text-2xl mb-2">Mission</h3>
                <div className="w-12 h-0.5 bg-cyan-400 mb-3" />
                <p className="text-slate-300 text-xs leading-relaxed">
                  To deliver IT services and manpower solutions where the people who earn your trust are the same people who deliver the work — backed by local knowledge, international expertise, named resources, and retention guarantees.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden border border-blue-900/40">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                alt="Vision" className="w-full h-56 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-slate-900/30" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-white font-black text-2xl mb-2">Vision</h3>
                <div className="w-12 h-0.5 bg-cyan-400 mb-3" />
                <p className="text-slate-300 text-xs leading-relaxed">
                  To be KSA's most trusted IT and manpower partner — known not for scale, but for accountability, senior delivery, and measurable client outcomes across every tier.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentiation - Problem vs AIM */}
      <section className="bg-[#0b1629] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-blue-900/40">
            {/* Left - Problems */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-[#0d2040] p-10 lg:p-14">
              <div className="text-5xl text-cyan-400 font-black mb-6">"</div>
              <div className="space-y-3 mb-6">
                <p className="text-blue-300 text-lg font-medium flex items-center gap-2">
                  <span className="text-cyan-400">→</span> Seniors sell the contract.
                </p>
                <p className="text-slate-500 text-lg ">Juniors deliver the work</p>
              </div>
              <div className="space-y-2">
                <p className="text-white font-bold text-lg">Offshore headquarters.</p>
                <p className="text-white font-bold text-lg">KSA sales office.</p>
              </div>
            </motion.div>
            {/* Right - AIM */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-[#0f2340] p-10 lg:p-14 border-l border-blue-900/40">
              <h3 className="text-white font-black text-xl mb-2">Who sells, delivers.</h3>
              <div className="w-12 h-0.5 bg-cyan-400 mb-5" />
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                The person who earns your trust is the person who does the work. No bait and switch.
              </p>
              <div className="rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
                  alt="Who sells delivers" className="w-full h-44 object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
