import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const designs = [
  {
    title: "Traditional Attire",
    text: "Outfits cut for ceremony, colour, and personality.",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Designer Aprons",
    text: "Kitchen and event aprons made to work and to be seen.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c4a5b6b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Custom Collections",
    text: "Embroidery, names, logos, and one-off pieces.",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#FAF6F1] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <p className="text-center text-sm uppercase tracking-[0.28em] text-[#C89B5C]">
          Selected Work
        </p>
        <h2 className="mt-3 text-center font-serif text-4xl font-bold text-[#7A3E1D] md:text-5xl">
          Our Designs
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-gray-600">
          Handcrafted aprons, embroidery, and traditional clothes — made
          according to your choice.
        </p>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {designs.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105 md:h-96"
                />
              </div>

              <div className="p-6">
                <h3 className="font-serif text-2xl text-[#7A3E1D]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {item.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/gallery"
            className="inline-block rounded-full bg-[#C89B5C] px-10 py-3.5 text-sm font-semibold text-black transition hover:bg-[#7A3E1D] hover:text-white"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}