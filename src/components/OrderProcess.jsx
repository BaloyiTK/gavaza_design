import { motion } from "framer-motion";

const WHATSAPP =
  "https://wa.me/27818147178?text=" +
  encodeURIComponent(
    "Hello Gavaza Sesinyani Designs, I would like a custom design."
  );

const steps = [
  {
    title: "Share your idea",
    text: "Send a photo, a colour, or a sentence. We start from your choice.",
  },
  {
    title: "Choose the design",
    text: "We refine the cut, fabric, and embroidery until it feels like you.",
  },
  {
    title: "We make the piece",
    text: "Apron, traditional outfit, or embroidered detail — stitched to order.",
  },
  {
    title: "Wear it",
    text: "Collect or arrange delivery. Then show up in something that fits.",
  },
];

export default function OrderProcess() {
  return (
    <section id="process" className="bg-[#111] px-4 py-16 text-white sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[#C89B5C] sm:text-sm">
            The process
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
            How we create your design
          </h2>
        </div>

        <div className="relative mt-12 grid gap-10 sm:mt-14 md:grid-cols-4 md:gap-6 lg:gap-8">
          {/* Connecting line - desktop only */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[12%] right-[12%] top-7 hidden h-px bg-[#C89B5C]/40 md:block"
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#C89B5C] font-serif text-lg font-bold text-black sm:h-14 sm:w-14 sm:text-xl">
                {index + 1}
              </div>
              <h3 className="mt-5 font-serif text-lg sm:mt-6 sm:text-xl">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400 sm:mt-3">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center sm:mt-14">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-[#C89B5C] px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-white"
          >
            Start with WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}