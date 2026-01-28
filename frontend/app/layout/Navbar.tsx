// Navbar.tsx
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Transition } from "framer-motion";
import { Link } from "react-router";
import { cn } from "../lib/utils";

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

/** ====== Subcomponentes internos ====== */
interface HoveredLinkProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  [key: string]: any;
}

const HoveredLink = ({ children, to, href, ...rest }: HoveredLinkProps) => {
  // Si pasas "to", usa <Link/> de react-router; si no, cae a <a>
  if (to) {
    return (
      <Link
        to={to}
        {...rest}
        className="text-[#e6e1d7] hover:text-[#f8f7f5]"
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      {...rest}
      className="text-neutral-700 hover:text-black"
    >
      {children}
    </a>
  );
};

interface ProductItemProps {
  title: string;
  description: string;
  href: string;
  src: string;
}

const ProductItem = ({ title, description, href, src }: ProductItemProps) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl object-cover"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-[#f8f7f5]">
          {title}
        </h4>
        <p className="text-[#c8b4a0] text-sm max-w-[10rem]">
          {description}
        </p>
      </div>
    </a>
  );
};

interface MenuProps {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}

const Menu = ({ setActive, children }: MenuProps) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-[#544237]/30 bg-[#2a2e26]/80 backdrop-blur-md shadow-2xl flex justify-center space-x-6 px-8 py-6"
    >
      {children}
    </nav>
  );
};

interface MenuItemProps {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children: React.ReactNode;
}

const MenuItem = ({ setActive, active, item, children }: MenuItemProps) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-[#f8f7f5] hover:opacity-[0.9] select-none"
      >
        {item}
      </motion.p>

      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-[#1a1d18] rounded-2xl overflow-hidden border border-[#544237]/30 shadow-2xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

/** ====== Componente principal exportado ====== */
interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  // Cerrar menú móvil al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Ocultar/mostrar navbar al hacer scroll (solo en desktop)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Solo aplicar en desktop (pantallas md y mayores)
      if (window.innerWidth >= 768) {
        // Si el scroll es muy pequeño (cerca del top), siempre mostrar
        if (currentScrollY < 10) {
          setIsNavbarVisible(true);
        } else if (currentScrollY > lastScrollY.current) {
          // Scroll hacia abajo - ocultar
          setIsNavbarVisible(false);
        } else {
          // Scroll hacia arriba - mostrar
          setIsNavbarVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Todo el contenido/"parámetros" se define aquí mismo:

  const products = [
    {
      title: "MT3 Arquitectos",
      href: "https://mt3arquitectos.com.mx",
      src: "/home-imgs/gallery_imgs/gallery1.png",
      description: "Architecture and interior design",
    },
    {
      title: "Sinergia Telecomunicaciones",
      href: "https://sinergia-telecomunicaciones.com.mx",
      src: "/home-imgs/gallery_imgs/gallery2.png",
      description: "Telecommunications solutions",
    },
    {
      title: "Stellaris Education",
      href: "https://stellarisnashville.com",
      src: "/home-imgs/gallery_imgs/gallery3.png",
      description: "Pre-K education school in Nashville, TN",
    },
    {
      title: "Stoever",
      href: "https://stoever.com.mx",
      src: "/home-imgs/gallery_imgs/gallery4.png",
      description: "Construction and leather tanning chemicals company",
    },
  ];

  const services = [
    { label: "Websites", to: "/services/websites" },
    { label: "Ecommerce", to: "/services/ecommerce" },
    { label: "Branding", to: "/services/branding" },
    { label: "AI Chatbots", to: "/services/chatbots" },
  ];

  const toggleMobileAccordion = (section: string) => {
    setMobileAccordion(mobileAccordion === section ? null : section);
  };

  return (
    <>
      {/* Desktop Menu - Hidden on mobile */}
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isNavbarVisible ? 0 : -120,
          opacity: isNavbarVisible ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "fixed top-4 inset-x-0 max-w-xl mx-auto z-50 hidden md:block",
          isNavbarVisible ? "pointer-events-auto" : "pointer-events-none",
          className
        )}
      >
        <Menu setActive={setActive}>
          <Link
            to="/"
            className="cursor-pointer text-[#f8f7f5] hover:opacity-[0.9] select-none"
          >
            Home
          </Link>

          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              {services.map((service) => (
                <HoveredLink key={service.label} to={service.to}>
                  {service.label}
                </HoveredLink>
              ))}
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Portfolio">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              {products.map((p) => (
                <ProductItem key={p.title} {...p} />
              ))}
            </div>
          </MenuItem>



          <Link
            to="/contact"
            className="cursor-pointer text-[#f8f7f5] hover:opacity-[0.9] select-none"
          >
            Contact
          </Link>
        </Menu>
      </motion.div>

      {/* Mobile Menu - Visible only on mobile */}
      <div
        ref={mobileMenuRef}
        className={cn("fixed top-4 right-4 z-50 md:hidden", className)}
      >
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-3 rounded-lg bg-[#2a2e26]/80 backdrop-blur-md border border-[#544237]/30 shadow-2xl"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-[#f8f7f5]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
            />

            {/* Sidebar */}
            <motion.div
              ref={sidebarRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[75vw] max-w-xs bg-[#1a1d18] border-l border-[#544237]/30 z-50 md:hidden overflow-y-auto"
            >
              <div className="p-6 pt-20">
                {/* Close button */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="absolute top-4 right-4 p-2 text-[#c8b4a0] hover:text-[#f8f7f5]"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Home Section */}
                <div className="border-b border-[#544237]/30 pb-4 mb-4">
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xl font-medium text-[#f8f7f5] hover:text-[#c8b4a0] transition-colors"
                  >
                    Home
                  </Link>
                </div>

                {/* Services Section */}
                <div className="border-b border-[#544237]/30 py-4">
                  <button
                    onClick={() => toggleMobileAccordion("services")}
                    className="w-full flex justify-between items-center text-left text-xl font-medium text-[#f8f7f5]"
                  >
                    <span>Services</span>
                    <svg
                      className={cn(
                        "w-5 h-5 transition-transform",
                        mobileAccordion === "services" ? "rotate-180" : ""
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileAccordion === "services" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 space-y-3 pl-4">
                          {services.map((s) => (
                            <Link
                              key={s.label}
                              to={s.to}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-base text-[#c8b4a0] hover:text-[#f8f7f5] transition-colors"
                            >
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Portfolio Section */}
                <div className="border-b border-[#544237]/30 py-4">
                  <button
                    onClick={() => toggleMobileAccordion("products")}
                    className="w-full flex justify-between items-center text-left text-xl font-medium text-[#f8f7f5]"
                  >
                    <span>Portfolio</span>
                    <svg
                      className={cn(
                        "w-5 h-5 transition-transform",
                        mobileAccordion === "products" ? "rotate-180" : ""
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileAccordion === "products" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 space-y-3 pl-4">
                          {products.map((p) => (
                            <a
                              key={p.title}
                              href={p.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-base text-[#c8b4a0] hover:text-[#f8f7f5] transition-colors"
                            >
                              {p.title}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Contact Section */}
                <div className="border-t border-[#544237]/30 py-4">
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xl font-medium text-[#f8f7f5] hover:text-[#c8b4a0] transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
