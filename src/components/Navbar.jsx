import { Menu, X, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "../utils/scrollToSection";
import logo from "../assets/images/logo.png";

const WHATSAPP =
  "https://wa.me/27818147178?text=" +
  encodeURIComponent(
    "Hello Gavaza Sesinyani Designs, I would like a custom design."
  );

const SECTIONS = ["home", "about", "gallery", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  const onGalleryPage = location.pathname === "/gallery";
  const isSolid = scrolled || open || onGalleryPage;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (onGalleryPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.15, 0.4, 0.7],
      }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);

      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [onGalleryPage]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const goTo = (section) => {
    setActiveSection(section);
    setOpen(false);

    setTimeout(() => {
      if (location.pathname !== "/") {
        navigate(`/#${section}`);
      } else {
        scrollToSection(section);
      }
    }, 100);
  };

  const linkClass = (section, isMobile = false) => {
    const isActive =
      !onGalleryPage && activeSection === section;

    if (isActive) {
      return "font-semibold text-[#C89B5C] transition duration-300";
    }

    if (isMobile || isSolid) {
      return "text-gray-700 transition duration-300 hover:text-[#C89B5C]";
    }

    return "text-white transition duration-300 hover:text-[#C89B5C]";
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        isSolid
          ? "bg-white/95 py-2 shadow-md backdrop-blur-md sm:py-2.5"
          : "bg-transparent py-3 sm:py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* =========================
            LOGO
        ========================== */}
        <button
          type="button"
          onClick={() => goTo("home")}
          className="flex shrink-0 items-center"
          aria-label="Go to home"
        >
          <img
            src={logo}
            alt="Gavaza Sesinyani Designs"
            className="
              h-auto
              w-[105px]
              max-w-none
              object-contain
              transition-transform
              duration-300
              hover:scale-105

              sm:w-[125px]
              md:w-[140px]
              lg:w-[155px]
            "
          />
        </button>

        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">

          <button
            type="button"
            onClick={() => goTo("home")}
            className={linkClass("home")}
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => goTo("about")}
            className={linkClass("about")}
          >
            About
          </button>

          <button
            type="button"
            onClick={() => goTo("gallery")}
            className={linkClass("gallery")}
          >
            Designs
          </button>

          <Link
            to="/gallery"
            className={`transition duration-300 hover:text-[#C89B5C] ${
              onGalleryPage
                ? "font-semibold text-[#C89B5C]"
                : isSolid
                ? "text-gray-700"
                : "text-white"
            }`}
          >
            Gallery
          </Link>

          <button
            type="button"
            onClick={() => goTo("contact")}
            className={linkClass("contact")}
          >
            Contact
          </button>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-[#C89B5C]
              px-5
              py-2.5
              text-sm
              font-semibold
              text-black
              transition
              hover:bg-[#b08a4f]
            "
          >
            <ShoppingBag size={16} />
            Order
          </a>
        </div>

        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className={`lg:hidden ${
            isSolid
              ? "text-[#C89B5C]"
              : "text-white"
          }`}
          aria-label={
            open ? "Close menu" : "Open menu"
          }
          aria-expanded={open}
        >
          {open ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* =========================
          MOBILE MENU
      ========================== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              overflow-hidden
              border-t
              border-gray-100
              bg-white
              lg:hidden
            "
          >
            <div className="flex flex-col gap-1 px-4 py-6 sm:px-6">

              <button
                type="button"
                onClick={() => goTo("home")}
                className={`rounded-lg px-4 py-3 text-left text-base ${linkClass(
                  "home",
                  true
                )}`}
              >
                Home
              </button>

              <button
                type="button"
                onClick={() => goTo("about")}
                className={`rounded-lg px-4 py-3 text-left text-base ${linkClass(
                  "about",
                  true
                )}`}
              >
                About
              </button>

              <button
                type="button"
                onClick={() => goTo("gallery")}
                className={`rounded-lg px-4 py-3 text-left text-base ${linkClass(
                  "gallery",
                  true
                )}`}
              >
                Designs
              </button>

              <Link
                to="/gallery"
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 text-base ${
                  onGalleryPage
                    ? "font-semibold text-[#C89B5C]"
                    : "text-gray-700"
                }`}
              >
                Gallery
              </Link>

              <button
                type="button"
                onClick={() => goTo("contact")}
                className={`rounded-lg px-4 py-3 text-left text-base ${linkClass(
                  "contact",
                  true
                )}`}
              >
                Contact
              </button>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-4
                  rounded-full
                  bg-[#C89B5C]
                  py-3.5
                  text-center
                  text-sm
                  font-semibold
                  text-black
                  transition
                  hover:bg-[#b08a4f]
                "
              >
                Order on WhatsApp
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}