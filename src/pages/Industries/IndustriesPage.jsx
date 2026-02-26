import { motion } from "framer-motion";
import Footer from "../../components/Footer";

const industries = [
  {
    name: "Govt & Semi-Government",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80",
    desc: "Digital transformation and IT services for government entities and semi-government organizations.",
  },
  {
    name: "Large Enterprises",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    desc: "Enterprise-grade solutions including SAP, cloud, and managed services for large-scale operations.",
  },
  {
    name: "Financial Services",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=600&q=80",
    desc: "Secure, compliant IT and talent solutions for banks, insurance, and financial institutions.",
  },
  {
    name: "Healthcare",
    img: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=600&q=80",
    desc: "Healthcare IT systems, digital infrastructure, and skilled manpower for medical facilities.",
  },
  {
    name: "Retail & Consumer",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
    desc: "Omnichannel technology, field force, and retail operations support across KSA.",
  },
  {
    name: "Logistics & Supply Chain",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    desc: "IoT, tracking systems, and skilled manpower for logistics and supply chain operations.",
  },
  {
    name: "Construction & Real Estate",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    desc: "Project management systems, field support, and smart building technology solutions.",
  },
  {
    name: "Trading & Industrial",
    img: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=600&q=80",
    desc: "ERP, automation, and workforce solutions for trading and industrial sector companies.",
  },
  {
    name: "Manufacturing",
    img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=600&q=80",
    desc: "Industry 4.0, smart manufacturing, SCADA, and technical manpower for factories.",
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

const IndustriesPage = () => {
  return (
    <div className="bg-[#0b1629] min-h-screen">
      <WhatsAppFloat />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-slate-900/72" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">Industries We Serve</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            AIM IT Services provides manpower consulting and IT services across nine sectors in the Kingdom of Saudi Arabia:
          </p>
        </motion.div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind, i) => (
              <motion.div key={ind.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-xl overflow-hidden cursor-pointer group"
                style={{ aspectRatio: "4/3" }}
              >
                <img src={ind.img} alt={ind.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-base mb-1">{ind.name}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {ind.desc}
                  </p>
                </div>
                {/* Hover border */}
                <div className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/40 rounded-xl transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d1b2e] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-black text-white mb-4">Your Industry. Our Expertise.</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">Let us show you how AIM delivers sector-specific results with local presence and senior accountability.</p>
            <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-8 py-3.5 rounded-full transition-colors">
              Start a Conversation
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustriesPage;
