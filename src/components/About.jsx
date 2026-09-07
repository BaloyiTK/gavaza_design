import { motion } from "framer-motion";

const promises = [
  "Custom-made outfits to your measurements",
  "Embroidery for names, logos, and motifs",
  "Traditional clothes for ceremony and everyday pride",
  "Pieces designed according to your choice",
];

export default function About() {
  return (
    <section id="about" className="bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.28em] text-[#C89B5C] sm:text-sm">
            About the studio
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#7A3E1D] sm:text-4xl md:text-5xl">
            Designing dreams into reality
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-gray-600 sm:mt-6 sm:text-base">
            Gavaza Sesinyani Designs makes aprons, embroidery, and traditional
            clothes that carry creativity, culture, and personal style.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            Every outfit is designed according to your choice. We take the idea
            you bring — a colour, a photo, a family event — and turn it into a
            piece that stands out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl bg-[#FFF3E6] p-6 sm:rounded-3xl sm:p-8 md:p-10"
        >
          <h3 className="font-serif text-xl text-[#7A3E1D] sm:text-2xl">
            Our promise
          </h3>
          <ul className="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4">
            {promises.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-gray-700 sm:text-base">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#C89B5C]" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}