import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const useCounter = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
};

const StatItem = ({ value, suffix = "", label, delay, started }) => {
  const num = useCounter(value, 1800, started);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col"
    >
      <span className="text-4xl lg:text-5xl font-black text-cyan-400">
        {num}{suffix}
      </span>
      <span className="text-slate-400 text-sm mt-1">{label}</span>
    </motion.div>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#0b1629] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-snug mb-10">
              Results That Speak<br />for Themselves
            </h2>
            <div className="relative inline-block">
              <div className="border border-cyan-500/40 bg-cyan-500/5 rounded-lg px-6 py-4">
                <span className="text-6xl font-black text-cyan-400">150+</span>
                <p className="text-slate-400 text-sm mt-1">Years Collective Experience</p>
              </div>
              {/* Decorative corner */}
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-cyan-500" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-cyan-500" />
            </div>
          </motion.div>

          {/* Right Grid */}
          <div className="grid grid-cols-2 gap-y-10 gap-x-8">
            <StatItem value={7} suffix="" label="Core Capabilities" delay={0.1} started={inView} />
            <StatItem value={9} suffix="" label="Industries Served" delay={0.2} started={inView} />
            <StatItem value={8} suffix="" label="Countries With Presence" delay={0.3} started={inView} />
            <StatItem value={90} suffix="" label="Days Maximum Replacement Guarantee" delay={0.4} started={inView} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
