import { motion } from "framer-motion";

const quotes = [
  {
    text: "Absolutely stunning. You wrapped up another beautiful design.",
    name: "Mantsha",
    detail: "Custom apron",
  },
  {
    text: "Gavaza Sesinyani Designs are truly amazing. I love the aprons.",
    name: "Mudavhi",
    detail: "Apron order",
  },
  {
    text: "The quality exceeded what I expected. The piece felt made for me.",
    name: "Happy client",
    detail: "Traditional outfit",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#7A3E1D] px-4 py-16 text-white sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[#C89B5C] sm:text-sm">
            Kind words
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
            Customer love
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-3">
          {quotes.map((quote, index) => (
            <motion.blockquote
              key={quote.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col rounded-2xl bg-black/20 p-6 sm:rounded-3xl sm:p-8"
            >
              <p className="flex-1 font-serif text-lg leading-relaxed sm:text-xl">
                “{quote.text}”
              </p>
              <footer className="mt-5 text-sm sm:mt-6">
                <p className="text-[#C89B5C]">{quote.name}</p>
                <p className="mt-0.5 text-white/70">{quote.detail}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}