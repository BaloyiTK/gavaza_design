import { motion, useReducedMotion } from "framer-motion";
import heroImage from "../assets/images/hero.jpg";
import { WHATSAPP_URL } from "../config/site";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
      aria-label="Gavaza Sesinyani Designs hero"
    >
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 pb-16 sm:px-6 sm:pt-28 md:pt-32">
        <motion.p
          {...fadeUp(0)}
          className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-[#C89B5C] sm:mb-4 sm:text-sm"
        >
          Gavaza Sesinyani Designs
        </motion.p>

        <motion.h1
          {...fadeUp(0.1)}
          className="max-w-4xl font-serif text-4xl font-bold leading-[1.15] text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Your Choice.
          <br />
          Your Style.
          <br />
          <span className="text-[#C89B5C]">Our Craftsmanship.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.25)}
          className="mt-5 max-w-xl text-base text-gray-100 sm:mt-6 sm:text-lg md:text-xl"
        >
          Custom aprons, embroidery, and traditional clothes made to match your
          dreams and personality.
        </motion.p>

        <motion.div
          {...fadeUp(0.4)}
          className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4"
        >
          <a
            href="#gallery"
            className="group rounded-full bg-[#C89B5C] px-7 py-3.5 text-center text-sm font-semibold text-black shadow-lg transition hover:scale-[1.03] hover:bg-white sm:px-8 sm:py-4"
          >
            Explore Designs
            <span className="ml-2 inline-block transition group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order a custom design on WhatsApp"
            className="rounded-full border border-white px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:scale-[1.03] hover:bg-white hover:text-black sm:px-8 sm:py-4"
          >
            Custom Order
          </a>
        </motion.div>
      </div>
    </section>
  );
}