// import React from 'react'
// import { VscVscode } from "react-icons/vsc";




// const About = () => {
//   return (
//     <div className='mt-20'>

//      <div className='text-center'> 
//         <p className='font-bold'>Introduction</p>
//       <p className='text-4xl font-bold'>About Me</p>
//       </div>

//       <div className='flex p-10 ml-44'>
//         <div className=''><img className='h-72 w-60 rounded-lg ' src="/bilalpic.jpg" alt="" /></div>
//         <div className='ml-10'>
//             <p className='text-[14px]'>I am aFrontend Developer based in Sargodha, Pakistan, with 1 year of experience <br /> designing and developing responsive, user-centric web applications, <br /> currently working at ExlonTech.  </p>
//                         {/* cards */}
                       
//                         <div className='flex gap-5 mt-6 '>
                         
//                            <div className='h-28 w-28 cursor-pointer border-2 border-gray-400 border-b-black border-r-black text-center  '>
//                            <p className='text-[18px] font-extrabold mt-3 '> Languages </p>
//                            <p className='text-[10px] mt-1 font-bold'>HTML , CSS , <br /> Tailwind Css 
// React.Js , <br /> JavaScript </p>
//                            </div>
//                              <div className='h-28 w-28 cursor-pointer border-2 border-gray-400 border-b-black border-r-black text-center  '>
//                            <p className='text-[18px] font-extrabold mt-3'>Education </p>
//                            <p className='text-[10px] mt-1 font-bold'> Bachelor in Computer Science (BSCS) 
// </p>
//                            </div>
//   <div className='h-28 w-28 border-2 border-gray-400 cursor-pointer border-b-black border-r-black text-center  '>
//                            <p className='text-[18px] font-extrabold mt-3'> Projects </p>
//                            <p className='text-[10px] mt-1 font-bold'>Built more than 5  <br />
// projects
// </p>
//                            </div>


//                            </div>
//                            <div className='mt-6'>
//                             <p className='font-bold'>Tools i use</p>
//                            </div>
//                            {/* tools */}
//                            <div className='flex mt-2 gap-3'>
//                             <div className='text-blue-500 text-2xl p-1 h-8 w-8 cursor-pointer   border border-gray-400'>
//                            <  VscVscode />

//                             </div>
      
//                            <div className='flex gap-3'>
                            
//                             <img className='h-8 w-8 p-1 border border-gray-400 cursor-pointer ' src="/img2.png" alt="" />
//                             <img className='h-8 w-8 p-1 border border-gray-400 cursor-pointer' src="/img3.png" alt="" />
//                             <img className='h-8 w-8 p-1 border border-gray-400 cursor-pointer' src="/img4.png" alt="" />
                            
//                             <img className='h-8 w-8 p-1 border border-gray-400 cursor-pointer' src="/img5.png" alt="" />
//                             </div>
//                            </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default About


























// without gpt



// import React from 'react'
// import { VscVscode } from "react-icons/vsc";

// const About = () => {
//   return (
//     <div className='mt-20'>

//       <div className='text-center'>
//         <p className='font-bold'>Introduction</p>
//         <p className='text-4xl font-bold'>About Me</p>
//       </div>

//       <div
//         className='
//           flex 
//           flex-col lg:flex-row          /* mobile column, desktop row */
//           p-6 lg:p-10
//           ml-0 lg:ml-44                 /* mobile no margin, desktop same margin */
//           items-center lg:items-start   /* mobile center align */
//           gap-8                         /* spacing for mobile */
//         '
//       >

//         {/* Image */}
//         <div>
//           <img
//             className='
//               h-60 w-48 sm:h-72 sm:w-60 
//               rounded-lg 
//               mx-auto lg:mx-0            /* mobile center, desktop original */
//             '
//             src="/bilalpic.jpg"
//             alt=""
//           />
//         </div>

//         {/* Right Side Text */}
//         <div className='lg:ml-10 text-center lg:text-left'>
//           <p className='text-[14px]'>
//             I am a Frontend Developer based in Sargodha, Pakistan, with 1 year of experience <br />
//             designing and developing responsive, user-centric web applications, <br />
//             currently working at ExlonTech.
//           </p>

//           {/* Cards */}
//           <div className='
//             flex 
//             flex-wrap              /* wrap on mobile */
//             justify-center lg:justify-start 
//             gap-5 mt-6
//           '>

//             <div className='h-28 w-28 cursor-pointer border-2 border-gray-400 border-b-black border-r-black text-center'>
//               <p className='text-[18px] font-extrabold mt-3'> Languages </p>
//               <p className='text-[10px] mt-1 font-bold'>
//                 HTML , CSS , <br /> Tailwind Css React.Js , <br /> JavaScript
//               </p>
//             </div>

//             <div className='h-28 w-28 cursor-pointer border-2 border-gray-400 border-b-black border-r-black text-center'>
//               <p className='text-[18px] font-extrabold mt-3'>Education</p>
//               <p className='text-[10px] mt-1 font-bold'>Bachelor in Computer Science (BSCS)</p>
//             </div>

//             <div className='h-28 w-28 cursor-pointer border-2 border-gray-400 border-b-black border-r-black text-center'>
//               <p className='text-[18px] font-extrabold mt-3'>Projects</p>
//               <p className='text-[10px] mt-1 font-bold'>
//                 Built more than 5 <br />
//                 projects
//               </p>
//             </div>
//           </div>

//           <div className='mt-6'>
//             <p className='font-bold'>Tools I use</p>
//           </div>

//           {/* Tools */}
//           <div className='
//             flex 
//             flex-wrap 
//             justify-center lg:justify-start 
//             mt-2 gap-3
//           '>
//             <div className='text-blue-500 text-2xl p-1 h-8 w-8 cursor-pointer border border-gray-400 flex items-center justify-center'>
//               <VscVscode />
//             </div>

//             <div className='flex gap-3 flex-wrap'>
//               <img className='h-8 w-8 p-1 border border-gray-400 cursor-pointer' src="/img2.png" alt="" />
//               <img className='h-8 w-8 p-1 border border-gray-400 cursor-pointer' src="/img3.png" alt="" />
//               <img className='h-8 w-8 p-1 border border-gray-400 cursor-pointer' src="/img4.png" alt="" />
//               <img className='h-8 w-8 p-1 border border-gray-400 cursor-pointer' src="/img5.png" alt="" />
//             </div>
//           </div>

//         </div>
//       </div>

//     </div>
//   )
// }

// export default About















































import React from "react";
import { motion } from "framer-motion";
import { VscVscode } from "react-icons/vsc";

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
    transition: { duration: 0.6 },
  },
};

const About = () => {
  return (
    <div className="mt-24 px-4 lg:px-20 text-white bg-[#0f172a]">

      {/* Heading */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center"
      >
        <motion.p variants={fadeUp} className="text-gray-400">
          Introduction
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-4xl lg:text-5xl font-bold mt-2"
        >
          About Me
        </motion.h2>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center lg:items-start gap-10 mt-12 max-w-6xl mx-auto"
      >

        {/* Image */}
        <motion.div variants={fadeUp}>
          <img
            src="/bilalpic.jpg"
            alt=""
            className="
              h-64 w-52 sm:h-72 sm:w-60
              rounded-2xl
              border border-white/10
              shadow-xl shadow-indigo-500/10
              hover:scale-105 transition duration-300
            "
          />
        </motion.div>

        {/* Right Side */}
        <motion.div variants={fadeUp} className="text-center lg:text-left">

          <p className="text-gray-400 max-w-xl">
            I am a Frontend Developer based in Sargodha, Pakistan, with 1 year of experience
            designing and developing responsive, user-centric web applications,
            currently working at ExlonTech.
          </p>

          {/* Cards */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-8">

            {[
              {
                title: "Languages",
                desc: "HTML, CSS, Tailwind, React, JavaScript",
              },
              {
                title: "Education",
                desc: "BS Computer Science",
              },
              {
                title: "Projects",
                desc: "Built 5+ Projects",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="
                  w-36 h-32 p-3 rounded-xl
                  bg-white/5 backdrop-blur-lg
                  border border-white/10
                  shadow-md
                  cursor-pointer
                "
              >
                <p className="font-semibold text-sm text-indigo-400">
                  {item.title}
                </p>
                <p className="text-xs mt-2 text-gray-300">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>

          {/* Tools */}
          <div className="mt-8">
            <p className="font-semibold text-gray-300">Tools I use</p>

            <div className="flex flex-wrap justify-center lg:justify-start mt-3 gap-3">

              {/* VS Code */}
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="
                  text-blue-400 text-xl
                  p-2 rounded-lg
                  bg-white/5 border border-white/10
                  flex items-center justify-center
                  cursor-pointer
                "
              >
                <VscVscode />
              </motion.div>

              {/* Icons */}
              {["/img2.png", "/img3.png", "/img4.png", "/img5.png"].map((img, i) => (
                <motion.img
                  key={i}
                  whileHover={{ scale: 1.15 }}
                  src={img}
                  className="
                    h-10 w-10 p-2
                    rounded-lg
                    bg-white/5 border border-white/10
                    cursor-pointer
                  "
                />
              ))}

            </div>
          </div>

        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;






















































