import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin, Github } from "lucide-react";

const menuVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: { y: -30, opacity: 0, transition: { duration: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial="top"
      animate={scrolled ? "scrolled" : "top"}
      variants={{
        top: {
          width: "95%",
          left: "50%",
          x: "-50%",
          borderRadius: "0px",
          top: 0,
          borderWidth: 0,
        },
        scrolled: {
          width: "90%",
          left: "50%",
          x: "-50%",
          borderRadius: "9999px",
          top: 16,
          borderWidth: 2,
        },
      }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="fixed z-50 bg-dark/60 backdrop-blur-md py-2 md:py-3 px-4 md:px-8 flex justify-between items-center shadow-sm border-primary"
      style={{ position: "fixed", borderStyle: 'solid' }}
    >
      <h1 className="text-white text-xl font-medium font-lora tracking-wide flex items-center gap-2">
        <span className="flex items-center font-lora justify-center rounded-full bg-primary w-10 h-10 text-white font-bold text-lg">
          T.
        </span>
        TimTech
      </h1>

      {/* Hamburger button for mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <motion.span
          animate={menuOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
          className="block h-0.5 w-7 bg-white transition-all duration-300 origin-center"
        />
        <motion.span
          animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          className="block h-0.5 w-7 bg-white my-1 transition-all duration-300 origin-center"
        />
        <motion.span
          animate={menuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
          className="block h-0.5 w-7 bg-white transition-all duration-300 origin-center"
        />
      </button>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-6 text-white text-sm items-center">
        <li><a href="#home" className="hover:text-primary">Home</a></li>
        <li><a href="#about" className="hover:text-primary">About</a></li>
        <li><a href="#projects" className="hover:text-primary">Projects</a></li>
        <li><a href="#contact" className="hover:text-primary">Contact</a></li>
        {/* <li>
          <a
            href="/resume.pdf"
            className="bg-primary text-white px-4 py-2 rounded hover:opacity-90 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
        </li> */}        
      </ul>

      <ul className="hidden md:flex text-white gap-6">
        {/* Social icons */}
        <li>
          <a href="https://x.com/TimiTech10" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-primary">
            {/* Lucide Twitter/X icon */}
            <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.5 6.5L6.5 17.5" />
              <path d="M6.5 6.5l11 11" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/oluwatimilehin-adekunle-aa76a1271/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary">
            <Linkedin size={22} />
          </a>
        </li>
        <li>
          <a href="https://github.com/timi-emmanuel" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary">
            <Github size={22} />
          </a>
        </li>
      </ul>
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden absolute top-full left-0 w-full bg-dark text-light text-center flex flex-col gap-6 py-6 shadow-lg"
          >
            <motion.li variants={itemVariants}><a href="#home" className="hover:text-primary block" onClick={() => setMenuOpen(false)}>Home</a></motion.li>
            <motion.li variants={itemVariants}><a href="#about" className="hover:text-primary block" onClick={() => setMenuOpen(false)}>About</a></motion.li>
            <motion.li variants={itemVariants}><a href="#projects" className="hover:text-primary block" onClick={() => setMenuOpen(false)}>Projects</a></motion.li>
            <motion.li variants={itemVariants}><a href="#contact" className="hover:text-primary block" onClick={() => setMenuOpen(false)}>Contact</a></motion.li>
            <motion.li variants={itemVariants} className="pt-2">
              <span className="block text-xs text-gray-400 mb-2">Connect with me</span>
              <div className="flex justify-center gap-6">
                <a href="https://x.com/TimiTech10" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-primary">
                  {/* Lucide Twitter/X icon */}
                  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.5 6.5L6.5 17.5" />
                    <path d="M6.5 6.5l11 11" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/oluwatimilehin-adekunle-aa76a1271/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary">
                  <Linkedin size={22} />
                </a>
                <a href="https://github.com/timi-emmanuel" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary">
                  <Github size={22} />
                </a>
              </div>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
