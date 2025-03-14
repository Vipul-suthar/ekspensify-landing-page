import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { appFullLogo, imgPlaystore } from "../assets";
import { MAIL_CONTACT_US, URL_PLAY_STORE } from "../utils/constants";

const Footer = () => {
  return (
    <motion.footer
      className="w-full bg-main  py-6 border-t border-primary"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col container mx-auto max-w-7xl md:flex-row justify-between items-start md:items-center gap-6 px-5 md:px-0">
        {/* Left Section */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          // animate={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
        >
          {/* Logo */}
          <Link to="/" aria-label="Go Home">
            <img
              src={appFullLogo}
              alt="Ekspensify"
              className="w-24 h-auto select-none cursor-pointer"
              draggable={false}
            />
          </Link>

          {/* Description */}
          <p
            className="text-secondary  text-xs md:text-sm mt-5 max-w-sm"
            style={{ lineHeight: "25px" }}
          >
            Track your money, manage your budget, and build better financial
            habits—all in one app.
          </p>
        </motion.div>

        {/* Right Section - Contact + Play Store */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          // animate={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
        >
          <div className="flex flex-wrap items-center justify-start md:justify-end  gap-1 md:gap-4">
            {/* Email */}
            <motion.a
              href={`mailto:${MAIL_CONTACT_US}`}
              className="flex items-center cursor-pointer gap-2 px-3 py-2 border border-primary rounded-full shadow-sm"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <Mail className="size-4 md:size-[18px]" />
              <span className="font-medium text-xs md:text-sm">Contact Us</span>
            </motion.a>

            {/* Play Store Button */}
            <motion.a
              href={URL_PLAY_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center cursor-pointer gap-2 px-3 py-2 border border-primary rounded-full shadow-sm"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <img
                src={imgPlaystore}
                alt="PlayStore"
                className="w-4 h-auto select-none cursor-pointer"
                draggable={false}
              />
              <span className="font-medium text-xs md:text-sm">Play Store</span>
            </motion.a>
          </div>
          <div className="mt-6 flex flex-wrap items-start justify-start md:justify-center gap-6">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                to="/open-source"
                aria-label="Go Open Source Page"
                className="hover:text-linkHover text-xs md:text-sm no-underline transition-colors duration-300"
              >
                Open Source
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                to="/privacy-policy"
                aria-label="Go Privacy Policy Page"
                className="hover:text-linkHover text-xs md:text-sm no-underline transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                to="/terms-conditions"
                aria-label="Go Terms Conditions Page"
                className="hover:text-linkHover text-xs md:text-sm no-underline transition-colors duration-300"
              >
                Terms & Condition
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
