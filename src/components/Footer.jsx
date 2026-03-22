// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-white text-gray-800 text-center py-10 font-poppins border-t border-gray-200">
//       <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
//         {/* Name */}
//         <h2 className="text-3xl sm:text-4xl font-bold mb-3">
//           BILAL<span className="text-red-600">.</span>
//         </h2>

//         {/* Email */}
//         <p className="flex justify-center items-center gap-2 text-gray-600 text-sm sm:text-base mb-6">
//           {/* <img
//             src=""
//             alt="email icon"
//             className="w-5 h-5"
//           /> */}
//           📩 muhammadbilalishaq318@gmail.com
//         </p>

//         {/* Divider */}
//         <hr className="border-gray-300 my-6" />

//         {/* Bottom Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
//           <p className="text-center md:text-left">
//             © 2025 BILAL ISHAQ. All rights reserved.
//           </p>

//           <div className="flex flex-wrap justify-center md:justify-end gap-5 sm:gap-8">
//             <a
//               href="#"
//               className="hover:text-red-600 transition-colors duration-300"
//             >
//               Terms of Services
//             </a>
//             <a
//               href="#"
//               className="hover:text-red-600 transition-colors duration-300"
//             >
//               Privacy Policy
//             </a>
//             <a
//               href="tel:+923015394760"
//               className="hover:text-red-600 transition-colors duration-300"
//             >
//               Connect with me
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;








// without gpt


// import React from "react";

// const Footer = ({ darkMode }) => {
//   return (
//     <footer
//       className={`text-center py-10 font-poppins border-t transition-all duration-300
//         ${darkMode
//           ? "bg-[#020617] text-gray-300 border-gray-700"
//           : "bg-white text-gray-800 border-gray-200"}
//       `}
//     >
//       <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20">

//         {/* Name */}
//         <h2 className="text-3xl sm:text-4xl font-bold mb-3">
//           BILAL<span className="text-red-600">.</span>
//         </h2>

//         {/* Email */}
//         <p
//           className={`flex justify-center items-center gap-2 text-sm sm:text-base mb-6
//             ${darkMode ? "text-gray-400" : "text-gray-600"}
//           `}
//         >
//           📩 muhammadbilalishaq318@gmail.com
//         </p>

//         {/* Divider */}
//         <hr className={`${darkMode ? "border-gray-700" : "border-gray-300"} my-6`} />

//         {/* Bottom Section */}
//         <div
//           className={`flex flex-col md:flex-row justify-between items-center gap-4 text-sm
//             ${darkMode ? "text-gray-400" : "text-gray-500"}
//           `}
//         >
//           <p className="text-center md:text-left">
//             © 2025 BILAL ISHAQ. All rights reserved.
//           </p>

//           <div className="flex flex-wrap justify-center md:justify-end gap-5 sm:gap-8">
//             <a
//               href="#"
//               className="hover:text-red-600 transition-colors duration-300"
//             >
//               Terms of Services
//             </a>

//             <a
//               href="#"
//               className="hover:text-red-600 transition-colors duration-300"
//             >
//               Privacy Policy
//             </a>

//             <a
//               href="tel:+923015394760"
//               className="hover:text-red-600 transition-colors duration-300"
//             >
//               Connect with me
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;































































import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-gray-300 border-t border-white/10 mt-20">

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20 py-12"
      >

        {/* Top Section */}
        <div className="text-center">

          {/* Logo */}
          <h2 className="text-3xl sm:text-4xl font-bold">
            BILAL
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
              .
            </span>
          </h2>

          {/* Email */}
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            📩 muhammadbilalishaq318@gmail.com
          </p>

          {/* Divider */}
          <div className="w-full h-[1px] bg-white/10 my-8"></div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">

          <p className="text-center md:text-left">
            © 2025 Bilal Ishaq. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-6">

            {[
              "Terms of Services",
              "Privacy Policy",
              "Connect",
            ].map((item, i) => (
              <a
                key={i}
                href={item === "Connect" ? "tel:+923015394760" : "#"}
                className="
                  relative group
                  hover:text-white transition
                "
              >
                {item}

                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

          </div>
        </div>

      </motion.div>
    </footer>
  );
};

export default Footer;





