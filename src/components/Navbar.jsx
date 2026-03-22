// import React, { useState } from "react";
// import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";


// export default function Navbar() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleDarkMode = () => setDarkMode(!darkMode);
//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <nav
//       className={`flex items-center justify-between px-6 py-3 rounded-full mt-4 mx-auto max-w-5xl shadow-sm transition-all duration-300 ${
//         darkMode ? "bg-black text-white" : "bg-white text-black"
//       }`}
//     >
      
//       {/* Logo */}
//       <h1 className="text-2xl font-extrabold">
//         BILAL<span className="text-pink-600">.</span>
//       </h1>

//       {/* Hamburger (Mobile) */}
//       <button onClick={toggleMenu} className="md:hidden text-xl">
//         {menuOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Links */}
//       <ul
//         className={`md:flex md:space-x-8 absolute md:static left-0 top-16 md:top-auto w-full md:w-auto text-center bg-inherit transition-all duration-300 ${
//           menuOpen ? "block" : "hidden md:flex"
//         }`}
//       >
//         {[
//           { name: "Home", link: "#home" },
//           { name: "About me", link: "#about" },
//           { name: "Services", link: "#services" },
//           { name: "My work", link: "#work" },
//           { name: "Testimonials", link: "#testimonials" },
//         ].map((item) => (
//           <li key={item.name} className="my-2 md:my-0">
//             <a
//               href={item.link}
//               className="hover:text-pink-500 transition font-medium"
//             >
//               {item.name}
//             </a>
//           </li>
//         ))}
//       </ul>

//       {/* Right Icons */}
//       <div className="flex items-center space-x-4">
//         <button
//           onClick={toggleDarkMode}
//           className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
//         >
//           {darkMode ? <FaSun  /> : <FaMoon  />}
//         </button>
//         <button className="border rounded-full px-4 py-1 hover:bg-pink-500 hover:text-white transition">
//           Connect ↗
//         </button>
//       </div>
//     </nav>
//   );
// }


















// import React, { useState } from "react";
// import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

// export default function Navbar() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleDarkMode = () => setDarkMode(!darkMode);
//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <nav
//       className={`flex items-center justify-between px-6 py-3 rounded-full mt-4 mx-auto w-full max-w-[1200px] shadow-sm transition-all duration-300 overflow-x-hidden ${
//         darkMode ? "bg-black text-white" : "bg-white text-black"
//       }`}
//     >
//       {/* Logo */}
//       <h1 className="text-2xl font-extrabold">
//         BILAL<span className="text-pink-600">.</span>
//       </h1>

//       {/* Desktop Menu */}
//       <div className="hidden md:flex justify-center items-center gap-8 rounded-xl shadow-md px-6 py-3 bg-white/80 backdrop-blur-md">
//         <a href="#home" className="font-medium text-lg cursor-pointer hover:text-pink-500 transition">
//           Home
//         </a>
//         <a href="#about" className="font-medium text-lg cursor-pointer hover:text-pink-500 transition">
//           About
//         </a>
//         <a href="#services" className="font-medium text-lg cursor-pointer hover:text-pink-500 transition">
//           Services
//         </a>
//         <a href="#work" className="font-medium text-lg cursor-pointer hover:text-pink-500 transition">
//           My Work
//         </a>
//         <a href="#contact" className="font-medium text-lg cursor-pointer hover:text-pink-500 transition">
//           Contact
//         </a>
//       </div>

//       {/* Hamburger (Mobile) */}
//       <button onClick={toggleMenu} className="md:hidden text-xl">
//         {menuOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden absolute left-0 top-16 w-full bg-white shadow-md rounded-b-lg transition-all duration-300 ${
//           menuOpen ? "block" : "hidden"
//         }`}
//       >
//         <a
//           href="#home"
//           onClick={() => setMenuOpen(false)}
//           className="block py-3 text-center hover:text-pink-500 font-medium"
//         >
//           Home
//         </a>
//         <a
//           href="#about"
//           onClick={() => setMenuOpen(false)}
//           className="block py-3 text-center hover:text-pink-500 font-medium"
//         >
//           About
//         </a>
//         <a
//           href="#services"
//           onClick={() => setMenuOpen(false)}
//           className="block py-3 text-center hover:text-pink-500 font-medium"
//         >
//           Services
//         </a>
//         <a
//           href="#work"
//           onClick={() => setMenuOpen(false)}
//           className="block py-3 text-center hover:text-pink-500 font-medium"
//         >
//           My Work
//         </a>
//         <a
//           href="#contact"
//           onClick={() => setMenuOpen(false)}
//           className="block py-3 text-center hover:text-pink-500 font-medium"
//         >
//           Contact
//         </a>
//       </div>

//       {/* Right Icons */}
//       <div className="flex items-center space-x-4">
//         <button
//           onClick={toggleDarkMode}
//           className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
//         >
//           {darkMode ? <FaSun /> : <FaMoon />}
//         </button>

//         <a
//           className="border rounded-full px-4 py-1 hover:bg-pink-500 hover:text-white transition"
//           href="tel:+923015394760"
//         >
//           Connect ↗
//         </a>
//       </div>
//     </nav>
//   );
// }








// without gpt



// import React, { useState } from "react";
// import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

// export default function Navbar({ darkMode, setDarkMode }) {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleDarkMode = () => setDarkMode(!darkMode);
//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <nav
//       className={`flex items-center justify-between px-6 py-3 rounded-full mt-4 mx-auto w-full max-w-[1200px] shadow-sm transition-all duration-300 ${
//         darkMode ? "bg-black text-white" : "bg-white text-black"
//       }`}
//     >
//       {/* Logo */}
//       <h1 className="text-2xl font-extrabold">
//         BILAL<span className="text-pink-600">.</span>
//       </h1>

//       {/* Desktop Menu */}
//       <div className="hidden md:flex justify-center items-center gap-8 rounded-xl shadow-md px-6 py-3 bg-white/80 backdrop-blur-md">
//         <a href="#home" className="font-medium text-lg hover:text-pink-500 transition">
//           Home
//         </a>
//         <a href="#about" className="font-medium text-lg hover:text-pink-500 transition">
//           About
//         </a>
//         <a href="#services" className="font-medium text-lg hover:text-pink-500 transition">
//           Services
//         </a>
//         <a href="#work" className="font-medium text-lg hover:text-pink-500 transition">
//           My Work
//         </a>
//         <a href="#contact" className="font-medium text-lg hover:text-pink-500 transition">
//           Contact
//         </a>
//       </div>

//       {/* Hamburger Menu Button */}
//       <button onClick={toggleMenu} className="md:hidden text-xl">
//         {menuOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden absolute left-0 top-16 w-full bg-white shadow-md rounded-b-lg transition-all duration-300 ${
//           menuOpen ? "block" : "hidden"
//         }`}
//       >
//         <a
//           href="#home"
//           onClick={() => setMenuOpen(false)}
//           className="block py-3 text-center hover:text-pink-500 font-medium"
//         >
//           Home
//         </a>
//         <a
//           href="#about"
//           onClick={() => setMenuOpen(false)}
//           className="block py-3 text-center hover:text-pink-500 font-medium"
//         >
//           About
//         </a>
//         <a
//           href="#services"
//           onClick={() => setMenuOpen(false)}
//           className="block py-3 text-center hover:text-pink-500 font-medium"
//         >
//           Services
//         </a>
//         <a
//           href="#work"
//           onClick={() => setMenuOpen(false)}
//           className="block py-3 text-center hover:text-pink-500 font-medium"
//         >
//           My Work
//         </a>
//         <a
//           href="#contact"
//           onClick={() => setMenuOpen(false)}
//           className="block py-3 text-center hover:text-pink-500 font-medium"
//         >
//           Contact
//         </a>
//       </div>

//       {/* Icons Right */}
//       <div className="flex items-center space-x-4">
//         <button
//           onClick={toggleDarkMode}
//           className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
//         >
//           {darkMode ? <FaSun /> : <FaMoon />}
//         </button>

//         <a
//           className="border rounded-full px-4 py-1 hover:bg-pink-500 hover:text-white transition"
//           href="tel:+923015394760"
//         >
//           Connect ↗
//         </a>
//       </div>
//     </nav>
//   );
// }
 







































import React, { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = ["Home", "About", "Services", "Work", "Contact"];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1200px] px-6 py-3 rounded-full backdrop-blur-xl border transition-all duration-300 ${
        darkMode
          ? "bg-white/10 border-white/20 text-white"
          : "bg-white/70 border-gray-200 text-black"
      } shadow-lg`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide">
          BILAL
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
            .
          </span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              className="relative font-medium text-sm group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Dark Mode */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-white/20 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* CTA */}
          <a
            href="tel:+923015394760"
            className="
              hidden sm:block
              px-4 py-1.5 rounded-full text-sm
              bg-gradient-to-r from-indigo-500 to-purple-500
              hover:from-purple-500 hover:to-pink-500
              text-white transition-all duration-300
              shadow-md hover:scale-105
            "
          >
            Connect ↗
          </a>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden mt-4 rounded-xl p-4 backdrop-blur-xl border ${
              darkMode
                ? "bg-white/10 border-white/20"
                : "bg-white/80 border-gray-200"
            }`}
          >
            {navLinks.map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-center font-medium hover:text-indigo-400 transition"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}