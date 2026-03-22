// import React from 'react'



// const Work = () => {
//   return (
//     <div className='h-[700px] '>
//       <div className='text-center'>
// <p className='text-xl font-bold pt-10'>My portfolio</p>
// <p className='text-5xl font-semibold mt-2'>My latest work</p>
// <p className='text-lg font-semibold mt-6'>Welcome to my web development portfolio! Explore a collection of projects showcasing <br />
// my expertise in front-end development.</p>
//       </div>

//       {/* cards */}
//       <div className='flex p-16 gap-10'>
//         {/* card 1 */}
//         <div className='h-60 w-60 rounded-lg border cursor-pointer'>
//           <img className='h-60 w-60 object-cover rounded-lg absolute' src="/project1.png" alt="" />
//           <div className='relative top-40 h-16 w-48 ml-5 border bg-white flex justify-around items-center'>

// <div>
//   <p className='text-[14px] font-bold'>Frontend project</p>
// <p className='text-[11px] font-semibold'>Web Development</p>
// </div>
// <div className='h-10 w-10 border rounded-full'>
//   <img className='h-5 w-5 m-2' src="/vector.png" alt="" />
// </div>
//           </div>

//         </div>

//         {/* card 2 */}

//           <div className='h-60 w-60 rounded-lg border cursor-pointer'>
//           <img className='h-60 w-60 object-cover rounded-lg absolute' src="/project2.png" alt="" />
//           <div className='relative top-40 h-16 w-48 ml-5 border bg-white flex justify-around items-center'>

// <div>
//   <p className='text-[14px] font-bold'>Frontend project</p>
// <p className='text-[11px] font-semibold'>Web Design</p>
// </div>
// <div className='h-10 w-10 border rounded-full'>
//   <img className='h-5 w-5 m-2' src="/vector.png" alt="" />
// </div>
//           </div>

//         </div>
//  {/* card 3 */}

//    <div className='h-60 w-60 rounded-lg border cursor-pointer'>
//           <img className='h-60 w-60 object-cover rounded-lg absolute' src="/project3.png" alt="" />
//           <div className='relative top-40 h-16 w-48 ml-5 border bg-white flex justify-around items-center'>

// <div>
//   <p className='text-[14px] font-bold'>Frontend project</p>
// <p className='text-[11px] font-semibold'>Portfolio Design</p>
// </div>
// <div className='h-10 w-10 border rounded-full'>
//   <img className='h-5 w-5 m-2' src="/vector.png" alt="" />
// </div>
//           </div>

//         </div>
//  {/* card 4 */}
//    <div className='h-60 w-60 rounded-lg border cursor-pointer'>
//           <img className='h-60 w-60 object-cover rounded-lg absolute' src="/project4.png" alt="" />
//           <div className='relative top-40 h-16 w-48 ml-5 border bg-white flex justify-around items-center'>

// <div>
//   <p className='text-[14px] font-bold'>Frontend project</p>
// <p className='text-[11px] font-semibold'>E-commerce Projects</p>
// </div>
// <div className='h-10 w-10 border rounded-full'>
//   <img className='h-5 w-5 m-2' src="/vector.png" alt="" />
// </div>
//           </div>

//         </div>




//       </div>
//       <button className=' border h-12 w-40 rounded-full cursor-pointer   items-center text-lg font-semibold ml-[530px]'>Show more →
//   </button>
//     </div>
//   )
// }

// export default Work




























// import { a } from "framer-motion/client";
// import React from "react";

// const Work = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="text-center">
//         <p className="text-xl font-bold pt-10">My Portfolio</p>
//         <p className="text-5xl font-semibold mt-2">My Latest Work</p>
//         <p className="text-lg font-semibold mt-6">
//           Welcome to my web development portfolio! Explore a collection of
//           projects showcasing <br /> my expertise in front-end development.
//         </p>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-16">
//         {[
//           {
//             id: 1,
//             title: "Frontend Project",
//             subtitle: "Web Development",
//             image: "/project1.png",
//             backText:
//               "This project highlights responsive UI design and modern JS features.",
             
//           },
//           {
//             id: 2,
//             title: "Frontend Project",
//             subtitle: "Web Design",
//             image: "/project2.png",
//             backText:
//               "Focused on UX and aesthetic layouts using React and Tailwind.",

//           },
//           {
//             id: 3,
//             title: "Frontend Project",
//             subtitle: "Portfolio Design",
//             image: "/project3.png",
//             backText:
//               "Personal portfolio showcasing my creative and technical expertise.",
//           },
//           {
//             id: 4,
//             title: "Frontend Project",
//             subtitle: "E-commerce Projects",
//             image: "/project4.png",
//             backText:
//               "Interactive online store built with React and state management.",
//           },
//         ].map((card) => (
//           <div key={card.id} className="group relative h-60 w-60 mx-auto">
//             {/* Flip Container */}
//             <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180 cursor-pointer">
//               {/* Front */}
//               <div className="absolute inset-0 backface-hidden rounded-lg overflow-hidden">
//                 <img
//                   className="h-60 w-60 object-cover rounded-lg shadow-md"
//                   src={card.image}
//                   alt={card.title}
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 h-20 mx-3 mb-3 border bg-white bg-opacity-90 flex justify-between items-center rounded-md shadow-lg px-3">
//                   <div>
//                     <p className="text-[14px] font-bold">{card.title}</p>
//                     <p className="text-[11px] font-semibold">{card.subtitle}</p>
//                   </div>
//                   <div className="h-10 w-10 border rounded-full flex items-center justify-center">
//                     <img className="h-5 w-5" src="/vector.png" alt="icon" />
//                   </div>
//                 </div>
//               </div>

//               {/* Back */}
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-600 text-white text-center p-4 rounded-lg backface-hidden rotate-y-180">
//                 <p className="text-lg font-semibold mb-2">{card.title}</p>
//                 <p className="text-sm">{card.backText}</p>
//                 <p>{card.link}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <button className="border h-12 w-40 rounded-full cursor-pointer items-center text-lg font-semibold block mx-auto hover:bg-black hover:text-white transition-all duration-300">
//         Show more →
//       </button>

//       {/* Extra styles for 3D transform */}
//       <style jsx>{`
//         .transform-style-preserve-3d {
//           transform-style: preserve-3d;
//         }
//         .backface-hidden {
//           backface-visibility: hidden;
//         }
//         .rotate-y-180 {
//           transform: rotateY(180deg);
//         }
//         .group-hover\\:rotate-y-180:hover {
//           transform: rotateY(180deg);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Work;
















































// import React from "react";

// const Work = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header Section */}
//       <div className="text-center">
//         <p className="text-xl font-bold pt-10">My Portfolio</p>
//         <p className="text-5xl font-semibold mt-2">My Latest Work</p>
//         <p className="text-lg font-semibold mt-6">
//           Welcome to my web development portfolio! Explore a collection of
//           projects showcasing <br /> my expertise in front-end development.
//         </p>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-16">
//         {[
//           {
//             id: 1,
//             title: "Frontend Project",
//             subtitle: "Web Development",
//             image: "/project1.png",
//             backText:
//               "This project highlights responsive UI design and modern JS features.",
//           },
//           {
//             id: 2,
//             title: "Frontend Project",
//             subtitle: "Web Design",
//             image: "/project2.png",
//             backText:
//               "Focused on UX and aesthetic layouts using React and Tailwind.",
//           },
//           {
//             id: 3,
//             title: "Frontend Project",
//             subtitle: "Portfolio Design",
//             image: "/project3.png",
//             backText:
//               "Personal portfolio showcasing my creative and technical expertise.",
//           },
//           {
//             id: 4,
//             title: "Frontend Project",
//             subtitle: "E-commerce Projects",
//             image: "/project4.png",
//             backText:
//               "Interactive online store built with React and state management.",
//           },
//         ].map((card) => (
//           <div key={card.id} className="group relative h-60 w-60 mx-auto">
//             {/* Flip Container */}
//             <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180 cursor-pointer">
              
//               {/* Front Side */}
//               <div className="absolute inset-0 backface-hidden rounded-lg overflow-hidden">
//                 <img
//                   className="h-60 w-60 object-cover rounded-lg shadow-md"
//                   src={card.image}
//                   alt={card.title}
//                 />
//                 {/* Info Box on top of image */}
//                 <div className="absolute bottom-0 left-0 right-0 h-20 mx-3 mb-3 border bg-white bg-opacity-90 flex justify-between items-center rounded-md shadow-lg px-3">
//                   <div>
//                     <p className="text-[14px] font-bold">{card.title}</p>
//                     <p className="text-[11px] font-semibold">{card.subtitle}</p>
//                   </div>
//                   <div className="h-10 w-10 border rounded-full flex items-center justify-center">
//                     <img className="h-5 w-5" src="/vector.png" alt="icon" />
//                   </div>
//                 </div>
//               </div>

//               {/* Back Side */}
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-600 text-white text-center p-4 rounded-lg backface-hidden rotate-y-180">
//                 <p className="text-lg font-semibold mb-2">{card.title}</p>
//                 <p className="text-sm mb-4">{card.backText}</p>

//                 {/* View Project Button */}
//                 <a
//                   href="https://bilalmalik318.netlify.app"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mt-2 px-4 py-2 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition-all duration-300"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Show More Button */}
//       <button className="border h-12 w-40 rounded-full cursor-pointer items-center text-lg font-semibold block mx-auto hover:bg-black hover:text-white transition-all duration-300">
//         Show more →
//       </button>

//       {/* Extra styles for 3D flip */}
//       <style jsx>{`
//         .transform-style-preserve-3d {
//           transform-style: preserve-3d;
//         }
//         .backface-hidden {
//           backface-visibility: hidden;
//         }
//         .rotate-y-180 {
//           transform: rotateY(180deg);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Work;






































































































// import React, { useState } from "react";

// const Work = () => {
//   const [flipped, setFlipped] = useState({});

//   const handleFlip = (id) => {
//     setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   return (
//     <div className='min-h-screen bg-gray-50'>
//       <div className='text-center'>
//         <p className='text-xl font-bold pt-10'>My Portfolio</p>
//         <p className='text-5xl font-semibold mt-2'>My Latest Work</p>
//         <p className='text-lg font-semibold mt-6'>
//           Welcome to my web development portfolio! Explore a collection of<br /> my expertise in front-end development.
//         </p>
//       </div>

//       {/* Cards Grid */}
//       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-16'>
//         {[
//           { id: 1, title: 'Frontend Project', subtitle: 'Web Development', image: '/project1.png', backText: 'This project highlights responsive UI design and modern JS features.' },
//           { id: 2, title: 'Frontend Project', subtitle: 'Web Design', image: '/project2.png', backText: 'Focused on UX and aesthetic layouts using React and Tailwind.' },
//           { id: 3, title: 'Frontend Project', subtitle: 'Portfolio Design', image: '/project3.png', backText: 'Personal portfolio showcasing my creative and technical expertise.' },
//           { id: 4, title: 'Frontend Project', subtitle: 'E-commerce Projects', image: '/project4.png', backText: 'Interactive online store built with React and state management.' }
//         ].map((card) => (
//           <div key={card.id} className='group relative h-60 w-60 mx-auto' onClick={() => handleFlip(card.id)}>
//             {/* Flip Container */}
//             <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${flipped[card.id] ? 'rotate-y-180' : ''}`}>
//               {/* Front */}
//               <div className='absolute inset-0 backface-hidden'>
//                 <img className='h-60 w-60 object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-105' src={card.image} alt={card.title} />
//                 <div className='absolute bottom-0 left-0 right-0 h-20 mx-3 mb-3 border bg-white bg-opacity-90 flex justify-around items-center rounded-md shadow-lg px-3'>
//                   <div>
//                     <p className='text-[14px] font-bold'>{card.title}</p>
//                     <p className='text-[11px] font-semibold'>{card.subtitle}</p>
//                   </div>
//                   <div className='h-10 w-10 border rounded-full flex items-center justify-center'>
//                     <img className='h-5 w-5' src='/vector.png' alt='icon' />
//                   </div>
//                 </div>
//               </div>

//               {/* Back */}
//               <div className='absolute inset-0 flex flex-col items-center justify-center bg-blue-600 text-white text-center p-4 rounded-lg backface-hidden rotate-y-180'>
//                 <p className='text-lg font-semibold mb-2'>{card.title}</p>
//                 <p className='text-sm mb-4'>{card.backText}</p>
//                 <a href='https://calculator318.netlify.app' target='_blank' rel='noopener noreferrer' className='mt-2 px-4 py-2 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition-all duration-300'>
//                   View Project →
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <button className='border h-12 w-40 rounded-full cursor-pointer items-center text-lg font-semibold block mx-auto hover:bg-black hover:text-white transition-all duration-300'>
//         Show more →
//       </button>

//       {/* Extra styles for 3D flip */}
//       <style jsx>{`
//         .transform-style-preserve-3d { transform-style: preserve-3d; }
//         .backface-hidden { backface-visibility: hidden; }
//         .rotate-y-180 { transform: rotateY(180deg); }
//       `}</style>
//     </div>
//   );
// };

// export default Work;


























































































// import React from "react";

// const Work = () => {
//   const links = [
//     'https://calculator318.netlify.app',
//     'https://stone-paper-scissors-bilal.netlify.app',
//     'https://jymm.netlify.app',
//     'https://bilal-malik.netlify.app'
//   ];

//   return (
//     <div className='min-h-screen bg-gray-50 px-4 sm:px-8 lg:px-16'>
//       <div className='text-center'>
//         <p className='text-xl font-bold pt-10'>My Portfolio</p>
//         <p className='text-5xl font-semibold mt-2'>My Latest Work</p>
//         <p className='text-lg font-semibold mt-6'>
//           Welcome to my web development portfolio! Explore a collection of<br /> my expertise in front-end development.
//         </p>
//       </div>

//       {/* Cards Grid */}
//       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 p-4 sm:p-8 lg:p-16'>
//         {[
//           { id: 1, title: 'Frontend Project', subtitle: 'Web Development', image: '/project1.png', backText: 'This project highlights responsive UI design and modern JS features.' },
//           { id: 2, title: 'Frontend Project', subtitle: 'Web Design', image: '/project2.png', backText: 'Focused on UX and aesthetic layouts using React and Tailwind.' },
//           { id: 3, title: 'Frontend Project', subtitle: 'Portfolio Design', image: '/project3.png', backText: 'Personal portfolio showcasing my creative and technical expertise.' },
//           { id: 4, title: 'Frontend Project', subtitle: 'E-commerce Projects', image: '/project4.png', backText: 'Interactive online store built with React and state management.' }
//         ].map((card, index) => (
//           <div key={card.id} className='group relative h-56 sm:h-60 w-full max-w-[250px] mx-auto cursor-pointer'>
//             {/* Flip Container */}
//             <div className='relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180'>
//               {/* Front */}
//               <div className='absolute inset-0 backface-hidden'>
//                 <img className='h-56 sm:h-60 w-full object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-105' src={card.image} alt={card.title} />
//                 <div className='absolute bottom-0 left-0 right-0 h-20 mx-3 mb-3 border bg-white bg-opacity-90 flex justify-around items-center rounded-md shadow-lg px-3'>
//                   <div>
//                     <p className='text-[12px] sm:text-[14px] font-bold'>{card.title}</p>
//                     <p className='text-[10px] sm:text-[11px] font-semibold'>{card.subtitle}</p>
//                   </div>
//                   <div className='h-8 w-8 sm:h-10 sm:w-10 border rounded-full flex items-center justify-center'>
//                     <img className='h-4 w-4 sm:h-5 sm:w-5' src='/vector.png' alt='icon' />
//                   </div>
//                 </div>
//               </div>

//               {/* Back */}
//               <div className='absolute inset-0 flex flex-col items-center justify-center bg-blue-600 text-white text-center p-4 rounded-lg backface-hidden rotate-y-180'>
//                 <p className='text-lg font-semibold mb-2'>{card.title}</p>
//                 <p className='text-sm mb-4'>{card.backText}</p>
//                 <a href={links[index]} target='_blank' rel='noopener noreferrer' className='mt-2 px-4 py-2 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition-all duration-300'>
//                   View Project →
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <button className='border h-12 w-40 rounded-full cursor-pointer items-center text-lg font-semibold block mx-auto hover:bg-black hover:text-white transition-all duration-300'>
//         Show more →
//       </button>

//       {/* Extra styles for 3D flip */}
//       <style jsx>{`
//         .transform-style-preserve-3d { transform-style: preserve-3d; }
//         .backface-hidden { backface-visibility: hidden; }
//         .rotate-y-180 { transform: rotateY(180deg); }
//       `}</style>
//     </div>
//   );
// };

// export default Work;































// import React from "react";

// const Work = () => {
//   const links = [
//     'https://calculator318.netlify.app',
//     'https://stone-paper-scissors-bilal.netlify.app',
//     'https://jymm.netlify.app',
//     'https://bilal-malik.netlify.app'
//   ];

//   return (
//     <div className='min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-16'>
      
//       {/* Top Heading */}
//       <div className='text-center'>
//         <p className='text-xl font-bold pt-10'>My Portfolio</p>
//         <p className='text-5xl font-semibold mt-2'>My Latest Work</p>
//         <p className='text-lg font-semibold mt-6'>
//           Welcome to my web development portfolio! Explore a collection of <br />
//           my expertise in front-end development.
//         </p>
//       </div>

//       {/* Cards Grid */}
//       <div
//         className='
//           grid 
//           grid-cols-1 
//           sm:grid-cols-2 
//           lg:grid-cols-4 
//           gap-6 sm:gap-10 
//           p-4 sm:p-8 lg:p-16 
//           place-items-center      /* center cards on mobile + tablet */
//         '
//       >
//         {[
//           { id: 1, title: 'Frontend Project', subtitle: 'Web Development', image: '/project1.png', backText: 'This project highlights responsive UI design and modern JS features.' },
//           { id: 2, title: 'Frontend Project', subtitle: 'Web Design', image: '/project2.png', backText: 'Focused on UX and aesthetic layouts using React and Tailwind.' },
//           { id: 3, title: 'Frontend Project', subtitle: 'Portfolio Design', image: '/project3.png', backText: 'Personal portfolio showcasing my creative and technical expertise.' },
//           { id: 4, title: 'Frontend Project', subtitle: 'E-commerce Projects', image: '/project4.png', backText: 'Interactive online store built with React and state management.' }
//         ].map((card, index) => (
//           <div
//             key={card.id}
//             className='
//               group 
//               relative 
//               h-56 sm:h-60 
//               w-full 
//               max-w-[250px] 
//               mx-auto 
//               cursor-pointer
//             '
//           >
//             {/* Flip Container */}
//             <div className='relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180'>

//               {/* FRONT */}
//               <div className='absolute inset-0 backface-hidden'>
//                 <img
//                   className='h-56 sm:h-60 w-full object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-105'
//                   src={card.image}
//                   alt={card.title}
//                 />

//                 <div className='absolute bottom-0 left-0 right-0 h-20 mx-3 mb-3 border bg-white bg-opacity-90 flex justify-around items-center rounded-md shadow-lg px-3'>
//                   <div>
//                     <p className='text-[12px] sm:text-[14px] font-bold'>{card.title}</p>
//                     <p className='text-[10px] sm:text-[11px] font-semibold'>{card.subtitle}</p>
//                   </div>

//                   <div className='h-8 w-8 sm:h-10 sm:w-10 border rounded-full flex items-center justify-center'>
//                     <img className='h-4 w-4 sm:h-5 sm:w-5' src='/vector.png' alt='icon' />
//                   </div>
//                 </div>
//               </div>

//               {/* BACK */}
//               <div className='absolute inset-0 flex flex-col items-center justify-center bg-blue-600 text-white text-center p-4 rounded-lg backface-hidden rotate-y-180'>
//                 <p className='text-lg font-semibold mb-2'>{card.title}</p>
//                 <p className='text-sm mb-4'>{card.backText}</p>

//                 <a
//                   href={links[index]}
//                   target='_blank'
//                   rel='noopener noreferrer'
//                   className='mt-2 px-4 py-2 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition-all duration-300'
//                 >
//                   View Project →
//                 </a>
//               </div>

//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Button */}
//       <button className='border h-12 w-40 rounded-full cursor-pointer items-center text-lg font-semibold block mx-auto hover:bg-black hover:text-white transition-all duration-300'>
//         Show more →
//       </button>

//       {/* Flip Styles */}
//       <style jsx>{`
//         .transform-style-preserve-3d { transform-style: preserve-3d; }
//         .backface-hidden { backface-visibility: hidden; }
//         .rotate-y-180 { transform: rotateY(180deg); }
//       `}</style>
//     </div>
//   );
// };

// export default Work;
























// without gpt



// import React from "react";

// const Work = ({ darkMode }) => {
//   const links = [
//     'https://calculator318.netlify.app',
//     'https://stone-paper-scissors-bilal.netlify.app',
//     'https://jymm.netlify.app',
//     'https://bilal-malik.netlify.app'
//   ];

//   return (
//     <div
//       className={`min-h-screen px-4 sm:px-6 lg:px-16 transition-all duration-300
//         ${darkMode ? "bg-[#0f172a] text-white" : "bg-gray-50 text-black"}
//       `}
//     >

//       {/* Top Heading */}
//       <div className="text-center">
//         <p className={`text-xl font-bold pt-10 ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
//           My Portfolio
//         </p>

//         <p className="text-5xl font-semibold mt-2">
//           My Latest Work
//         </p>

//         <p className={`text-lg font-semibold mt-6 ${darkMode ? "text-gray-400" : "text-gray-700"}`}>
//           Welcome to my web development portfolio! Explore a collection of <br />
//           my expertise in front-end development.
//         </p>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 p-4 sm:p-8 lg:p-16 place-items-center">

//         {[
//           { id: 1, title: 'Frontend Project', subtitle: 'Web Development', image: '/project1.png', backText: 'This project highlights responsive UI design and modern JS features.' },
//           { id: 2, title: 'Frontend Project', subtitle: 'Web Design', image: '/project2.png', backText: 'Focused on UX and aesthetic layouts using React and Tailwind.' },
//           { id: 3, title: 'Frontend Project', subtitle: 'Portfolio Design', image: '/project3.png', backText: 'Personal portfolio showcasing my creative and technical expertise.' },
//           { id: 4, title: 'Frontend Project', subtitle: 'E-commerce Projects', image: '/project4.png', backText: 'Interactive online store built with React and state management.' }
//         ].map((card, index) => (
//           <div key={card.id} className="group relative h-56 sm:h-60 w-full max-w-[250px] mx-auto cursor-pointer">

//             {/* Flip Container */}
//             <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">

//               {/* FRONT */}
//               <div className="absolute inset-0 backface-hidden">
//                 <img
//                   className="h-56 sm:h-60 w-full object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-105"
//                   src={card.image}
//                   alt={card.title}
//                 />

//                 <div
//                   className={`absolute bottom-0 left-0 right-0 h-20 mx-3 mb-3 border rounded-md shadow-lg px-3 flex justify-around items-center
//                     ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}
//                   `}
//                 >
//                   <div>
//                     <p className="text-sm font-bold">{card.title}</p>
//                     <p className={`text-xs font-semibold ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
//                       {card.subtitle}
//                     </p>
//                   </div>

//                   <div className={`h-10 w-10 border rounded-full flex items-center justify-center ${darkMode ? "border-gray-600" : "border-gray-300"}`}>
//                     <img className="h-5 w-5" src="/vector.png" alt="icon" />
//                   </div>
//                 </div>
//               </div>

//               {/* BACK */}
//               <div
//                 className={`absolute inset-0 flex flex-col items-center justify-center text-center p-4 rounded-lg backface-hidden rotate-y-180
//                   ${darkMode ? "bg-blue-500 text-white" : "bg-blue-600 text-white"}
//                 `}
//               >
//                 <p className="text-lg font-semibold mb-2">{card.title}</p>
//                 <p className="text-sm mb-4">{card.backText}</p>

//                 <a
//                   href={links[index]}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mt-2 px-4 py-2 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition-all duration-300"
//                 >
//                   View Project →
//                 </a>
//               </div>

//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Button */}
//       <button
//         className={`border h-12 w-40 rounded-full block mx-auto text-lg font-semibold transition-all duration-300
//           ${darkMode
//             ? "border-gray-500 hover:bg-white hover:text-black"
//             : "border-gray-300 hover:bg-black hover:text-white"}
//         `}
//       >
//         Show more →
//       </button>

//       {/* Flip Styles */}
//       <style jsx>{`
//         .transform-style-preserve-3d { transform-style: preserve-3d; }
//         .backface-hidden { backface-visibility: hidden; }
//         .rotate-y-180 { transform: rotateY(180deg); }
//       `}</style>

//     </div>
//   );
// };

// export default Work;
















































































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

const Work = ({ darkMode }) => {
  const links = [
    "https://calculator318.netlify.app",
    "https://stone-paper-scissors-bilal.netlify.app",
    "https://jymm.netlify.app",
    "https://bilal-malik.netlify.app",
  ];

  const projects = [
    {
      title: "Frontend Project",
      subtitle: "Web Development",
      image: "/project1.png",
      desc: "Responsive UI with modern JavaScript features.",
    },
    {
      title: "Frontend Project",
      subtitle: "Web Design",
      image: "/project2.png",
      desc: "Clean UI/UX using React & Tailwind.",
    },
    {
      title: "Frontend Project",
      subtitle: "Portfolio Design",
      image: "/project3.png",
      desc: "Creative personal portfolio showcase.",
    },
    {
      title: "Frontend Project",
      subtitle: "E-commerce",
      image: "/project4.png",
      desc: "Scalable store with smooth UX.",
    },
  ];

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
          My Portfolio
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-4xl lg:text-5xl font-bold mt-2"
        >
          My Latest Work
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-gray-400 mt-5 max-w-2xl mx-auto"
        >
          Explore a collection of projects showcasing my frontend development
          skills and modern UI/UX practices.
        </motion.p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 max-w-6xl mx-auto"
      >
        {projects.map((card, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="group perspective cursor-pointer"
          >
            <div className="relative h-64 w-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">

              {/* FRONT */}
              <div className="absolute inset-0 backface-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover rounded-2xl border border-white/10 shadow-lg"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>

                {/* Info */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/10">
                  <p className="text-sm font-semibold">{card.title}</p>
                  <p className="text-xs text-gray-300">{card.subtitle}</p>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col justify-center items-center text-center p-5 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl">
                <p className="text-lg font-semibold">{card.title}</p>
                <p className="text-sm mt-2 text-gray-100">{card.desc}</p>

                <a
                  href={links[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-2 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition"
                >
                  View Project →
                </a>
              </div>

            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Button */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="mt-12 flex justify-center"
      >
        <button className="px-6 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition duration-300">
          Show more →
        </button>
      </motion.div>

      {/* Flip Styles */}
      <style jsx>{`
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default Work;







































