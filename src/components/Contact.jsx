
const WHATSAPP_NUMBER = "27818147178";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const name = form.get("name");
    const phone = form.get("phone");
    const service = form.get("service");
    const message = form.get("message");

    const whatsappMessage =
      "Hello Gavaza Sesinyani Designs,\n\n" +
      "I would like to make an enquiry.\n\n" +
      "Name: " + name + "\n" +
      "Phone: " + phone + "\n" +
      "Service: " + service + "\n\n" +
      "Details:\n" +
      message;

    const whatsappUrl =
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="bg-black px-4 py-16 text-white sm:px-6 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
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
        </div>

        {/* Form + Contact Details */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <h3 className="font-serif text-2xl font-semibold">
              Send an enquiry
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Tell us what you have in mind and we’ll get back to you.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-[#C89B5C]"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Phone number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="081 814 7178"
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-[#C89B5C]"
                />
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm text-gray-300"
                >
                  What do you need?
                </label>

                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-[#C89B5C]"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="Custom Apron">
                    Custom Apron
                  </option>

                  <option value="Embroidery">
                    Embroidery
                  </option>

                  <option value="Traditional Outfit">
                    Traditional Outfit
                  </option>

                  <option value="Custom Design">
                    Custom Design
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Your message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  placeholder="Describe your design, colours, quantity, event date, or any other details..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-[#C89B5C]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-full bg-[#C89B5C] px-6 py-4 text-sm font-semibold text-black transition hover:bg-white"
              >
                Send Enquiry on WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Information + Map */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
            <div className="p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[#C89B5C]">
                Visit us
              </p>

              <h3 className="mt-2 font-serif text-2xl font-semibold">
                Gavaza Sesinyani Designs
              </h3>

              <div className="mt-6 space-y-4 text-sm text-gray-400">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Location
                  </p>

                  <p className="mt-1 text-gray-300">
                    Makhado, Limpopo
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Phone
                  </p>

                  <a
                    href="tel:+27818147178"
                    className="mt-1 inline-block text-gray-300 transition hover:text-[#C89B5C]"
                  >
                    081 814 7178
                  </a>
                </div>
              </div>

              <a
                href="https://wa.me/27818147178?text=Hello%20Gavaza%20Sesinyani%20Designs%2C%20I%20would%20like%20a%20custom%20design."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block rounded-full border border-[#C89B5C] px-6 py-3 text-sm font-semibold text-[#C89B5C] transition hover:bg-[#C89B5C] hover:text-black"
              >
                Chat directly on WhatsApp
              </a>
            </div>

            {/* Google Map */}
            <div className="h-[320px] w-full">
               <iframe
    title="Gavaza Sesinyani Designs - Makhado"
    src="https://www.google.com/maps?q=163+Elim+Mpheni+Block+A,+Makhado,+South+Africa,+0960&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}