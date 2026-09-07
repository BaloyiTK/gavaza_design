import { Link } from "react-router-dom";

const WHATSAPP =
  "https://wa.me/27818147178?text=" +
  encodeURIComponent(
    "Hello Gavaza Sesinyani Designs, I would like a custom design."
  );

const EMAIL = "mailto:info@gavazasesinyani.co.za";
const INSTAGRAM = "https://instagram.com/gavazasesinyani";
const PHONE = "tel:+27818147178";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-14 md:grid-cols-3 md:gap-8">
        {/* Brand */}
        <div className="max-w-xs">
          <h2 className="font-serif text-xl sm:text-2xl">
            Gavaza <span className="text-[#C89B5C]">Sesinyani</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            Custom aprons, embroidery, and traditional clothes. Made according
            to your choice.
          </p>
        </div>

        {/* Explore */}
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#C89B5C]">
            Explore
          </p>
          <nav className="mt-4 flex flex-col gap-2.5 text-sm text-gray-300">
            <a href="#home" className="transition hover:text-[#C89B5C]">Home</a>
            <a href="#about" className="transition hover:text-[#C89B5C]">About</a>
            <a href="#gallery" className="transition hover:text-[#C89B5C]">Designs</a>
            <Link to="/gallery" className="transition hover:text-[#C89B5C]">Gallery</Link>
            <a href="#contact" className="transition hover:text-[#C89B5C]">Contact</a>
          </nav>
        </div>

        {/* Order + Icons */}
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-[#C89B5C]">
            Order
          </p>
          <p className="mt-4 text-sm text-gray-300">Makhado, Limpopo</p>
          <a
            href={PHONE}
            className="mt-1 block text-sm text-gray-300 transition hover:text-[#C89B5C]"
          >
            081 814 7178
          </a>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {/* WhatsApp */}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>

            {/* Phone */}
            <a
              href={PHONE}
              aria-label="Call us"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C89B5C] text-black transition hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href={EMAIL}
              aria-label="Email us"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EA4335] text-white transition hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white transition hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-gray-500 sm:text-sm">
        © {new Date().getFullYear()} Gavaza Sesinyani Designs. All rights reserved.
      </div>
    </footer>
  );
}