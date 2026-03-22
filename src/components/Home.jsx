// wthout gpt



// import React from 'react'
// import { motion } from "framer-motion";
// import { SlideRight, SlideLeft, SlideUp } from "../utility/Animation";

// const Home = () => {
//   return (
//     <div className="overflow-x-hidden w-full px-4 sm:px-6 lg:px-0">

//       <motion.div
//         variants={SlideRight(0.6)}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false }}
//       >
//         <div className="pt-20 ml-0 lg:ml-[550px] ">

//           <img
//             src="/bilalpic.jpg"
//             alt=""
//             className="
//               rounded-full
//               h-[100px] w-[100px]
//               mx-auto              /* center on small/tablet */
//               lg:mx-0 lg:ml-[555px]/* preserve your desktop ml exactly */
              
//             "
//           />
//          <p className="mt-10 text-[16px] text-center lg:text-left">
//   Hi! I AM BILAL.👋🏻
// </p>

//         </div>
//       </motion.div>

//       <div className="mt-5">
//         <p className="
//             text-4xl lg:text-5xl font-semibold
//             text-center lg:text-left
//             mx-auto lg:mx-0 lg:ml-[340px] /* desktop left margin preserved */
//             max-w-full
//           ">
//           FrontEnd Web Developer <br />
//           <span className="block mt-2 font-bold text-2xl lg:text-4xl lg:ml-16">
//             From Sargodha,Pakistan.
//           </span>
//         </p>

//         <p className="
//             text-sm md:text-[14px] mt-5
//             text-center lg:text-left
//             mx-auto lg:mx-0 lg:ml-[360px] /* desktop left margin preserved */
//             max-w-xl
//           ">
//           I am a Frontend Developer based in Sargodha, Pakistan, with 1 year of experience
//           <br className="hidden lg:block" />
//           <span className="lg:ml-10">designing and developing responsive, user-centric web applications,</span>
//           <br className="hidden lg:block" />
//           <span className="lg:ml-36">currently working at ExlonTech.</span>
//         </p>
//       </div>

//       <div className="
//           mt-8 
//           flex flex-col items-center gap-4
//           lg:flex-row lg:items-start lg:ml-[410px] lg:p-10 /* desktop left margin preserved */
//         ">
//         <a
//           href="tel:+923015394760"
//           className="
//             flex items-center justify-center
//             h-10 w-40
//             bg-black text-white
//             rounded-full font-medium
//             hover:bg-pink-600 transition duration-300
//           "
//         >
//           Connect with me
//         </a>

//         <a
//           href="/cv.pdf"
//           download="cv.pdf"
//           className="
//             bg-white text-black w-40 h-10 rounded-full border-2 border-gray-400
//             flex items-center justify-center
//           "
//         >
//           My Resume
//         </a>
//       </div>

//     </div>
//   )
// }

// export default Home





















































import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Home = () => {
  return (
    <div className="overflow-x-hidden w-full min-h-screen bg-[#0f172a] text-white px-4 sm:px-6 lg:px-20 flex flex-col justify-center">

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto w-full"
      >

        {/* Profile Image */}
        <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
          <img
            src="/bilalpic.jpg"
            alt=""
            className="
              rounded-full
              h-[110px] w-[110px]
              border-4 border-indigo-500/40
              shadow-lg shadow-indigo-500/20
              hover:scale-105 transition duration-300
            "
          />
        </motion.div>

        {/* Intro */}
        <motion.p
          variants={fadeUp}
          className="mt-6 text-sm text-gray-300 text-center lg:text-left"
        >
          Hi! I AM BILAL 👋🏻
        </motion.p>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="mt-4 text-4xl lg:text-6xl font-bold leading-tight text-center lg:text-left"
        >
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Frontend Web Developer
          </span>
          <br />
          <span className="text-2xl lg:text-4xl text-gray-300">
            From Sargodha, Pakistan.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="mt-6 text-gray-400 max-w-xl text-center lg:text-left"
        >
          I am a Frontend Developer based in Sargodha, Pakistan, with 1 year of experience
          designing and developing responsive, user-centric web applications,
          currently working at ExlonTech.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-col sm:flex-row gap-4 items-center lg:items-start"
        >
          <a
            href="tel:+923015394760"
            className="
              px-6 py-2 rounded-full
              bg-gradient-to-r from-indigo-500 to-purple-500
              hover:from-purple-500 hover:to-pink-500
              transition-all duration-300
              shadow-lg shadow-indigo-500/30
              hover:scale-105
            "
          >
            Connect with me
          </a>

          <a
            href="/cv.pdf"
            download="cv.pdf"
            className="
              px-6 py-2 rounded-full
              border border-gray-600 text-gray-300
              hover:bg-white hover:text-black
              transition duration-300
              hover:scale-105
            "
          >
            My Resume
          </a>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Home;


































































// import React from "react";
// import { motion } from "framer-motion";
// import { SlideRight } from "../utility/Animation";

// const Home = () => {
//   return (
//     <div className="w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 lg:px-20 text-center bg-white">
//       {/* Profile Image */}
//       <motion.div
//         variants={SlideRight(0.3)}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false }}
//         className="flex flex-col items-center"
//       >
//         <img
//           src="/bilalpic.jpg"
//           alt="Bilal"
//           className="rounded-full h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 object-cover"
//         />
//         <p className="mt-4 text-lg sm:text-xl md:text-2xl font-medium">
//           Hi! I AM BILAL.👋🏻
//         </p>
//       </motion.div>

//       {/* Title */}
//       <div className="mt-6 max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
//         <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug">
//           FrontEnd Web Developer
//         </p>
//         <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-2">
//           From Sargodha, Pakistan.
//         </p>

//         {/* Description */}
//         <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
//           I am a Frontend Developer based in Sargodha, Pakistan, with 1 year of
//           experience designing and developing responsive, user-centric web
//           applications, currently working at ExlonTech.
//         </p>
//       </div>

//       {/* Buttons */}
//       <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
//         <button className="bg-black text-white w-40 rounded-full h-10 hover:scale-105 transition duration-200">
//           Connect with me
//         </button>
//         <button className="bg-white text-black w-40 h-10 rounded-full border-2 border-gray-400 hover:bg-gray-100 transition duration-200">
//           My Resume
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;
