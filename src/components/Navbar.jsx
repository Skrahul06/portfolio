import { FaSquareXTwitter, FaXTwitter } from "react-icons/fa6"
// import logo from "../assets/raviKumarLogo.webp"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { motion } from 'framer-motion'

const navVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const Navbar = () => {
  return (
    <motion.nav className="flex items-center justify-between py-6" variants={navVariants} initial="hidden" animate="visible">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          {/* Stylish SR Logo */}
          <span className="mx-2 font-extrabold text-3xl tracking-tight text-stone-900 dark:text-white select-none" style={{letterSpacing: '0.1em'}}>
            SR
          </span>
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/sheikh-rahul-b912162b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Skrahul06"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/_sheikh_rahul?igsh=MTJ2NGYzdjc5cTgyZg=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://x.com/SheikhRahul06?t=BNBZxvUCxhMGWkwWAxm3vQ&s=09"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="XTwitter">
          <FaSquareXTwitter />
        </a>
      </div>
    </motion.nav>
  )
}

export default Navbar