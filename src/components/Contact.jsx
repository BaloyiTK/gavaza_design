const WHATSAPP =
  "https://wa.me/27818147178?text=" +
  encodeURIComponent(
    "Hello Gavaza Sesinyani Designs, I would like a custom design."
  );

export default function Contact() {
  return (
    <section id="contact" className="bg-black px-4 py-16 text-white sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.28em] text-[#C89B5C] sm:text-sm">
          Commission
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
          Place your order
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-gray-300 sm:text-lg">
          Send the idea, the colours, or a photo. We will reply with the next
          step for your custom apron, embroidery, or traditional outfit.
        </p>

        <div className="mt-7 space-y-1 text-sm text-gray-400 sm:mt-8">
          <p>Makhado, Limpopo</p>
          <a
            href="tel:+27818147178"
            className="inline-block transition hover:text-[#C89B5C]"
          >
            081 814 7178
          </a>
        </div>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-block rounded-full bg-[#C89B5C] px-9 py-3.5 text-sm font-semibold text-black transition hover:bg-white sm:mt-10 sm:px-10 sm:py-4"
        >
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}