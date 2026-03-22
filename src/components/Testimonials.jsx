// import React from 'react'

// const Testimonials = () => {
//   return (
//     <div className='h-screen'>
//       <div className='text-center'>
//         <p className='text-lg font-bold pt-10' >Connect with me</p>
//         <p className='text-5xl font-semibold mt-2'>Get in touch</p>
//         <p className='font-semibold mt-6'>I'd love to hear from you! If you have any questions, comments or  <br />
// feedback, please use the form below.</p>
//       </div>
//       <div className='text-center p-10'>
//        <input className='border  ' type="text" placeholder="Enter your name" />
//         <input className='border ml-5' type="email" placeholder="Enter your email" />
//         <br />

        
//             <textarea className='border mt-5 h-60 w-96' placeholder="Enter your message"></textarea>
        
//       </div>
//     </div>
//   )
// }

// export default Testimonials










//without gpt



// import React from 'react'

// const Testimonials = () => {
//   return (
//     <div className='min-h-screen px-4 sm:px-6 lg:px-16'>
//       <div className='text-center'>
//         <p className='text-lg font-bold pt-10'>Connect with me</p>
//         <p className='text-5xl font-semibold mt-2'>Get in touch</p>
//         <p className='font-semibold mt-6'>
//           I'd love to hear from you! If you have any questions, comments or <br />
//           feedback, please use the form below.
//         </p>
//       </div>

//       <div className='flex flex-col items-center p-4 sm:p-10 gap-4'>
//         <div className='flex flex-col sm:flex-row gap-4 w-full max-w-2xl'>
//           <input 
//             className='border p-2 flex-1 rounded-md' 
//             type="text" 
//             placeholder="Enter your name" 
//           />
//           <input 
//             className='border p-2 flex-1 rounded-md' 
//             type="email" 
//             placeholder="Enter your email" 
//           />
//         </div>

//         <textarea 
//           className='border p-2 mt-2 w-full max-w-2xl h-48 sm:h-60 rounded-md' 
//           placeholder="Enter your message">
//         </textarea>

//         {/* Submit Button */}
//         <button className='mt-4 px-6 py-2 bg-blue-600 text-white cursor-pointer font-semibold rounded-md hover:bg-blue-700 transition-all duration-300'>
//           Submit
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Testimonials




































































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
    transition: { duration: 0.6 },
  },
};

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-4 sm:px-6 lg:px-20">

      {/* Heading */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center pt-20"
      >
        <motion.p variants={fadeUp} className="text-gray-400">
          Connect with me
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-4xl lg:text-5xl font-bold mt-2"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-gray-400 mt-5 max-w-xl mx-auto"
        >
          I'd love to hear from you! If you have any questions, comments or
          feedback, feel free to reach out.
        </motion.p>
      </motion.div>

      {/* Form */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 flex justify-center"
      >
        <motion.form
          variants={fadeUp}
          className="
            w-full max-w-2xl
            p-6 rounded-2xl
            bg-white/5 backdrop-blur-xl
            border border-white/10
            shadow-xl
          "
        >

          {/* Inputs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="
                flex-1 p-3 rounded-lg
                bg-transparent border border-white/10
                focus:outline-none focus:border-indigo-500
                text-white placeholder-gray-400
              "
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="
                flex-1 p-3 rounded-lg
                bg-transparent border border-white/10
                focus:outline-none focus:border-indigo-500
                text-white placeholder-gray-400
              "
            />
          </div>

          {/* Textarea */}
          <textarea
            placeholder="Enter your message"
            className="
              mt-4 w-full h-40 p-3 rounded-lg
              bg-transparent border border-white/10
              focus:outline-none focus:border-indigo-500
              text-white placeholder-gray-400
            "
          ></textarea>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              mt-6 w-full py-3 rounded-full
              bg-gradient-to-r from-indigo-500 to-purple-500
              hover:from-purple-500 hover:to-pink-500
              transition-all duration-300
              font-semibold
              shadow-lg shadow-indigo-500/30
            "
          >
            Send Message →
          </motion.button>

        </motion.form>
      </motion.div>
    </div>
  );
};

export default Testimonials;