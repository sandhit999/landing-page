import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 0,
    title: "Local KSA Presence",
    subtitle: "On-ground support with accountable leadership.",
    tags: ["On-ground", "Local Team"],
    bg: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1920&q=80",
    label: "Local KSA Presence",
  },
  {
    id: 1,
    title: "Industry 4.0 / Smart Manufacturing",
    subtitle: "Cutting-edge automation and smart factory solutions.",
    tags: ["Automation", "IoT"],
    bg: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80",
    label: "Industry 4.0 / Smart Manufacturing",
  },
  {
    id: 2,
    title: "Cloud & Managed Services",
    subtitle: "Reliable infrastructure with 24/7 managed support.",
    tags: ["Cloud", "Managed IT"],
    bg: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1920&q=80",
    label: "Cloud & Managed Services",
  },
  {
    id: 3,
    title: "AI & Automation",
    subtitle: "Intelligent solutions that drive operational efficiency.",
    tags: ["AI", "Automation"],
    bg: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1920&q=80",
    label: "AI & Automation",
  },
];

const Capabilities = () => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;
  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);
  const slide = slides[current];

  return (
    <section className="bg-[#0b1629] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-3"
        >
          Our Capabilities
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-black text-white mb-8"
        >
          Where Technology Meets Execution
        </motion.h2>

        <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: 420 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.bg}')` }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-900/70" />

          {/* Center Card */}
          <div className="relative z-10 flex items-center justify-center h-full min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`card-${slide.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center max-w-md px-6"
              >
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">{slide.title}</h3>
                <p className="text-slate-300 text-sm mb-5">{slide.subtitle}</p>
                <div className="flex justify-center gap-3 mb-6">
                  {slide.tags.map((tag) => (
                    <span key={tag} className="bg-slate-800/70 border border-slate-600/50 text-slate-200 text-xs px-4 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold text-sm px-6 py-2.5 rounded-full transition-colors"
                >
                  Know more..
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center text-white transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center text-white transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-cyan-400 w-6" : "bg-white/40"}`}
              />
            ))}
          </div>
        </div>

        {/* Previous label */}
        <div className="mt-4 text-slate-500 text-xs">
          Previous: {slides[(current - 1 + total) % total].label}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
