import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const featuredDesigns = [
  {
    id: 1,
    name: "Traditional Elegance",
    category: "Traditional Wear",
    image: "trad.jpg",
  },
  {
    id: 2,
    name: "Designer Apron Collection",
    category: "Aprons",
    image: "apron.jpg",
  },
  {
    id: 3,
    name: "Wedding Collection",
    category: "Wedding",
    image: "wed.jpg",
  },
  {
    id: 4,
    name: "African Heritage",
    category: "Traditional Wear",
    image: "trad2.jpg",
  }
];

export default function GalleryPreview() {
  return (
    <section id="gallery" className="bg-[#FAF6F1] px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[#C89B5C] sm:text-sm">
            Featured Work
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#7A3E1D] sm:text-4xl md:text-5xl">
            Featured Designs
          </h2>
          <p className="mt-4 text-sm text-gray-600 sm:text-base">
            A selection of our latest aprons, traditional pieces, and custom
            collections.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {featuredDesigns.map((design, index) => (
            <motion.article
              key={design.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl sm:rounded-3xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={design.image}
                  alt={design.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 sm:p-6">
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#C89B5C] sm:text-xs">
                  {design.category}
                </span>
                <h3 className="mt-1.5 font-serif text-lg text-[#7A3E1D] sm:text-xl">
                  {design.name}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center sm:mt-12 lg:mt-14">
          <Link
            to="/gallery"
            className="inline-block rounded-full bg-[#C89B5C] px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-[#7A3E1D] hover:text-white"
          >
            View All Designs
          </Link>
        </div>
      </div>
    </section>
  );
}