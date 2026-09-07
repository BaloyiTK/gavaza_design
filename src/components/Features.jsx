import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Aprons",
    text: "Kitchen, event, and branded aprons cut for real work and for photographs.",
  },
  {
    title: "Embroidery",
    text: "Names, logos, and motifs stitched onto garments so the piece feels like yours.",
  },
  {
    title: "Traditional Clothes",
    text: "Cultural outfits for ceremonies and family occasions, made to your colours.",
  },
  {
    title: "Custom Designs",
    text: "Your idea, your choice — cut, fitted, and finished as a one-off piece.",
  },
];

export default function Features() {
  return (
    <section id="services" className="bg-[#FFF3E6] px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[#C89B5C] sm:text-sm">
            What we make
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#7A3E1D] sm:text-4xl md:text-5xl">
            Our services
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:rounded-3xl sm:p-7"
            >
              <span className="font-serif text-2xl text-[#C89B5C] sm:text-3xl">
                0{index + 1}
              </span>
              <h3 className="mt-4 font-serif text-lg text-[#7A3E1D] sm:mt-5 sm:text-xl">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {service.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}