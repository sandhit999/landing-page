import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    id: "01",
    title: "Digital Transformation",
    desc: "Supporting enterprises and government entities through their technology modernisation journeys",
  },
  {
    id: "02",
    title: "Local Talent Development",
    desc: "Developing and placing Saudi nationals across IT roles, contributing to workforce nationalisation goals.",
  },
  {
    id: "03",
    title: "Sustainable Growth",
    desc: "Enabling businesses to scale responsibly through efficient technology and operational frameworks.",
  },
];

const Vision2030 = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">
        {/* Left - Image with overlay */}
        <div className="relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-900/40" />
          <div className="relative z-10 p-10 lg:p-16 flex flex-col justify-end h-full min-h-[420px]">
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-6">
              Vision{" "}
              <span className="text-cyan-400">2030</span>
              <br />Alignment
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Our services are aligned with Saudi Vision 2030 by enabling digital transformation, strengthening local capabilities, and supporting sustainable economic growth through responsible technology and workforce development.
            </p>
          </div>
        </div>

        {/* Right - Accordion */}
        <div className="bg-[#0f2340] flex flex-col justify-center p-10 lg:p-16">
          <div className="space-y-4">
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="cursor-pointer"
                onClick={() => setActive(i)}
              >
                <div
                  className={`flex items-center gap-4 pb-4 border-b transition-colors duration-200 ${
                    active === i ? "border-cyan-500/40" : "border-blue-900/40"
                  }`}
                >
                  <span
                    className={`text-xs font-bold transition-colors ${
                      active === i ? "text-cyan-400" : "text-slate-500"
                    }`}
                  >
                    {item.id}
                  </span>
                  <h4
                    className={`text-base font-bold transition-colors ${
                      active === i ? "text-white" : "text-slate-400"
                    }`}
                  >
                    {item.title}
                  </h4>
                </div>
                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-400 text-sm pt-3 leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision2030;
